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
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Hexagon appears and disappears multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.3, cycle_duration_years * 0.7)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
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
                "phase_offset_years": phase_offset_years,
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
        """Translate Desert planet elements - arid worlds with atmospheric clouds and oasis-like land masses"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for desert planets (dust storms and sparse moisture)
        num_clouds = rng.randint(6, 12)  # Moderate atmospheric activity from desert winds
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(20, 40)  # Medium clouds from dust and sparse moisture
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Desert clouds - sandy/dusty colors with yellowish tints
            cloud_colors = [
                [0.9, 0.85, 0.7, 0.6],      # Light sandy beige
                [0.85, 0.8, 0.65, 0.7],     # Medium sandy brown
                [0.95, 0.9, 0.75, 0.5],     # Very light desert dust
                [0.8, 0.75, 0.6, 0.8],      # Darker sandy brown
                [0.88, 0.82, 0.68, 0.65],   # Standard desert dust color
            ]
            
            cloud_color = rng.choice(cloud_colors)
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": cloud_color,
                "type": "cloud",
                "seed": f"{planet_name}_desert_cloud_{i}"
            })
        
        # Generate desert land masses (oasis areas and rocky formations)
        num_landmasses = rng.randint(6, 12)  # Moderate number of oasis-like areas
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution - varied desert features (made larger for better visibility)
            if i < 3:
                # Large desert landmasses (major oasis regions)
                size = rng.uniform(0.2, 0.32)
            elif i < 6:
                # Medium desert features (smaller oases)
                size = rng.uniform(0.15, 0.25)
            else:
                # Small rocky outcrops and mini oases
                size = rng.uniform(0.1, 0.18)
            
            # Desert landmass colors - more yellowish/golden sandy colors, slightly darker than the planet
            # Using warm desert/sandy tones with slight greenish tints for oasis areas
            desert_color_choices = [
                [0.8, 0.7, 0.35],   # Golden sandy brown
                [0.85, 0.75, 0.4],  # Light golden desert
                [0.75, 0.65, 0.3],  # Medium golden sandy
                [0.9, 0.8, 0.45],   # Bright golden desert
                [0.78, 0.68, 0.35], # Standard golden desert color
                [0.7, 0.75, 0.4],   # Slightly greenish golden oasis
                [0.65, 0.7, 0.35],  # More greenish oasis tone
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,
                "color": rng.choice(desert_color_choices) + [rng.uniform(0.8, 0.9)],  # High opacity for solid coverage
                "sides": rng.randint(12, 20),  # Organic shapes for natural desert formations
                "height": rng.uniform(0.01, 0.025),  # Low elevation for desert terrain
                "vegetation_density": rng.uniform(0.2, 0.5)  # Low to moderate vegetation density
            })
        
        return {
            "type": "desert",
            "clouds": clouds,
            "green_patches": green_patches
        }
    
    def translate_lava(self, planet_radius: int, rng: random.Random, 
                      seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Lava planet elements - volcanic world with atmospheric clouds and large land masses"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for lava planets (volcanic activity creates thick atmospheres)
        num_clouds = rng.randint(10, 18)  # Rich atmospheric activity from volcanic emissions
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(30, 50)  # Large clouds from volcanic activity
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Lava clouds - dark grey/black with red/orange tints from volcanic ash
            cloud_colors = [
                [0.3, 0.25, 0.2, 0.9],     # Dark ash cloud
                [0.4, 0.3, 0.25, 0.85],    # Brown-grey volcanic ash
                [0.35, 0.28, 0.22, 0.8],   # Dark brown-red ash
                [0.5, 0.35, 0.3, 0.75],    # Lighter volcanic smoke
                [0.45, 0.32, 0.28, 0.8],   # Red-tinted ash cloud
            ]
            
            cloud_color = rng.choice(cloud_colors)
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": cloud_color,
                "type": "cloud",
                "seed": f"{planet_name}_lava_cloud_{i}"
            })
        
        # Generate large land masses for lava planets (volcanic rock formations and lava fields)
        num_landmasses = rng.randint(8, 15)  # Multiple large volcanic formations
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution - LARGE land masses for prominent volcanic features
            if i < 4:
                # Massive volcanic plateaus
                size = rng.uniform(0.25, 0.40)  # Very large volcanic formations
            elif i < 8:
                # Large lava fields
                size = rng.uniform(0.15, 0.25)  # Large lava-covered regions
            else:
                # Smaller volcanic islands
                size = rng.uniform(0.08, 0.15)  # Medium volcanic patches
            
            # Lava land mass colors - dark volcanic rock with lava veins
            lava_colors = [
                [0.15, 0.12, 0.10],  # Very dark volcanic rock
                [0.25, 0.15, 0.12],  # Dark brown-red volcanic stone
                [0.3, 0.18, 0.15],   # Reddish volcanic rock
                [0.35, 0.2, 0.15],   # Lighter volcanic basalt
                [0.28, 0.16, 0.13],  # Dark red-brown lava rock
            ]
            
            land_color = rng.choice(lava_colors)
            
            # Also maintain 2D coordinates for compatibility
            patch_angle = rng.uniform(0, 2 * math.pi)
            patch_distance = rng.uniform(0.3 * planet_radius, planet_radius)
            
            patch_x = center_x + patch_distance * math.cos(patch_angle)
            patch_y = center_y + patch_distance * math.sin(patch_angle)
            
            normalized_coords = self.common_utils.normalize_coordinates(
                patch_x, patch_y, center_x, center_y, planet_radius
            )
            
            green_patches.append({
                "position": normalized_coords,
                "position_3d": position_3d,
                "size": size,
                "color": land_color,
                "type": "land_mass",
                "seed": f"{planet_name}_lava_landmass_{i}"
            })
        
        # Generate lava lakes/pools for additional visual effect
        num_lava_pools = rng.randint(6, 12)
        lava_pools = []
        
        for i in range(num_lava_pools):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Lava pool sizes - smaller than land masses
            pool_size = rng.uniform(0.05, 0.15)
            
            lava_pools.append({
                "position_3d": position_3d,
                "radius": pool_size,
                "color": [0.9, 0.3, 0.1, 1.0],  # Bright orange-red lava
                "temperature": rng.uniform(1000, 1500),
                "glow_intensity": rng.uniform(0.7, 1.0)
            })
        
        return {
            "type": "lava",
            "clouds": clouds,  # AtmosphereClouds will use this
            "green_patches": green_patches,  # LandMasses will use this (lava-colored landmasses)
            "lava_pools": lava_pools,  # Additional lava pool features
            "surface_properties": {
                "heat_distortion": rng.uniform(0.4, 0.8),    # Heat shimmer effects
                "volcanic_activity": rng.uniform(0.6, 1.0),  # Volcanic eruption frequency
                "ash_density": rng.uniform(0.5, 0.9),        # Atmospheric ash density
                "lava_glow": rng.uniform(0.7, 0.95),         # Lava glow intensity
            },
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "landmass_count": num_landmasses,
                "lava_pool_count": num_lava_pools,
                "avg_landmass_size": sum([lm["size"] for lm in green_patches]) / len(green_patches) if green_patches else 0,
            }
        }
    
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
        """Translate Forest planet elements - lush worlds with atmospheric clouds and large land masses"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for forest planets (moisture from vegetation creates rich atmospheres)
        num_clouds = rng.randint(10, 18)  # Rich atmospheric activity from forest transpiration
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(25, 45)  # Larger clouds from forest moisture
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Forest clouds - white to light green, representing forest moisture and transpiration
            cloud_colors = [
                [1.0, 1.0, 1.0, 0.8],      # Pure white water vapor from forests
                [0.95, 1.0, 0.95, 0.7],    # Very light green tint from vegetation
                [0.98, 1.0, 0.98, 0.9],    # Light green-white from forest transpiration
                [0.90, 0.98, 0.92, 0.6],   # Subtle green forest atmosphere
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_forest_cloud_{i}"
            })
        
        # Generate large land masses for forest planets (continents and islands with dense vegetation)
        # Use "green_patches" format that LandMasses effect expects, but make them LARGE like Arid planets
        num_landmasses = rng.randint(8, 15)  # Many forest landmasses for diverse ecosystems
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere (better distribution than 2D projection)
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution similar to Arid planets - LARGE landmasses for prominent forests
            if i < 4:
                # Large forest continents (major landmasses covered in dense forest)
                size = rng.uniform(0.18, 0.35)  # Very large forest continents
            elif i < 8:
                # Medium forest regions (forest islands and smaller continents)
                size = rng.uniform(0.12, 0.22)  # Large forest regions
            else:
                # Small forest patches (forest groves and woodland areas)
                size = rng.uniform(0.08, 0.15)  # Medium forest patches
            
            # Forest landmass colors - various shades of green representing dense vegetation
            # Convert to RGB [0-1] format that LandMasses expects
            forest_color_choices = [
                [0.13, 0.35, 0.13],  # Dark forest green #22592f
                [0.18, 0.42, 0.16],  # Medium forest green #2e6b29
                [0.10, 0.30, 0.10],  # Very dark forest green #1a4d1a
                [0.20, 0.45, 0.18],  # Bright forest green #33732e
                [0.15, 0.38, 0.14]   # Standard forest green #266124
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,  # Large sizes like Arid planets for visibility
                "color": rng.choice(forest_color_choices) + [rng.uniform(0.85, 0.95)],  # Add high opacity for solid forest coverage
                "sides": rng.randint(16, 24),  # More complex shapes for organic forest borders
                "height": rng.uniform(0.015, 0.04),  # Forest canopy elevation
                "vegetation_density": rng.uniform(0.8, 1.0)  # Very high vegetation density
            })
        
        # Generate vegetation patches (separate from land masses - these are the areas where VegetationEffect will render)
        num_vegetation_patches = rng.randint(15, 30)  # Many vegetation patches for dense coverage
        vegetation_patches = []
        
        for i in range(num_vegetation_patches):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Vegetation patch sizes - varied for natural forest distribution  
            vegetation_size = rng.uniform(0.08, 0.25)  # Larger sizes for better vegetation visibility
            
            # Vegetation colors - various forest greens for diversity
            vegetation_colors = [
                [0.20, 0.45, 0.15],  # Bright leafy green
                [0.15, 0.40, 0.12],  # Dark leafy green
                [0.25, 0.50, 0.18],  # Light forest green
                [0.12, 0.35, 0.10],  # Deep forest green
                [0.18, 0.42, 0.14]   # Standard vegetation green
            ]
            
            vegetation_patches.append({
                "position_3d": position_3d,
                "size": vegetation_size,
                "color": rng.choice(vegetation_colors),
                "vegetation_type": rng.choice(["dense_forest", "mixed_forest", "woodland", "grove"]),
                "canopy_height": rng.uniform(0.02, 0.05),  # Tree canopy height variation
                "tree_density": rng.uniform(0.7, 0.95)    # High tree density for forests
            })
        
        return {
            "type": "forest",
            "clouds": clouds,  # AtmosphereClouds will use this
            "green_patches": green_patches,  # LandMasses will use this (forest-colored landmasses)
            "vegetation": vegetation_patches,  # VegetationEffect will use this
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "landmass_count": num_landmasses,
                "vegetation_patch_count": num_vegetation_patches,
                "largest_landmass_size": max([lm["size"] for lm in green_patches]) if green_patches else 0,
                "forest_coverage": "high_density_coverage"
            }
        }
    
    def translate_savannah(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Savannah planet elements - orangish terrain with large clouds and colored patches"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # SAVANNAH GREEN PATCHES - using the orangish/brownish colors from Pillow implementation
        # Base colors from the Pillow savannah implementation
        savannah_colors = [
            [244/255.0, 164/255.0, 96/255.0],   # Main savannah color (sandybrown) #F4A460
            [199/255.0, 113/255.0, 40/255.0],   # From generate_abstract_land layer 3
            [110/255.0, 59/255.0, 16/255.0],    # From generate_abstract_land layer 2
            [139/255.0, 69/255.0, 19/255.0],    # From draw_cluster (saddle brown)
            [222/255.0, 184/255.0, 135/255.0],  # Lighter burlywood variation
            [205/255.0, 133/255.0, 63/255.0],   # Peru color variation
        ]
        
        num_green_patches = rng.randint(12, 20)  # More patches for varied terrain
        green_patches = []
        
        for _ in range(num_green_patches):
            patch_size = rng.randint(8, 60)  # Varied patch sizes
            
            # Generate uniform 3D position on sphere
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
            
            # Choose random savannah color with moderate opacity
            patch_color = rng.choice(savannah_colors) + [rng.uniform(0.6, 0.9)]  # 60-90% opacity
            
            green_patches.append({
                "position": normalized_coords,
                "position_3d": [patch_3d_x, patch_3d_y, patch_3d_z],
                "size": patch_size / planet_radius,
                "color": patch_color,
                "sides": rng.randint(15, 25)  # Organic shapes
            })
        
        # LARGE CLOUDS - similar to Arid planets but using savannah colors
        num_clouds = rng.randint(6, 12)  # More clouds for atmosphere
        clouds = []
        
        for i in range(num_clouds):
            # Large clouds as requested
            cloud_radius = rng.randint(30, int(planet_radius * 0.4))  # Larger clouds (30-80 pixels)
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": [244/255.0, 164/255.0, 96/255.0, 0.8],  # Sandybrown with transparency
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        return {
            "type": "savannah",
            "green_patches": green_patches,  # LandMasses will use this for terrain variation
            "clouds": clouds,  # AtmosphereClouds will use this for large cloud formations
            "surface_properties": {
                "dryness": rng.uniform(0.6, 0.8),        # Semi-arid characteristics
                "vegetation_density": rng.uniform(0.3, 0.6),  # Sparse to moderate vegetation
                "soil_color_variation": rng.uniform(0.7, 0.9),  # High color variation
                "wind_erosion": rng.uniform(0.4, 0.7),    # Wind patterns affecting terrain
            },
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "terrain_patch_count": num_green_patches,
                "largest_patch_size": max([lm["size"] for lm in green_patches]) if green_patches else 0,
                "savannah_coverage": "mixed_terrain_coverage"
            }
        }
    
    def translate_cave(self, planet_radius: int, rng: random.Random, 
                      seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Cave planet elements - rocky world with cave holes, atmospheric clouds, and land masses"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for cave planets (misty atmosphere from underground moisture)
        num_clouds = rng.randint(8, 15)  # Moderate amount of clouds
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(20, 40)  # Medium-sized clouds
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Cave clouds - gray/white tinted from underground moisture and mist
            cloud_colors = [
                "#c0c0c0",  # Light gray
                "#a8a8a8",  # Medium gray  
                "#d0d0d0",  # Light silver
                "#b8b8b8",  # Medium light gray
                "#e0e0e0"   # Very light gray
            ]
            
            clouds.append({
                "position_3d": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "density": rng.uniform(0.6, 0.9),
                "color": rng.choice(cloud_colors),
                "opacity": rng.uniform(0.5, 0.8),
                "movement_speed": rng.uniform(0.002, 0.008),
                "vertical_offset": rng.uniform(-0.1, 0.1)
            })
        
        # Generate land masses for cave planets (rocky terrain with exposed surfaces)
        # Use "green_patches" format that LandMasses effect expects
        # Make them large like Arid planets for better visibility
        num_landmasses = rng.randint(6, 12)  # More landmasses for better coverage
        green_patches = []
        for i in range(num_landmasses):
            # Generate uniform position on sphere (better distribution than 2D projection)
            theta = rng.uniform(0, 2 * math.pi)
            phi = rng.uniform(0, math.pi)
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution similar to Arid planets - much larger sizes
            if i < 4:
                # Large cave formations (major exposed rocky areas)
                size = rng.uniform(0.20, 0.40)  # Very large formations
            elif i < 8:
                # Medium cave formations (rocky outcrops)
                size = rng.uniform(0.12, 0.25)  # Large formations
            else:
                # Small cave formations (scattered rocky patches)
                size = rng.uniform(0.08, 0.15)  # Medium formations
            
            # Cave landmass colors - dark browns and grays representing rocky cave terrain
            # Convert hex colors to RGB [0-1] format that LandMasses expects
            landmass_color_choices = [
                [0.29, 0.25, 0.21],  # Dark brown #4a3f36
                [0.36, 0.29, 0.23],  # Medium brown #5c4a3a  
                [0.24, 0.20, 0.16],  # Dark olive brown #3d3429
                [0.32, 0.27, 0.22],  # Gray brown #524639
                [0.42, 0.36, 0.31]   # Light brown #6b5b4f
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,  # Much larger sizes like Arid planets
                "color": rng.choice(landmass_color_choices) + [rng.uniform(0.75, 0.90)],  # Add variable opacity
                "sides": rng.randint(12, 20),  # Polygon complexity for rocky terrain
                "height": rng.uniform(0.02, 0.06),  # Elevation
                "roughness": rng.uniform(0.6, 0.9)  # Surface roughness
            })
        
        # Generate cave holes in the surface
        num_holes = rng.randint(115, 130)  # Multiple cave openings
        cave_holes = []
        for i in range(num_holes):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = rng.uniform(0, math.pi)
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            cave_holes.append({
                "position_3d": position_3d,
                "radius": rng.uniform(0.03, 0.10),  # Various hole sizes
                "depth": rng.uniform(0.02, 0.05),   # Depth perception
                "roughness": rng.uniform(0.4, 0.8),  # Natural cave roughness
                "color_variation": rng.uniform(0.2, 0.5)  # Color depth variation
            })
        
        return {
            "type": "cave",
            "atmosphere_clouds": {
                "clouds": clouds
            },
            "green_patches": green_patches,  # Land masses in the format LandMasses expects
            "cave_holes": {
                "holes": cave_holes,
                "base_color": "#4a3f36",  # Dark cave brown
                "hole_color": "#1a1512"   # Very dark for depth
            }
        }
    
    def translate_crystalline(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "crystalline"}
    
    def translate_toxic(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        return {"type": "toxic"}
    
    def translate_radioactive(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Radioactive planet elements - toxic worlds with green patches and atmospheric clouds"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for radioactive planets (toxic atmospheres with radiation)
        num_clouds = rng.randint(12, 18)  # Rich toxic atmospheric activity
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(25, 45)  # Large toxic clouds
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Radioactive clouds - green-yellow toxic colors representing radiation
            cloud_colors = [
                [0.4, 0.8, 0.2, 0.8],      # Bright toxic green
                [0.5, 0.9, 0.1, 0.9],      # Yellow-green radiation
                [0.3, 0.7, 0.15, 0.85],    # Dark toxic green
                [0.6, 1.0, 0.3, 0.7],      # Light radioactive green
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_radioactive_cloud_{i}"
            })
        
        # Generate green patches for radioactive planets (similar to oceanic green_patches but radioactive green)
        num_green_patches = rng.randint(15, 25)  # Many radioactive patches
        green_patches = []
        
        for i in range(num_green_patches):
            # Generate uniform position on sphere (same as oceanic)
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            patch_3d_x = math.sin(phi) * math.cos(theta)
            patch_3d_y = math.sin(phi) * math.sin(theta)
            patch_3d_z = math.cos(phi)
            
            # Also maintain 2D coordinates for compatibility
            patch_angle = rng.uniform(0, 2 * math.pi)
            patch_distance = rng.uniform(0.3 * planet_radius, planet_radius)
            
            patch_x = center_x + patch_distance * math.cos(patch_angle)
            patch_y = center_y + patch_distance * math.sin(patch_angle)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                patch_x, patch_y, center_x, center_y, planet_radius
            )
            
            # Radioactive patch colors - various shades of toxic green representing contaminated areas
            radioactive_greens = [
                [0.2, 0.8, 0.1],   # Bright radioactive green
                [0.15, 0.7, 0.05], # Dark toxic green
                [0.25, 0.9, 0.15], # Light radioactive green
                [0.3, 0.85, 0.2],  # Medium toxic green
                [0.18, 0.75, 0.08] # Deep radioactive green
            ]
            
            green_patches.append({
                "position": normalized_coords,  # Maintain for 2D compatibility
                "position_3d": [patch_3d_x, patch_3d_y, patch_3d_z],  # 3D position
                "size": rng.uniform(0.15, 0.35),  # Larger radioactive contamination areas
                "color": rng.choice(radioactive_greens) + [rng.uniform(0.8, 0.95)],  # High opacity for visibility
                "sides": rng.randint(18, 30),  # Irregular contaminated shapes
                "radiation_level": rng.uniform(0.7, 1.0),  # High radiation intensity
                "glow_intensity": rng.uniform(0.6, 0.9)    # Radioactive glow effect
            })
        
        return {
            "type": "radioactive",
            "clouds": clouds,  # AtmosphereClouds will use this
            "green_patches": green_patches,  # LandMasses will use this (radioactive-colored patches)
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "green_patch_count": num_green_patches,
                "radiation_coverage": "high_contamination_coverage"
            }
        }
    
    def translate_magma(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Magma planet elements - flowing magma worlds with atmospheric clouds and magmatic land masses"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for magma planets (volcanic gases and heat distortion)
        num_clouds = rng.randint(10, 16)  # Rich atmospheric activity from magma outgassing
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(20, 40)  # Medium to large clouds from volcanic activity
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Magma clouds - red-orange to dark red, representing volcanic gases and heat
            cloud_colors = [
                [0.85, 0.35, 0.05, 0.8],     # Bright orange-red (hot magma vapor)
                [0.75, 0.25, 0.02, 0.9],     # Dark red-orange (dense volcanic gases)
                [0.90, 0.45, 0.10, 0.7],     # Light orange (heated atmosphere)
                [0.65, 0.20, 0.01, 0.85],    # Very dark red (dense magma smoke)
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_magma_cloud_{i}"
            })
        
        # Generate magmatic land masses (large molten areas with magma colors)
        num_landmasses = rng.randint(10, 18)  # Many magmatic formations
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution - varied magma flow sizes (large for visibility)
            if i < 5:
                # Large magma flows (major molten rivers)
                size = rng.uniform(0.15, 0.30)  # Large flowing magma areas
            elif i < 10:
                # Medium magma pools (lava lakes and flows)
                size = rng.uniform(0.10, 0.20)  # Medium magma formations
            else:
                # Small magma patches (scattered molten spots)
                size = rng.uniform(0.06, 0.12)  # Smaller magma patches
            
            # Magma colors - based on the Pillow colors (135, 36, 0) and (201, 55, 2)
            magma_color_choices = [
                [0.53, 0.14, 0.0],   # Dark magma red (135, 36, 0)
                [0.79, 0.22, 0.01],  # Bright magma orange (201, 55, 2) 
                [0.85, 0.27, 0.0],   # OrangeRed equivalent for magma lakes
                [0.60, 0.18, 0.0],   # Medium magma red
                [0.70, 0.25, 0.05],  # Lighter magma orange
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,
                "color": rng.choice(magma_color_choices) + [rng.uniform(0.85, 0.95)],  # High opacity for glowing magma
                "sides": rng.randint(18, 28),  # Irregular magma flow shapes
                "heat_intensity": rng.uniform(0.8, 1.0),     # High heat for glow effects
                "flow_speed": rng.uniform(0.002, 0.008),     # Slow magma flow animation
                "temperature": rng.uniform(1200, 1800)       # Magma temperature in Celsius
            })
        
        # Generate magma lakes (using the orangered color from Pillow)
        num_magma_lakes = rng.randint(10, 16)  # Same as in Pillow draw_magma_elements
        magma_lakes = []
        
        for i in range(num_magma_lakes):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Lake sizes - MUCH larger for maximum visibility
            lake_size = rng.uniform(0.45, 0.60)  # Even larger magma lake sizes
            
            magma_lakes.append({
                "position_3d": position_3d,
                "radius": lake_size,
                "color": [0.85, 0.27, 0.0, 1.0],  # OrangeRed color from Pillow
                "temperature": rng.uniform(1500, 2000),       # Very hot magma lakes
                "bubble_activity": rng.uniform(0.6, 1.0),     # Bubbling activity
                "glow_intensity": rng.uniform(0.8, 1.0)       # Strong glow effect
            })
        
        return {
            "type": "magma",
            "clouds": clouds,  # AtmosphereClouds will use this
            "green_patches": green_patches,  # LandMasses will use this (magma-colored landmasses)
            "magma_lakes": magma_lakes,  # MagmaFlows effect will use this
            "surface_properties": {
                "heat_distortion": rng.uniform(0.3, 0.7),    # Heat shimmer effects
                "lava_glow": rng.uniform(0.8, 1.0),          # Strong glow from molten surface
                "flow_animation": True,                       # Enable magma flow animation
                "emission_intensity": rng.uniform(0.6, 0.9), # Light emission from magma
                "viscosity": rng.uniform(0.4, 0.8)           # Magma viscosity for flow speed
            },
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "landmass_count": num_landmasses,
                "magma_lake_count": num_magma_lakes,
                "avg_landmass_size": sum([lm["size"] for lm in green_patches]) / len(green_patches) if green_patches else 0,
                "magma_coverage": "high_density_molten_coverage"
            }
        }
    
    def translate_molten_core(self, planet_radius: int, rng: random.Random, 
                             seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Molten Core planet elements - volcanic world with large atmospheric clouds"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate LARGE atmospheric clouds for molten core planets (volcanic activity creates massive atmospheres)
        num_clouds = rng.randint(12, 20)  # Many clouds from volcanic activity
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(35, 60)  # MUCH larger clouds than other planets
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Molten core clouds - orange/red tinted from volcanic ash and heat
            cloud_colors = [
                [1.0, 0.9, 0.7, 0.85],     # Light orange-white (hot vapor)
                [1.0, 0.85, 0.6, 0.8],     # Warm orange tint
                [0.95, 0.82, 0.65, 0.9],   # Slightly darker orange
                [1.0, 0.88, 0.75, 0.75],   # Pale orange-white
            ]
            
            cloud_color = rng.choice(cloud_colors)
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,  # Large radius for dramatic clouds
                "color": cloud_color,
                "type": "cloud",
                "seed": f"{planet_name}_molten_cloud_{i}"
            })
        
        return {
            "type": "molten_core",
            "clouds": clouds,
            "debug": {
                "cloud_count": len(clouds),
                "avg_cloud_radius": sum(c["radius"] for c in clouds) / len(clouds) if clouds else 0,
                "planet_radius": planet_radius
            }
        }
    
    def translate_carbon(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str, orbital_period_years: float = 8.0) -> Dict[str, Any]:
        """Translate Carbon planet elements - carbonaceous worlds with matte surfaces and dust particles"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for carbon planets (dust and particulates)
        num_clouds = rng.randint(6, 12)  # Moderate atmospheric dust
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(15, 30)  # Medium-small clouds
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Carbon clouds - dark gray to light gray (carbon dust and particles)
            cloud_colors = [
                [0.4, 0.4, 0.4, 0.7],      # Dark gray carbon dust
                [0.5, 0.5, 0.5, 0.6],      # Medium gray particles
                [0.3, 0.3, 0.3, 0.8],      # Darker carbon particles
                [0.45, 0.45, 0.45, 0.5],   # Light carbon dust
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_carbon_cloud_{i}"
            })
        
        # Generate land masses for carbon planets (slightly lighter areas of carbon)
        num_landmasses = rng.randint(4, 10)  # Moderate coverage
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution - varied carbon formation sizes (más grandes para visibilidad)
            if i < 3:
                # Large carbon formations (muy grandes para contrastar con el negro)
                size = rng.uniform(0.25, 0.45)
            elif i < 6:
                # Medium carbon formations  
                size = rng.uniform(0.15, 0.28)
            else:
                # Small carbon patches
                size = rng.uniform(0.08, 0.18)
            
            # Carbon colors - very dark but slightly lighter than base planet
            # Base planet is #090909, so make these slightly lighter
            carbon_grays = [
                [0.05, 0.05, 0.05],  # Slightly lighter than base
                [0.04, 0.04, 0.04],  # Almost as dark as base
                [0.06, 0.06, 0.06],  # Bit lighter gray
                [0.03, 0.03, 0.03],  # Very dark gray
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,
                "color": rng.choice(carbon_grays) + [rng.uniform(0.7, 0.9)],  # Add variable opacity
                "sides": rng.randint(12, 24),  # Irregular carbon formations
                "roughness": rng.uniform(0.8, 0.95)  # Very rough carbon surface
            })
        
        # Carbon-specific surface properties
        surface_properties = {
            "roughness": rng.uniform(0.85, 0.95),        # Very high roughness
            "metalness": rng.uniform(0.0, 0.08),         # Very low metalness
            "mineral_spots": rng.random() < 0.4,         # 40% chance for mineral spots
            "mineral_intensity": rng.uniform(0.2, 0.4),  # Low mineral reflection
            "bump_scale": rng.uniform(0.015, 0.025),     # Subtle surface bumps
            "normal_scale": rng.uniform(0.4, 0.6),       # Surface normal variations
            "specular_intensity": rng.uniform(0.05, 0.12), # Very low specular
            "crater_density": rng.uniform(6.0, 10.0),    # Surface crater patterns
            "surface_roughness": rng.uniform(0.12, 0.18) # Additional roughness factor
        }
        
        # Carbon trails effect (similar to PulsatingCube orbital pattern)
        carbon_trails_data = None
        if rng.random() < 0.33:  # 33% of carbon planets have carbon trails effect
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Carbon trails appear and disappear multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.4, cycle_duration_years * 0.7)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
            carbon_trails_data = {
                "enabled": True,
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "phase_offset_years": phase_offset_years,
                # Debug information for orbital timing
                "debug_orbital": {
                    "orbital_period_years": orbital_period_years,
                    "cycle_duration_years": cycle_duration_years,
                    "visible_duration_years": visible_duration_years,
                    "visible_percentage": (visible_duration_years / cycle_duration_years) * 100,
                    "cycles_per_orbit": orbital_period_years / cycle_duration_years,
                    "visibility_windows": f"Visible for {visible_duration_years:.2f} years every {cycle_duration_years:.2f} years"
                }
            }

        return {
            "type": "carbon", 
            "clouds": clouds,
            "green_patches": green_patches,  # Land masses format that LandMasses effect expects
            "surface_properties": surface_properties,
            "carbon_trails_data": carbon_trails_data,  # Add carbon trails orbital data
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "landmass_count": num_landmasses,
                "surface_roughness": surface_properties["roughness"],
                "mineral_spots_enabled": surface_properties["mineral_spots"],
                "has_carbon_trails": carbon_trails_data is not None
            }
        }
    
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
        """Translate Super Earth planet elements - Earth-like worlds with rich atmospheres and massive continents"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate rich atmospheric clouds for Super Earth planets (dense Earth-like atmospheres)
        num_clouds = rng.randint(12, 20)  # Rich atmospheric activity like Earth but denser
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(30, 50)  # Large clouds from rich atmosphere
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Super Earth clouds - white to light blue, representing thick Earth-like atmosphere
            cloud_colors = [
                [1.0, 1.0, 1.0, 0.9],      # Pure white dense clouds
                [0.95, 0.98, 1.0, 0.8],    # Light blue-white atmospheric density
                [0.98, 1.0, 0.98, 0.85],   # Very light green-white from vegetation moisture
                [0.90, 0.95, 1.0, 0.7],    # Light blue atmospheric haze
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": rng.choice(cloud_colors),
                "type": "cloud",
                "seed": f"{planet_name}_super_earth_cloud_{i}"
            })
        
        # Generate LARGE land masses for Super Earth planets (massive continents due to larger size)
        # Use "green_patches" format that LandMasses effect expects, but make them ESPECIALLY LARGE
        num_landmasses = rng.randint(6, 12)  # Fewer but much larger landmasses for continent effect
        green_patches = []
        
        for i in range(num_landmasses):
            # Generate uniform position on sphere (better distribution than 2D projection)
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            position_3d = [
                math.sin(phi) * math.cos(theta),
                math.sin(phi) * math.sin(theta),
                math.cos(phi)
            ]
            
            # Size distribution - ESPECIALLY LARGE for Super Earth massive continents
            if i < 3:
                # Massive super continents (continental-scale landmasses)
                size = rng.uniform(0.35, 0.55)  # VERY large super continents
            elif i < 6:
                # Large continental masses (major continent equivalents)
                size = rng.uniform(0.25, 0.40)  # Large continental landmasses
            else:
                # Medium continental regions (large islands and smaller continents)
                size = rng.uniform(0.15, 0.28)  # Still large for Super Earth scale
            
            # Super Earth landmass colors - Earth-like but with variations for larger world diversity
            # Convert to RGB [0-1] format that LandMasses expects
            landmass_color_choices = [
                # Temperate landmass colors (Earth-like greens and browns)
                [0.20, 0.40, 0.15],  # Forest green for temperate regions
                [0.35, 0.28, 0.18],  # Brown for arid/mountainous regions
                [0.25, 0.45, 0.20],  # Bright green for fertile plains
                [0.18, 0.35, 0.12],  # Dark green for dense forests
                [0.40, 0.32, 0.22],  # Light brown for grasslands/savannas
                [0.22, 0.42, 0.18],  # Medium green for mixed vegetation
                [0.30, 0.25, 0.15],  # Tan for desert/semi-arid regions
            ]
            
            green_patches.append({
                "position_3d": position_3d,
                "size": size,  # ESPECIALLY large sizes for Super Earth massive continents
                "color": rng.choice(landmass_color_choices) + [rng.uniform(0.80, 0.95)],  # High opacity for solid landmasses
                "sides": rng.randint(20, 35),  # More complex shapes for realistic continental coastlines
                "height": rng.uniform(0.025, 0.055),  # Significant elevation for mountain ranges
                "biome_diversity": rng.uniform(0.7, 0.95),  # High biome diversity on large continents
                "continental_scale": True  # Flag for massive continental features
            })
        
        return {
            "type": "super_earth",
            "clouds": clouds,  # AtmosphereClouds will use this
            "green_patches": green_patches,  # LandMasses will use this (Earth-like colored massive landmasses)
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "landmass_count": num_landmasses,
                "largest_landmass_size": max([lm["size"] for lm in green_patches]) if green_patches else 0,
                "continental_coverage": "massive_super_continental_scale"
            }
        }
    
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
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Hexagon appears and disappears multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.4, cycle_duration_years * 0.8)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
            pole = rng.choice(['north', 'south'])
            
            polar_hexagon = {
                "enabled": True,
                "pole": pole,
                "radius": rng.uniform(0.18, 0.28),  # Slightly larger for frozen
                "rotation_speed": rng.uniform(0.0005, 0.002),  # Even slower
                "color_darken_factor": rng.uniform(0.12, 0.20),
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "phase_offset_years": phase_offset_years,
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
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Hexagon appears and disappears multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.35, cycle_duration_years * 0.75)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
            pole = rng.choice(['north', 'south'])
            
            polar_hexagon = {
                "enabled": True,
                "pole": pole,
                "radius": rng.uniform(0.16, 0.26),
                "rotation_speed": rng.uniform(0.0008, 0.0025),
                "color_darken_factor": rng.uniform(0.18, 0.28),  # More contrast for nebulous
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "phase_offset_years": phase_offset_years,
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
                        seed: int, planet_name: str, orbital_period_years: float = 15.0) -> Dict[str, Any]:
        """Translate Exotic planet elements - alien worlds with geometric patterns and strange clouds"""
        center_x, center_y = 200, 200  # Pillow center coordinates
        
        # Generate atmospheric clouds for exotic planets (strange alien atmospheres)
        num_clouds = rng.randint(8, 16)  # Moderate to rich atmospheric activity
        clouds = []
        for i in range(num_clouds):
            cloud_radius = rng.randint(15, 40)  # Variable sized clouds
            max_offset = planet_radius - cloud_radius
            cloud_x = center_x + rng.randint(-max_offset, max_offset)
            cloud_y = center_y + rng.randint(-max_offset, max_offset)
            
            # Convert to normalized coordinates
            normalized_coords = self.common_utils.normalize_coordinates(
                cloud_x, cloud_y, center_x, center_y, planet_radius
            )
            
            # Exotic clouds - random colors for alien atmosphere
            exotic_color = [
                rng.uniform(0.3, 1.0),  # R
                rng.uniform(0.3, 1.0),  # G  
                rng.uniform(0.3, 1.0),  # B
                rng.uniform(0.5, 0.9)   # A
            ]
            
            clouds.append({
                "position": normalized_coords,
                "radius": cloud_radius / planet_radius,
                "color": exotic_color,
                "type": "cloud",
                "seed": f"{planet_name}_exotic_cloud_{i}"
            })
        
        # Generate small geometric shapes (from lines 2136-2150 in __drawer_cplanet_type.py)
        num_small_shapes = rng.randint(12, 18)
        small_geometric_shapes = []
        
        for i in range(num_small_shapes):
            # Random position on sphere
            theta = rng.uniform(0, 2 * math.pi)
            phi = math.acos(rng.uniform(-1, 1))
            
            shape_3d_x = math.sin(phi) * math.cos(theta)
            shape_3d_y = math.sin(phi) * math.sin(theta)
            shape_3d_z = math.cos(phi)
            
            # Number of sides (3, 4, 6, 7, etc.)
            num_sides = rng.choice([3, 4, 5, 6, 7, 8])
            
            # Random color
            shape_color = [
                rng.uniform(0.4, 1.0),
                rng.uniform(0.4, 1.0),
                rng.uniform(0.4, 1.0),
                rng.uniform(0.6, 0.9)
            ]
            
            small_geometric_shapes.append({
                "position_3d": [shape_3d_x, shape_3d_y, shape_3d_z],
                "sides": num_sides,
                "size": rng.uniform(0.02, 0.06),  # Small size
                "rotation_speed": rng.uniform(-2.0, 2.0),  # Different rotation speeds
                "color": shape_color,
                "angle": rng.uniform(0, 2 * math.pi)
            })
        
        # Exotic doodles orbital data - similar to PulsatingCube pattern
        exotic_doodles = None
        doodle_roll = rng.random()
        if doodle_roll < 0.8:  # 80% chance for exotic planets to have doodles
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Doodles appear and disappear multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.25, cycle_duration_years * 0.6)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
            exotic_doodles = {
                "enabled": True,
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "phase_offset_years": phase_offset_years,
                # Debug information for orbital timing
                "debug_orbital": {
                    "orbital_period_years": orbital_period_years,
                    "cycle_duration_years": cycle_duration_years,
                    "visible_duration_years": visible_duration_years,
                    "visible_percentage": (visible_duration_years / cycle_duration_years) * 100,
                    "cycles_per_orbit": orbital_period_years / cycle_duration_years,
                    "visibility_windows": f"Visible for {visible_duration_years:.2f} years every {cycle_duration_years:.2f} years"
                }
            }
        
        return {
            "type": "exotic",
            "clouds": clouds,
            "small_geometric_shapes": small_geometric_shapes,
            "exotic_doodles": exotic_doodles,  # Now passing orbital data like PulsatingCube
            "debug": {
                "original_planet_radius": planet_radius,
                "center_x": center_x, "center_y": center_y,
                "cloud_count": num_clouds,
                "small_shapes_count": num_small_shapes,
                "has_exotic_doodles": exotic_doodles is not None,
                "doodles_generated_procedurally": True
            }
        }
    
    def translate_anomaly(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str, orbital_period_years: float = 5.0) -> Dict[str, Any]:
        """Translate Anomaly planet - mysterious planets with pulsating cube effect"""
        
        # Pulsating cube effect for anomaly planets
        pulsating_cube = None
        if rng.random() < 0.7:  # 70% chance for anomaly planets to have pulsating cube
            # Calculate visibility cycle as percentage of orbital period (30-50% for frequent cycles)
            # Cube appears and disappears multiple times per orbit
            cycle_duration_years = rng.uniform(orbital_period_years * 0.3, orbital_period_years * 0.5)
            visible_duration_years = rng.uniform(cycle_duration_years * 0.2, cycle_duration_years * 0.5)
            phase_offset_years = rng.uniform(0, cycle_duration_years)
            
            pulsating_cube = {
                "enabled": True,
                "cycle_duration_years": cycle_duration_years,
                "visible_duration_years": visible_duration_years,
                "phase_offset_years": phase_offset_years
            }
        
        return {
            "type": "anomaly",
            "pulsating_cube": pulsating_cube,
            "debug": {
                "has_pulsating_cube": pulsating_cube is not None
            }
        }