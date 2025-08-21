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
                           seed: int, planet_name: str, orbital_period_years: float = 12.0) -> Dict[str, Any]:
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
        
        # Polar hexagon generation (like Saturn)
        polar_hexagon = None
        if rng.random() < 0.3:  # 30% chance to have a polar hexagon
            # Calculate visibility cycle based on orbital period
            # Hexagon appears and disappears in cycles
            cycle_duration_years = rng.uniform(orbital_period_years * 0.5, orbital_period_years * 2.0)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.3, cycle_duration_years * 0.7)
            
            # Determine which pole (north or south)
            pole = rng.choice(['north', 'south'])
            
            polar_hexagon = {
                "enabled": True,
                "pole": pole,  # 'north' or 'south'
                "radius": rng.uniform(0.15, 0.25),  # Relative to planet radius
                "rotation_speed": rng.uniform(0.001, 0.003),  # Slow rotation
                "color_darken_factor": rng.uniform(0.15, 0.25),  # How much darker than planet
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "opacity": rng.uniform(0.6, 0.9)
            }
        
        return {
            "type": "gas_giant",
            "cloud_bands": {
                "num_bands": num_bands,
                "positions": band_positions,  # Already padded to 20
                "widths": band_widths,        # Already padded to 20
                "rotation": rotation_angle
            },
            "storms": storms,
            "polar_hexagon": polar_hexagon,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_y": center_y,
                "band_count": num_bands,
                "rotation_degrees": rotation_angle * 180 / math.pi,
                "has_hexagon": polar_hexagon is not None
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
        
        # Cloud generation for icy planets (similar to rocky but with icy colors)
        num_clouds = rng.randint(8, 15)  # More clouds for icy atmosphere
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(15, 35)  # Slightly larger clouds
            cloud_x = center_x + rng.randint(-planet_radius, planet_radius)
            cloud_y = center_y + rng.randint(-planet_radius, planet_radius)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": [0.9, 0.95, 1.0, 0.6],  # Light blue-white clouds for icy atmosphere
                "type": "cloud",
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        return {
            "type": "icy",
            "abstract_lands": abstract_lands,
            "crystals": crystals,
            "cracks": cracks,
            "ice_caps": ice_caps,
            "clouds": clouds,  # Added clouds to icy planets
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "crystal_count": num_crystals,
                "crack_count": len(cracks),
                "ice_cap_count": num_ice_caps,
                "cloud_count": num_clouds  # Added cloud count to debug
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
        """Translate Tundra planet elements - mix of land, seasonal snow, and sparse vegetation"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Base whitish colors with earth tones for tundra (more subtle, snow-covered terrain)
        tundra_colors = [
            [0.85, 0.80, 0.75],  # Whitish brown - snow-covered soil
            [0.88, 0.85, 0.82],  # Light whitish brown - dry earth with snow
            [0.80, 0.82, 0.78],  # Whitish olive - sparse vegetation under snow
            [0.82, 0.85, 0.83],  # Whitish grey-green - lichen/moss under snow
            [0.90, 0.88, 0.88],  # Light grey - snow-covered rock
        ]
        
        # LAND MASSES - using oceanic green_patches system but with tundra colors
        num_land_patches = rng.randint(8, 15)  # More patches than oceanic for fragmented look
        green_patches = []
        
        for i in range(num_land_patches):
            # Generate uniform 3D position (same as oceanic)
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            patch_3d_x = math.sin(phi) * math.cos(theta)
            patch_3d_y = math.sin(phi) * math.sin(theta)
            patch_3d_z = math.cos(phi)
            
            # Also maintain 2D coordinates for compatibility
            patch_angle = rng.uniform(0, 2 * math.pi)
            patch_distance = rng.uniform(0.4 * planet_radius, planet_radius)
            
            patch_x = center_x + patch_distance * math.cos(patch_angle)
            patch_y = center_y + patch_distance * math.sin(patch_angle)
            
            normalized_coords = self.common_utils.normalize_coordinates(
                patch_x, patch_y, center_x, center_y, planet_radius
            )
            
            # Choose random tundra color for this patch with low opacity (25%)
            patch_color = rng.choice(tundra_colors) + [0.25]  # 25% opacity for subtle effect
            
            green_patches.append({
                "position": normalized_coords,
                "position_3d": [patch_3d_x, patch_3d_y, patch_3d_z],
                "size": rng.uniform(0.04, 0.12),  # Variable sizes
                "color": patch_color,
                "sides": rng.randint(12, 25)  # Irregular shapes
            })
        
        # SEASONAL SNOW PATCHES - using adapted ice caps system (more for montículos effect)
        num_snow_patches = rng.randint(8, 15)  # More snow patches for montículos de nieve
        ice_caps = []
        
        for i in range(num_snow_patches):
            # Favor higher latitudes for snow (polar bias like crystals)
            polar_bias = rng.choice([-1, 1])
            latitude_bias = rng.uniform(0.3, 0.8) * polar_bias  # 30-80% toward poles
            
            cap_x = center_x + rng.uniform(-planet_radius * 0.6, planet_radius * 0.6)
            cap_y = center_y + latitude_bias * planet_radius
            
            normalized_coords = self.common_utils.normalize_coordinates(
                cap_x, cap_y, center_x, center_y, planet_radius
            )
            
            # Snow-like colors - white to light blue
            snow_colors = [
                [0.95, 0.95, 0.98, 0.7],  # Pure white snow
                [0.90, 0.94, 0.98, 0.6],  # Light blue snow
                [0.88, 0.92, 0.95, 0.5],  # Slightly blue snow
            ]
            
            # Create mix of small snow mounds and larger snow patches
            if i < num_snow_patches // 2:
                # Small montículos de nieve (snow mounds)
                radius = rng.uniform(0.04, 0.12)
                opacity_boost = rng.uniform(0.6, 0.9)  # Higher opacity for small mounds
            else:
                # Larger seasonal snow patches
                radius = rng.uniform(0.12, 0.22)
                opacity_boost = rng.uniform(0.5, 0.7)  # Lower opacity for larger patches
            
            # Adjust snow color opacity
            snow_color = rng.choice(snow_colors).copy()
            snow_color[3] = opacity_boost
            
            ice_caps.append({
                "position": normalized_coords,
                "radius": radius,
                "color": snow_color,
                "seed": f"{planet_name}_snow_{i}"
            })
        
        # SPARSE ICE CRYSTALS - fewer than full icy planets
        num_crystals = rng.randint(3, 8)  # Much fewer than icy planets
        crystals = []
        
        for _ in range(num_crystals):
            crystal_length = rng.randint(3, 8)  # Smaller crystals  
            crystal_width = rng.randint(4, 12)
            crystal_angle = rng.uniform(0, 2 * math.pi)
            
            # Less polar bias than icy planets - more distributed
            polar_bias = rng.choice([-1, 1])
            polar_offset = rng.uniform(0.2 * planet_radius, 0.7 * planet_radius) * polar_bias
            crystal_x = center_x + rng.uniform(-0.5 * planet_radius, 0.5 * planet_radius)
            crystal_y = center_y + polar_offset
            
            normalized_coords = self.common_utils.normalize_coordinates(
                crystal_x, crystal_y, center_x, center_y, planet_radius
            )
            
            crystals.append({
                "position": normalized_coords,
                "length": crystal_length / planet_radius,
                "width": crystal_width / planet_radius,
                "angle": crystal_angle,
                "color": [0.85, 0.90, 0.95, 0.8]  # Slight blue tint to ice
            })
        
        # CLOUDS - using atmospheric system with earth-like colors
        num_clouds = rng.randint(4, 10)
        clouds = []
        
        for i in range(num_clouds):
            cloud_radius = rng.randint(20, 40)
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Tundra clouds - greyish white, not pure white
            cloud_colors = [
                [0.85, 0.87, 0.90, 0.8],  # Light grey clouds
                [0.80, 0.82, 0.85, 0.7],  # Medium grey clouds  
                [0.90, 0.91, 0.93, 0.6],  # Light white-grey
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        return {
            "type": "tundra",
            # Land masses with tundra colors (browns, greys, muted greens)
            "green_patches": green_patches,
            # Seasonal snow patches
            "ice_caps": ice_caps,
            # Sparse ice formations
            "crystals": crystals,
            # Earth-like clouds
            "clouds": clouds,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "land_patch_count": num_land_patches,
                "snow_patch_count": num_snow_patches,
                "small_mounds_count": num_snow_patches // 2,
                "large_patches_count": num_snow_patches - (num_snow_patches // 2),
                "crystal_count": num_crystals,
                "cloud_count": num_clouds
            }
        }
    
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
        """Translate Diamond planet elements with crystal properties"""
        
        # Diamond-specific properties
        base_color = [
            rng.uniform(0.95, 1.0),  # Very pure white/crystal
            rng.uniform(0.95, 1.0),
            rng.uniform(0.95, 1.0)
        ]
        
        # Crystal surface properties
        surface_properties = {
            "refraction": rng.uniform(2.0, 2.8),  # High refractive index
            "dispersion": rng.uniform(0.4, 0.8),  # Chromatic dispersion
            "clarity": rng.uniform(0.7, 0.95),    # Transparency/clarity
            "facet_size": rng.uniform(8.0, 25.0), # Size of crystal facets
            "brilliance": rng.uniform(1.8, 3.2),  # Intensity of reflections
            "prismatic": rng.uniform(0.5, 0.9)    # Prismatic effects intensity
        }
        
        # Sistema de efectos modulares 3D para planetas Diamond
        effects_3d = []
        
        # Atmospheric sparkles (destellos atmosféricos cristalinos)
        effects_3d.append({
            "type": "atmospheric_streaks",
            "params": {
                "color": [
                    rng.uniform(0.9, 1.0),
                    rng.uniform(0.9, 1.0),
                    rng.uniform(0.95, 1.0)
                ],
                "particleCount": rng.randint(80, 200),  # Más partículas para efecto brillante
                "speed": rng.uniform(0.3, 0.8),        # Movimiento más suave
                "sparkle": True                        # Efecto de destellos
            },
            "priority": 15
        })
        
        # Generate atmospheric clouds for diamond planets (crystal atmospheres)
        num_clouds = rng.randint(6, 12)  # Moderate cloud coverage
        clouds = []
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        for i in range(num_clouds):
            cloud_radius = rng.randint(18, 35)  # Medium-sized clouds
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Diamond clouds - crystalline white with rainbow refractions
            cloud_colors = [
                [0.98, 0.98, 1.0, 0.7],     # Pure crystalline white
                [1.0, 0.95, 0.98, 0.8],     # Light pink refraction
                [0.95, 0.98, 1.0, 0.6],     # Light blue refraction
                [0.98, 1.0, 0.95, 0.9],     # Light green refraction
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_diamond_cloud_{i}"
            })
        
        return {
            "type": "diamond",
            "base_color": base_color,
            "surface": surface_properties,
            "effects_3d": effects_3d,
            "clouds": clouds,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds
            }
        }
    
    def translate_super_earth(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "super_earth"}
    
    def translate_sub_earth(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "sub_earth"}
    
    def translate_frozen_gas_giant(self, planet_radius: int, rng: random.Random, 
                                  seed: int, planet_name: str, orbital_period_years: float = 30.0) -> Dict[str, Any]:
        """Translate Frozen Gas Giant - similar to gas giant but with icy colors and hexagon"""
        
        # Similar cloud bands but with frozen appearance
        num_bands = rng.randint(4, 15)  # Fewer bands for frozen
        rotation_angle = rng.uniform(-10, 10) * math.pi / 180
        
        band_positions = []
        band_widths = []
        center_y = 200
        
        for i in range(num_bands):
            band_width = rng.randint(3, 6)
            band_position_y = rng.randint(center_y - planet_radius, center_y + planet_radius)
            normalized_y = 1.0 - 2.0 * (band_position_y - 100) / 200
            band_positions.append(normalized_y)
            band_widths.append(band_width / planet_radius)
        
        # Fill arrays up to 20 elements
        while len(band_positions) < 20:
            band_positions.append(0)
            band_widths.append(0)
        
        # Polar hexagon - higher chance for frozen gas giants
        polar_hexagon = None
        if rng.random() < 0.4:  # 40% chance for frozen gas giants
            cycle_duration_years = rng.uniform(orbital_period_years * 0.8, orbital_period_years * 3.0)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.4, cycle_duration_years * 0.8)
            pole = rng.choice(['north', 'south'])
            
            polar_hexagon = {
                "enabled": True,
                "pole": pole,
                "radius": rng.uniform(0.18, 0.28),  # Slightly larger for frozen
                "rotation_speed": rng.uniform(0.0005, 0.002),  # Even slower
                "color_darken_factor": rng.uniform(0.12, 0.20),
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "opacity": rng.uniform(0.7, 0.95)
            }
        
        return {
            "type": "frozen_gas_giant",
            "cloud_bands": {
                "num_bands": num_bands,
                "positions": band_positions,
                "widths": band_widths,
                "rotation": rotation_angle
            },
            "polar_hexagon": polar_hexagon,
            "icy_tint": True,  # Flag for blue-white tinting
            "debug": {
                "has_hexagon": polar_hexagon is not None
            }
        }
    
    def translate_nebulous(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str, orbital_period_years: float = 20.0) -> Dict[str, Any]:
        """Translate Nebulous planet - gas giant with nebula-like appearance and possible hexagon"""
        
        # Nebula-like swirling patterns
        num_swirls = rng.randint(5, 12)
        swirl_patterns = []
        
        for i in range(num_swirls):
            theta = rng.uniform(0, 2 * math.pi)
            radius = rng.uniform(0.2, 0.8)
            swirl_patterns.append({
                "angle": theta,
                "radius": radius,
                "intensity": rng.uniform(0.3, 0.8),
                "color_shift": rng.uniform(-0.2, 0.2)  # Hue shift
            })
        
        # Polar hexagon - medium chance for nebulous
        polar_hexagon = None
        if rng.random() < 0.35:  # 35% chance
            cycle_duration_years = rng.uniform(orbital_period_years * 0.6, orbital_period_years * 2.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.35, cycle_duration_years * 0.75)
            pole = rng.choice(['north', 'south'])
            
            polar_hexagon = {
                "enabled": True,
                "pole": pole,
                "radius": rng.uniform(0.16, 0.26),
                "rotation_speed": rng.uniform(0.0008, 0.0025),
                "color_darken_factor": rng.uniform(0.18, 0.28),  # More contrast for nebulous
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "opacity": rng.uniform(0.5, 0.85),
                "nebula_blend": True  # Special blending for nebulous planets
            }
        
        return {
            "type": "nebulous",
            "swirl_patterns": swirl_patterns,
            "polar_hexagon": polar_hexagon,
            "nebula_density": rng.uniform(0.4, 0.8),
            "color_variance": rng.uniform(0.1, 0.3),
            "debug": {
                "has_hexagon": polar_hexagon is not None,
                "swirl_count": num_swirls
            }
        }
    
    def translate_aquifer(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Aquifer planet elements - water worlds with atmospheric clouds"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for aquifer planets (water worlds should have rich atmospheres)
        num_clouds = rng.randint(8, 15)  # Rich atmospheric activity over water
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(20, 45)  # Larger clouds over water surfaces
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Aquifer clouds - white to light blue, representing water vapor
            cloud_colors = [
                [1.0, 1.0, 1.0, 0.8],      # Pure white water vapor
                [0.95, 0.98, 1.0, 0.7],    # Light blue-white
                [0.90, 0.95, 1.0, 0.9],    # Slightly blue tinted
                [0.98, 1.0, 1.0, 0.6],     # Very light cyan
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_aquifer_cloud_{i}"
            })
        
        # Generate ocean currents data for aquifer planets
        ocean_currents = {
            "intensity": rng.uniform(0.3, 0.8),
            "scale": rng.uniform(1.0, 3.0),
            "speed": rng.uniform(0.1, 0.4),
            "opacity": rng.uniform(0.15, 0.35),
            # Current colors - greenish-blue tints for rich ocean currents
            "current_color": [
                rng.uniform(0.25, 0.35),  # R - low for blue-green
                rng.uniform(0.55, 0.65),  # G - medium-high for green tint
                rng.uniform(0.50, 0.60),  # B - medium for blue component
            ],
            "deep_current_color": [
                rng.uniform(0.15, 0.25),  # R - darker
                rng.uniform(0.35, 0.45),  # G - darker green
                rng.uniform(0.30, 0.40),  # B - darker blue
            ]
        }

        return {
            "type": "aquifer",
            "clouds": clouds,
            "ocean_currents": ocean_currents,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "ocean_currents_intensity": ocean_currents["intensity"],
                "ocean_currents_scale": ocean_currents["scale"]
            }
        }
    
    def translate_exotic(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "exotic"}
    
    def translate_anomaly(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str, orbital_period_years: float = 5.0) -> Dict[str, Any]:
        """Translate Anomaly planet - mysterious planets with pulsating cube effect"""
        
        # Pulsating cube effect for anomaly planets
        pulsating_cube = None
        if rng.random() < 0.7:  # 70% chance for anomaly planets to have pulsating cube
            # Calculate visibility cycle based on orbital period
            # Cube appears and disappears in cycles
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 1.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.2, cycle_duration_years * 0.5)
            
            pulsating_cube = {
                "enabled": True,
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years
            }
        
        return {
            "type": "anomaly",
            "pulsating_cube": pulsating_cube,
            "debug": {
                "has_pulsating_cube": pulsating_cube is not None
            }
        }