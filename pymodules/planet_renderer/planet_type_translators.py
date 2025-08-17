#!/usr/bin/env python3
"""
Planet Type Translators Module
Contains all the specific planet type translation methods.
"""

import math
import random
from typing import Dict, Any
from .common_utils import CommonUtils


class PlanetTypeTranslators:
    """Contains all planet-specific translation methods"""
    
    def __init__(self):
        self.common_utils = CommonUtils()
    
    def translate_gas_giant(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Gas Giant specific elements EXACTLY as in Pillow"""
        
        # EXACTLY as in generate_cloud_bands from Pillow (__drawer_cplanet_inside.py)
        num_bands = rng.randint(3, 20)  # min_num_bands=3, max_num_bands=20
        rotation_angle = rng.uniform(-15, 15) * math.pi / 180  # Exact as Pillow
        
        band_positions = []
        band_widths = []
        center_y = 200  # Center Y in Pillow system (400x400 image)
        
        for i in range(num_bands):
            band_width = rng.randint(2, 4)
            # EXACTLY as in Pillow: center_y - planet_radius to center_y + planet_radius
            band_position_y = rng.randint(center_y - planet_radius, center_y + planet_radius)
            
            # Convert Pillow coordinates to sphere
            # In Pillow with center=200, radius=100: Y goes from 100 (top) to 300 (bottom)
            # In sphere: Y goes from +1 (north pole) to -1 (south pole)
            # Map 100->+1, 200->0, 300->-1
            normalized_y = 1.0 - 2.0 * (band_position_y - 100) / 200
            
            band_positions.append(normalized_y)
            band_widths.append(band_width / planet_radius)  # Normalize width
        
        # Fill arrays up to 20 elements (fixed shader size)
        while len(band_positions) < 20:
            band_positions.append(0)
            band_widths.append(0)
        
        # Generate storm data (like in Pillow)
        storms = []
        if rng.random() < 0.5:  # 50% chance as in Pillow
            storm_radius = rng.randint(30, 50)
            storm_x = rng.uniform(-0.3, 0.3)  # Within planet radius
            storm_y = rng.uniform(-0.3, 0.3)
            storms.append({
                "position": [storm_x, storm_y],
                "radius": storm_radius / planet_radius,
                "color": [0.545, 0.0, 0.0, 0.6],  # darkred as in Pillow
                "intensity": rng.uniform(0.5, 1.0)
            })
        
        return {
            "type": "gas_giant",
            "cloud_bands": {
                "num_bands": num_bands,
                "positions": band_positions,  # Already padded to 20
                "widths": band_widths,        # Already padded to 20
                "rotation": rotation_angle
            },
            "storms": storms,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_y": center_y,
                "band_count": num_bands,
                "rotation_degrees": rotation_angle * 180 / math.pi
            }
        }
    
    def translate_rocky(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Rocky planet elements EXACTLY as in Pillow"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # EXACT abstract land generation (two layers)
        abstract_lands = [
            {
                "layer": 0,
                "color": [38/255.0, 38/255.0, 38/255.0, 165/255.0],
                "points_min": 8, "points_max": 10,
                "seg_min": 1, "seg_max": 2,
                "seed": f"{seed}-{planet_name}-abstract_land_0"
            },
            {
                "layer": 1, 
                "color": [80/255.0, 80/255.0, 80/255.0, 40/255.0],
                "points_min": 12, "points_max": 20,
                "seg_min": 1, "seg_max": 6,
                "seed": f"{seed}-{planet_name}-abstract_land_1"
            }
        ]
        
        # EXACT mountain generation (lines 194-228 in Pillow)
        num_mountains = rng.randint(4, 30)
        mountains = []
        mountain_color = [130/255.0, 130/255.0, 130/255.0, 1.0]
        
        for _ in range(num_mountains):
            mountain_width = rng.randint(4, 8)
            mountain_height = rng.randint(4, 8)
            mountain_x = center_x + rng.randint(-planet_radius, planet_radius)
            mountain_y = center_y + rng.randint(-planet_radius, planet_radius)
            
            # Convert to normalized coordinates (-1 to 1)
            normalized_x = (mountain_x - center_x) / planet_radius
            normalized_y = (mountain_y - center_y) / planet_radius
            
            angle = math.radians(rng.uniform(-40, 40))
            
            mountains.append({
                "position": [normalized_x, normalized_y],
                "width": mountain_width / planet_radius,
                "height": mountain_height / planet_radius,
                "angle": angle,
                "color": mountain_color
            })
        
        # EXACT cloud generation (lines 230-243 in Pillow)
        num_clouds = rng.randint(5, 10)
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(10, 30)
            cloud_x = center_x + rng.randint(-planet_radius, planet_radius)
            cloud_y = center_y + rng.randint(-planet_radius, planet_radius)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": [0.5, 0.5, 0.5, 0.7],  # gray
                "type": "cloud",
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        # EXACT crater generation (lines 245-257 in Pillow)
        crater = None
        if rng.random() < 0.7:
            crater_radius = rng.randint(15, 40)
            crater_x = center_x + rng.randint(-planet_radius, planet_radius)
            crater_y = center_y + rng.randint(-planet_radius, planet_radius)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                crater_x, crater_y, center_x, center_y, planet_radius
            )
            
            crater = {
                "position": normalized_coords,
                "radius": crater_radius / planet_radius,
                "color": [0.3, 0.3, 0.3, 1.0],  # darkgray
                "type": "crater",
                "seed": f"{planet_name}_crater"
            }
        
        return {
            "type": "rocky",
            "abstract_lands": abstract_lands,
            "mountains": mountains,
            "clouds": clouds,
            "crater": crater,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "mountain_count": num_mountains,
                "cloud_count": num_clouds,
                "has_crater": crater is not None
            }
        }
    
    def translate_icy(self, planet_radius: int, rng: random.Random, 
                     seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Icy planet elements EXACTLY as in Pillow"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        two_pi = 2 * math.pi
        
        # EXACT abstract land generation (two layers as in Pillow lines 266-290)
        abstract_lands = [
            {
                "layer": 0,
                "color": [126/255.0, 169/255.0, 214/255.0, 150/255.0],
                "points_min": 6, "points_max": 8,
                "seg_min": 8, "seg_max": 14,
                "seed": f"{seed}-{planet_name}-abstract_land_0"
            },
            {
                "layer": 1,
                "color": [81/255.0, 106/255.0, 145/255.0, 1/255.0],
                "points_min": 40, "points_max": 60,
                "seg_min": 1, "seg_max": 1,
                "seed": f"{seed}-{planet_name}-abstract_land_1"
            }
        ]
        
        # EXACT crystal generation (lines 294-324 in Pillow)
        num_crystals = rng.randint(20, 30)
        crystals = []
        
        for _ in range(num_crystals):
            crystal_length = rng.randint(5, 15)
            crystal_width = rng.randint(8, 20) 
            crystal_angle = rng.uniform(0, two_pi)
            
            # Polar bias (exactly as in Pillow)
            polar_bias = rng.choice([-1, 1])
            polar_offset = rng.uniform(0.5 * planet_radius, planet_radius) * polar_bias
            crystal_x = center_x + rng.uniform(-0.3 * planet_radius, 0.3 * planet_radius)
            crystal_y = center_y + polar_offset
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                crystal_x, crystal_y, center_x, center_y, planet_radius
            )
            
            crystals.append({
                "position": normalized_coords,
                "length": crystal_length / planet_radius,
                "width": crystal_width / planet_radius,
                "angle": crystal_angle,
                "color": [172/255.0, 215/255.0, 230/255.0, 1.0]  # (172, 215, 230, 255)
            })
        
        # EXACT crack generation (lines 326-341 in Pillow)
        cracks = []
        if rng.random() < 0.5:
            crack_length = 200
            crack_angle = rng.uniform(0, two_pi)
            num_cracks = rng.randint(3, 12)
            
            for _ in range(num_cracks):
                adjusted_angle = crack_angle + rng.uniform(-1, 1)
                cracks.append({
                    "angle": adjusted_angle,
                    "length": crack_length / planet_radius,
                    "color": [80/255.0, 80/255.0, 80/255.0, 40/255.0],  # (80, 80, 80, 40)
                    "width": 1
                })
        
        # EXACT ice cap generation (lines 343-356 in Pillow)
        num_ice_caps = rng.randint(2, 4)
        ice_caps = []
        for i in range(num_ice_caps):
            cap_radius = rng.randint(20, 50)
            cap_x = center_x + rng.randint(-planet_radius, planet_radius)
            cap_y = center_y + rng.randint(-planet_radius, planet_radius)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cap_x, cap_y, center_x, center_y, planet_radius
            )
            
            ice_caps.append({
                "position": normalized_coords,
                "radius": cap_radius / planet_radius,
                "color": [0.678, 0.847, 1.0, 0.8],  # lightblue
                "seed": f"{planet_name}_icecap_{i}"
            })
        
        return {
            "type": "icy",
            "abstract_lands": abstract_lands,
            "crystals": crystals,
            "cracks": cracks,
            "ice_caps": ice_caps,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "crystal_count": num_crystals,
                "crack_count": len(cracks),
                "ice_cap_count": num_ice_caps
            }
        }
    
    def translate_oceanic(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Oceanic planet elements EXACTLY as in Pillow"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # EXACT abstract land generation (line 367-377 in Pillow)
        abstract_lands = [{
            "color": [0, 0, 139/255.0, 40/255.0],  # (0, 0, 139, 40)
            "points_min": 40, "points_max": 60,
            "seg_min": 1, "seg_max": 1,
            "seed": f"{seed}-{planet_name}-abstract_land_oceanic"
        }]
        
        # EXACT green patch generation (lines 379-416 in Pillow)
        base_green = [57, 92, 0]
        base_brown = [92, 58, 0]
        
        patch_color = [
            rng.randint(min(base_green[0], base_brown[0]), max(base_green[0], base_brown[0])) / 255.0,
            rng.randint(min(base_green[1], base_brown[1]), max(base_green[1], base_brown[1])) / 255.0,
            rng.randint(min(base_green[2], base_brown[2]), max(base_green[2], base_brown[2])) / 255.0,
            150/255.0
        ]
        
        num_green_patches = rng.randint(10, 20)
        green_patches = []
        for _ in range(num_green_patches):
            patch_size = rng.randint(6, 80)
            
            # Generar posición 3D uniforme en la esfera
            # Usar método de Marsaglia para distribución uniforme
            theta = rng.uniform(0, 2 * math.pi)  # Ángulo azimutal
            phi = math.acos(rng.uniform(-1, 1))   # Ángulo polar (acos para distribución uniforme)
            
            # Convertir a coordenadas cartesianas 3D normalizadas
            patch_3d_x = math.sin(phi) * math.cos(theta)
            patch_3d_y = math.sin(phi) * math.sin(theta)
            patch_3d_z = math.cos(phi)
            
            # También mantener las coordenadas 2D para compatibilidad
            patch_angle = rng.uniform(0, 2 * math.pi)
            patch_distance = rng.uniform(0.3 * planet_radius, planet_radius)
            
            patch_x = center_x + patch_distance * math.cos(patch_angle)
            patch_y = center_y + patch_distance * math.sin(patch_angle)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                patch_x, patch_y, center_x, center_y, planet_radius
            )
            
            green_patches.append({
                "position": normalized_coords,  # Mantener para compatibilidad 2D
                "position_3d": [patch_3d_x, patch_3d_y, patch_3d_z],  # Nueva posición 3D
                "size": patch_size / planet_radius,
                "color": patch_color,
                "sides": rng.randint(20, 30)
            })
        
        # EXACT cloud generation (lines 418-432 in Pillow)
        num_clouds = rng.randint(3, 6)
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(25, int(planet_radius * 0.3))
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": [244/255.0, 164/255.0, 96/255.0, 1.0],  # sandybrown
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        return {
            "type": "oceanic",
            "depths": {"enabled": True},
            "abstract_lands": abstract_lands,
            "green_patches": green_patches,
            "clouds": clouds,
        }
    
    def translate_metallic(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Metallic planet elements using modular 3D effects system"""
        
        # Base metallic color variations
        base_gray = rng.uniform(0.3, 0.5)  # Variación de gris metálico
        
        # Sistema de efectos modulares 3D
        effects_3d = []
        
        # REMOVIDO: metallic_surface - ahora se crea automáticamente como MetallicSurfaceLayer
        # basado en surface.type === 'metallic' en el frontend
        
        # REMOVED: atmospheric_halo - use existing atmosphere system instead
        # Metallic planets will use the regular atmosphere system for consistency
        
        # 3. ESTELAS ATMOSFÉRICAS BLANCAS - referenced line 892
        effects_3d.append({
            "type": "atmospheric_streaks",
            "params": {
                "color": [
                    rng.uniform(0.9, 1.0),
                    rng.uniform(0.9, 1.0),
                    rng.uniform(0.95, 1.0)
                ],
                "particleCount": rng.randint(50, 150),
                "speed": rng.uniform(0.5, 1.5)
            },
            "priority": 20
        })
        
        # Generate universal actions for retrocompatibility
        actions = []
        
        # Ondas circulares sutiles en el interior
        num_waves = rng.randint(3, 6)
        for i in range(num_waves):
            wave_radius = rng.uniform(0.2, 0.8)
            actions.append({
                "type": "draw_circle",
                "params": {
                    "center": [0, 0],  # Centro del planeta
                    "radius": wave_radius,
                    "color": [base_gray * 1.1, base_gray * 1.1, base_gray * 1.15, 0.1],
                    "blend_mode": "add"
                }
            })
        
        return {
            "type": "metallic_3d",
            "effects_3d": effects_3d,
            "universal_actions": actions,

        }
    
    # Placeholder methods for other planet types
    def translate_desert(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "desert"}
    
    def translate_lava(self, planet_radius: int, rng: random.Random, 
                      seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "lava"}
    
    def translate_arid(self, planet_radius: int, rng: random.Random, 
                      seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "arid"}
    
    def translate_swamp(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "swamp"}
    
    def translate_tundra(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "tundra"}
    
    def translate_forest(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "forest"}
    
    def translate_savannah(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "savannah"}
    
    def translate_cave(self, planet_radius: int, rng: random.Random, 
                      seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "cave"}
    
    def translate_crystalline(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "crystalline"}
    
    def translate_toxic(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "toxic"}
    
    def translate_radioactive(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "radioactive"}
    
    def translate_magma(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "magma"}
    
    def translate_molten_core(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "molten_core"}
    
    def translate_carbon(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "carbon"}
    
    def translate_diamond(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "diamond"}
    
    def translate_super_earth(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "super_earth"}
    
    def translate_sub_earth(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "sub_earth"}
    
    def translate_frozen_gas_giant(self, planet_radius: int, rng: random.Random, 
                                  seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "frozen_gas_giant"}
    
    def translate_nebulous(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "nebulous"}
    
    def translate_aquifer(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "aquifer"}
    
    def translate_exotic(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "exotic"}
    
    def translate_anomaly(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "anomaly"}