#!/usr/bin/env python3
"""
Universal Planet Renderer Translator Module
Converts all Pillow-based planet generation functions to JSON format
for real-time ThreeJS rendering without frontend recompilation.

This module translates procedural planet generation from Python/Pillow 
to structured JSON data that ThreeJS can interpret and render dynamically.
"""

import math
import random
import time
from typing import Dict, List, Any, Optional, Tuple

from pymodules.__atlas_config import config
from pymodules.__atlas_seedmaster import consistent_hash
from pymodules.__atlas_fixed_vars import VISUAL_DEBUG
from pymodules.__drawer_cplanet_type import get_planet_color_map
from pymodules.__drawer_cplanet_inside import (
    generate_noise_texture,
    generate_clouds,
    generate_cloud_bands,
    generate_abstract_land,
)


class PlanetRenderingTranslator:
    """
    Main translator class that converts Pillow planet generation to JSON
    """
    
    def __init__(self):
        self.planet_types = {
            "Gas Giant": self._translate_gas_giant,
            "Anomaly": self._translate_anomaly,
            "Rocky": self._translate_rocky,
            "Icy": self._translate_icy,
            "Oceanic": self._translate_oceanic,
            "Desert": self._translate_desert,
            "Lava": self._translate_lava,
            "Arid": self._translate_arid,
            "Swamp": self._translate_swamp,
            "Tundra": self._translate_tundra,
            "Forest": self._translate_forest,
            "Savannah": self._translate_savannah,
            "Cave": self._translate_cave,
            "Crystalline": self._translate_crystalline,
            "Metallic": self._translate_metallic,
            "Toxic": self._translate_toxic,
            "Radioactive": self._translate_radioactive,
            "Magma": self._translate_magma,
            "Molten Core": self._translate_molten_core,
            "Carbon": self._translate_carbon,
            "Diamond": self._translate_diamond,
            "Super Earth": self._translate_super_earth,
            "Sub Earth": self._translate_sub_earth,
            "Frozen Gas Giant": self._translate_frozen_gas_giant,
            "Nebulous": self._translate_nebulous,
            "Aquifer": self._translate_aquifer,
            "Exotic": self._translate_exotic,
        }
        
    def translate_planet_rendering(self, planet) -> Dict[str, Any]:
        """
        Main translation function that converts a planet object to complete
        JSON rendering data for ThreeJS
        """
        spaced_planet_name = planet.name.replace("_", " ")
        planet_type = planet.planet_type.replace("_", " ")
        
        # Calculate exact seeds as in Pillow
        current_time = time.time()
        time_elapsed_seconds = current_time - config.cosmic_origin_time
        
        angle_velocity_rotation = 2 * math.pi / planet.rotation_period_seconds
        angle_rotation = (
            planet.initial_angle_rotation + time_elapsed_seconds * angle_velocity_rotation
        ) % (2 * math.pi)
        
        angle_velocity_orbit = 2 * math.pi / planet.orbital_period_seconds
        orbital_angle = (
            planet.initial_orbital_angle + time_elapsed_seconds * angle_velocity_orbit
        ) % (2 * math.pi)
        
        tilt_factor = math.sin(math.radians(planet.axial_tilt))
        shape_seed = consistent_hash(
            f"{config.seed}-{spaced_planet_name}-{planet_type}-{planet.diameter}-{planet.density}-{planet.gravity}-_safe_shaper"
        )
        
        planet_radius = int(200 * (planet.diameter / max(planet.diameter, 1)))
        rng = random.Random(shape_seed)
        
        # Get base color
        planet_color_map = get_planet_color_map()
        base_color = planet_color_map.get(planet.planet_type, "#FFFFFF")
        
        # Generate planet-specific rendering data
        planet_specific_data = {}
        if planet_type in self.planet_types:
            planet_specific_data = self.planet_types[planet_type](
                planet_radius, rng, config.seed, spaced_planet_name
            )
        
        # Si no se generaron comandos específicos, crear comando básico con base_color
        if not planet_specific_data or planet_specific_data.get('type') != 'rendering_commands':
            planet_specific_data = {
                "type": "rendering_commands",
                "commands": [{
                    "command": "apply_material",
                    "target": "planet_mesh",
                    "material_type": "phong",
                    "properties": {
                        "color": base_color,
                        "shininess": 50,
                        "specular": "#222222"
                    }
                }],
                "fallback": True,
                "original_type": planet_specific_data.get('type', 'unknown')
            }
        
        # Generate atmosphere data
        atmosphere_data = self._translate_atmosphere(planet.atmosphere)
        
        # Generate rings data if applicable
        rings_data = None
        if planet.planet_rings:
            rings_data = self._translate_rings(
                planet, planet_radius, rng, tilt_factor, angle_rotation
            )
        
        # Generate life forms data
        life_forms_data = self._translate_life_forms(
            planet.life_forms, planet_radius, rng, config.seed, spaced_planet_name
        )
        
        return {
            "planet_info": {
                "name": spaced_planet_name,
                "type": planet_type,
                "base_color": base_color,
                "radius": planet_radius,
                "diameter": planet.diameter,
                "density": planet.density,
                "gravity": planet.gravity,
                "axial_tilt": planet.axial_tilt,
                "rotation_period": planet.rotation_period_seconds,
                "orbital_period": planet.orbital_period_seconds
            },
            "debug": {
                "visual_debug": VISUAL_DEBUG,
                "cosmic_origin_time": config.cosmic_origin_time,
                "initial_angle_rotation": planet.initial_angle_rotation
            },
            "seeds": {
                "shape_seed": shape_seed,
                "config_seed": str(config.seed),
                "planet_seed": planet.seed
            },
            "timing": {
                "current_rotation_angle": angle_rotation,
                "orbital_angle": orbital_angle,
                "tilt_factor": tilt_factor,
                "cosmic_origin_time": config.cosmic_origin_time,
                "time_elapsed_seconds": time_elapsed_seconds
            },
            "surface_elements": planet_specific_data,
            "atmosphere": atmosphere_data,
            "rings": rings_data,
            "life_forms": life_forms_data,
            "shader_uniforms": self._generate_shader_uniforms(
                planet_type, shape_seed, angle_rotation, base_color, planet_specific_data
            )
        }
    
    def _translate_atmosphere(self, atmosphere_type: str) -> Optional[Dict[str, Any]]:
        """Translate atmosphere data for ThreeJS rendering"""
        if atmosphere_type == "None":
            return None
            
        atmosphere_configs = {
            "Breathable": {"color": [144, 238, 144, 150], "width": 13},
            "Thick": {"color": [169, 169, 169, 200], "width": 17},
            "Thin": {"color": [211, 211, 211, 100], "width": 11},
            "Carbon Dioxide": {"color": [165, 42, 42, 150], "width": 15},
            "Methane": {"color": [0, 0, 139, 150], "width": 15},
            "Nitrogen": {"color": [0, 0, 255, 150], "width": 15},
            "Oxygen-Rich": {"color": [255, 255, 255, 150], "width": 15},
            "Sulfur Dioxide": {"color": [255, 255, 0, 150], "width": 15},
            "Superheated": {"color": [255, 0, 0, 200], "width": 18},
            "Acidic": {"color": [0, 100, 0, 150], "width": 15},
            "Toxic": {"color": [128, 0, 128, 150], "width": 15},
            "Hydrogen": {"color": [255, 182, 193, 150], "width": 15},
            "Helium": {"color": [255, 255, 224, 150], "width": 15},
            "Ammonia": {"color": [240, 230, 140, 150], "width": 15},
            "Ionic": {"color": [0, 191, 255, 150], "width": 18},
            "Plasma": {"color": [255, 105, 180, 200], "width": 18},
            "Exotic Gases": {"color": [186, 85, 211, 150], "width": 18},
            "Water Vapor": {"color": [173, 216, 230, 150], "width": 15},
            "Frozen": {"color": [240, 248, 255, 150], "width": 15},
        }
        
        config = atmosphere_configs.get(atmosphere_type, {"color": [169, 169, 169, 150], "width": 15})
        
        return {
            "type": atmosphere_type,
            "color": [c/255.0 for c in config["color"][:3]] + [config["color"][3]/255.0],
            "width": config["width"],
            "blur_radius": 5
        }
    
    def _translate_rings(self, planet, planet_radius: int, rng: random.Random, 
                        tilt_factor: float, angle_rotation: float) -> Dict[str, Any]:
        """Translate ring data for ThreeJS rendering (reusing existing logic)"""
        ring_inner_radius = planet_radius + rng.randint(120, 160)
        ring_outer_radius = ring_inner_radius + rng.randint(20, 40)
        
        # Generate full ring particles
        base_num_full_ring_points = rng.randint(500, 1500)
        num_full_ring_points = int(base_num_full_ring_points * 1.5)
        full_ring_particles = []
        
        for _ in range(num_full_ring_points):
            angle = rng.uniform(math.pi, 2 * math.pi)
            distance = rng.uniform(ring_inner_radius, ring_outer_radius)
            
            x = distance * math.cos(angle)
            y = distance * tilt_factor * math.sin(angle)
            
            point_size = rng.choices([0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1)[0]
            gray_value = rng.randint(20, 50)
            
            full_ring_particles.append({
                "x": x, "y": y, "z": 0,
                "size": point_size,
                "color": [gray_value/255.0, gray_value/255.0, gray_value/255.0, 1.0],
                "angle": angle,
                "distance": distance
            })
        
        # Generate ontop ring particles
        base_num_ontop_ring_points = rng.randint(500, 1500)
        num_ontop_ring_points = int(base_num_ontop_ring_points * 1.5)
        ontop_ring_particles = []
        
        for _ in range(num_ontop_ring_points):
            angle = rng.uniform(0, math.pi)
            distance = rng.uniform(ring_inner_radius, ring_outer_radius)
            
            x = distance * math.cos(angle)
            y = distance * tilt_factor * math.sin(angle)
            
            point_size = rng.choices([0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1)[0]
            gray_value = rng.randint(20, 50)
            
            ontop_ring_particles.append({
                "x": x, "y": y, "z": 0,
                "size": point_size,
                "color": [gray_value/255.0, gray_value/255.0, gray_value/255.0, 1.0],
                "angle": angle,
                "distance": distance
            })
        
        return {
            "has_rings": True,
            "inner_radius": ring_inner_radius,
            "outer_radius": ring_outer_radius,
            "tilt_factor": tilt_factor,
            "rotation_angle": angle_rotation,
            "full_ring": {
                "num_particles": num_full_ring_points,
                "particles": full_ring_particles
            },
            "ontop_ring": {
                "num_particles": num_ontop_ring_points,
                "particles": ontop_ring_particles
            }
        }
    
    def _translate_life_forms(self, life_forms: str, planet_radius: int, 
                             rng: random.Random, seed: int, planet_name: str) -> Optional[Dict[str, Any]]:
        """Translate life forms for ThreeJS rendering"""
        if life_forms == "None":
            return None
            
        # Basic life forms data structure - can be expanded
        return {
            "type": life_forms,
            "planet_radius": planet_radius,
            "seed": seed,
            "effects": self._generate_life_effects(life_forms, rng)
        }
    
    def _generate_life_effects(self, life_forms: str, rng: random.Random) -> List[Dict[str, Any]]:
        """Generate visual effects for different life forms"""
        effects = []
        
        if life_forms == "Intelligent Life":
            # Add city lights or structures
            num_cities = rng.randint(3, 8)
            for i in range(num_cities):
                effects.append({
                    "type": "city_lights",
                    "position": [rng.uniform(-1, 1), rng.uniform(-1, 1)],
                    "intensity": rng.uniform(0.5, 1.0),
                    "color": [1.0, 1.0, 0.8, 0.8]
                })
        
        elif life_forms == "Silicon-Based Life":
            # Add crystalline structures
            num_structures = rng.randint(5, 12)
            for i in range(num_structures):
                effects.append({
                    "type": "crystal_formations",
                    "position": [rng.uniform(-1, 1), rng.uniform(-1, 1)],
                    "size": rng.uniform(0.02, 0.08),
                    "color": [0.5, 0.8, 1.0, 0.7]
                })
        
        elif life_forms == "Conscious Gas":
            # Add swirling patterns
            effects.append({
                "type": "gas_swirls",
                "animation_speed": rng.uniform(0.5, 2.0),
                "color": [0.8, 0.3, 1.0, 0.6],
                "intensity": rng.uniform(0.3, 0.7)
            })
        
        return effects

    def _generate_shader_uniforms(self, planet_type: str, shape_seed: int, 
                                 angle_rotation: float, base_color: str, 
                                 planet_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate shader uniforms for ThreeJS materials"""
        # Convert hex color to RGB
        base_rgb = self._hex_to_rgb(base_color)
        
        uniforms = {
            "time": {"value": 0.0, "type": "float"},
            "seed": {"value": shape_seed * 0.001, "type": "float"},
            "rotationAngle": {"value": angle_rotation, "type": "float"},
            "baseColor": {"value": base_rgb, "type": "vec3"},
            "planetType": {"value": planet_type, "type": "string"}
        }
        
        # Add planet-specific uniforms
        if planet_type == "Gas Giant" and "cloud_bands" in planet_data:
            bands_data = planet_data["cloud_bands"]
            uniforms.update({
                "numBands": {"value": bands_data["num_bands"], "type": "float"},
                "bandPositions": {"value": bands_data["positions"], "type": "float[]"},
                "bandWidths": {"value": bands_data["widths"], "type": "float[]"},
                "bandRotation": {"value": bands_data["rotation"], "type": "float"}
            })
        
        return uniforms
    
    def _hex_to_rgb(self, hex_color: str) -> List[float]:
        """Convert hex color to normalized RGB values"""
        hex_color = hex_color.lstrip('#')
        return [int(hex_color[i:i+2], 16)/255.0 for i in (0, 2, 4)]
    
    def _generate_abstract_land_data(self, planet_radius: int, seed: int, planet_name: str,
                                   color: tuple, points_min: int, points_max: int,
                                   seg_min: int, seg_max: int) -> List[Dict[str, Any]]:
        """Generate abstract land data EXACTLY as in Pillow generate_abstract_land"""
        import hashlib
        
        # Create exact hash as in Pillow
        planet_seed_string = f"{seed}-{planet_name}-{planet_radius}-{color}-{points_max}-{points_min}-{seg_min}-{seg_max}-abstract_land"
        planet_seed = int(hashlib.md5(planet_seed_string.encode()).hexdigest(), 16) & 0x7FFFFFFF
        
        rng = random.Random(planet_seed)
        center_x, center_y = 100, 100  # Reference coordinates
        
        num_segments = rng.randint(seg_min, seg_max)
        segments = []
        
        for _ in range(num_segments):
            num_points = rng.randint(points_min, points_max)
            angle_offset = rng.uniform(0, 2 * math.pi)
            angle_step = 2 * math.pi / num_points
            
            # Generate origin as in Pillow
            origin_angle = rng.uniform(0, 2 * math.pi)
            origin_distance = rng.uniform(planet_radius * 0.8, planet_radius * 1.1)
            origin_x = center_x + origin_distance * math.cos(origin_angle)
            origin_y = center_y + origin_distance * math.sin(origin_angle)
            
            points = []
            for i in range(num_points):
                angle = angle_offset + i * angle_step + rng.uniform(-0.05, 0.05)
                dist = rng.uniform(0.3 * planet_radius, 0.6 * planet_radius)
                x = origin_x + dist * math.cos(angle)
                y = origin_y + dist * math.sin(angle)
                
                # Normalize for 3D
                norm_x = (x - center_x) / planet_radius
                norm_y = (y - center_y) / planet_radius
                points.append([norm_x, norm_y])
            
            segments.append({
                "points": points,
                "color": [color[0]/255.0, color[1]/255.0, color[2]/255.0, color[3]/255.0],
                "origin": [(origin_x - center_x) / planet_radius, (origin_y - center_y) / planet_radius]
            })
        
        return segments

    # Planet-specific translation methods
    def _translate_gas_giant(self, planet_radius: int, rng: random.Random, 
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
            "surface_rings": {
                "num_rings": 30,
                "color": [0, 0, 0, 0.02],  # As in draw_planet_rings
                "opacity_falloff": 4.0
            },
            "storms": storms,
            "debug": {
                "original_planet_radius": planet_radius,
                "center_y": center_y,
                "band_count": num_bands,
                "rotation_degrees": rotation_angle * 180 / math.pi
            }
        }
    
    def _translate_rocky(self, planet_radius: int, rng: random.Random, 
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
            normalized_x = (cloud_x - center_x) / planet_radius
            normalized_y = (cloud_y - center_y) / planet_radius
            
            clouds.append({
                "position": [normalized_x, normalized_y],
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
            normalized_x = (crater_x - center_x) / planet_radius
            normalized_y = (crater_y - center_y) / planet_radius
            
            crater = {
                "position": [normalized_x, normalized_y],
                "radius": crater_radius / planet_radius,
                "color": [0.3, 0.3, 0.3, 1.0],  # darkgray
                "type": "crater",
                "seed": f"{planet_name}_crater"
            }
        
        return {
            "type": "rocky",
            "surface_rings": {"color": [0, 0, 0, 75/255.0]},
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
    
    def _translate_icy(self, planet_radius: int, rng: random.Random, 
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
            normalized_x = (crystal_x - center_x) / planet_radius
            normalized_y = (crystal_y - center_y) / planet_radius
            
            crystals.append({
                "position": [normalized_x, normalized_y],
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
            normalized_x = (cap_x - center_x) / planet_radius
            normalized_y = (cap_y - center_y) / planet_radius
            
            ice_caps.append({
                "position": [normalized_x, normalized_y],
                "radius": cap_radius / planet_radius,
                "color": [0.678, 0.847, 1.0, 0.8],  # lightblue
                "seed": f"{planet_name}_icecap_{i}"
            })
        
        return {
            "type": "icy",
            "surface_rings": {"color": [0, 0, 0, 60/255.0]},
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
    
    # Add more planet type translators following the same pattern...
    def _translate_oceanic(self, planet_radius: int, rng: random.Random, 
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
            patch_angle = rng.uniform(0, 2 * math.pi)
            patch_distance = rng.uniform(1 * planet_radius, planet_radius)
            
            patch_x = center_x + patch_distance * math.cos(patch_angle)
            patch_y = center_y + patch_distance * math.sin(patch_angle)
            
            # Convert to normalized coordinates
            normalized_x = (patch_x - center_x) / planet_radius
            normalized_y = (patch_y - center_y) / planet_radius
            
            green_patches.append({
                "position": [normalized_x, normalized_y],
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
            normalized_x = (cloud_x - center_x) / planet_radius
            normalized_y = (cloud_y - center_y) / planet_radius
            
            clouds.append({
                "position": [normalized_x, normalized_y],
                "radius": cloud_radius / planet_radius,
                "color": [244/255.0, 164/255.0, 96/255.0, 1.0],  # sandybrown
                "seed": f"{planet_name}_cloud_{i}"
            })
        
        # Convertir datos específicos a órdenes de renderizado genéricas
        rendering_commands = []
        
        # 1. Comando para aplicar material base
        rendering_commands.append({
            "command": "apply_material",
            "target": "planet_mesh",
            "material_type": "phong",
            "properties": {
                "color": "#0000FF",  # Azul oceánico
                "shininess": 100,
                "specular": "#222222"
            }
        })
        
        # 2. Comandos para renderizar parches verdes
        for i, patch in enumerate(green_patches):
            rendering_commands.append({
                "command": "create_surface_element",
                "element_type": "circular_patch",
                "id": f"green_patch_{i}",
                "position": patch["position"],
                "size": patch["size"],
                "color": patch["color"],
                "geometry": {
                    "type": "circle",
                    "segments": patch["sides"],
                    "elevation": 0.001  # Ligeramente elevado sobre superficie
                }
            })
        
        # 3. Comandos para renderizar tierras abstractas
        for i, land in enumerate(abstract_lands):
            rendering_commands.append({
                "command": "create_surface_element", 
                "element_type": "abstract_land",
                "id": f"abstract_land_{i}",
                "color": land["color"],
                "geometry": {
                    "type": "irregular_polygon",
                    "points_min": land["points_min"],
                    "points_max": land["points_max"],
                    "seed": land["seed"],
                    "elevation": 0.0005
                }
            })
        
        # 4. Comandos para renderizar nubes
        for i, cloud in enumerate(clouds):
            rendering_commands.append({
                "command": "create_surface_element",
                "element_type": "cloud",
                "id": f"cloud_{i}",
                "position": cloud["position"],
                "radius": cloud["radius"],
                "color": cloud["color"],
                "geometry": {
                    "type": "sphere",
                    "elevation": 0.02  # Elevado sobre superficie
                }
            })
        
        return {
            "type": "rendering_commands",  # Cambio clave: no "oceanic" específico
            "commands": rendering_commands,
            "legacy_data": {
                # Mantener datos legacy para debug
                "surface_rings": {"color": [0, 0, 0, 60/255.0]},
                "depths": {"enabled": True},
                "abstract_lands": abstract_lands,
                "green_patches": green_patches,
                "clouds": clouds,
            }
        }
    
    def _translate_desert(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Desert planet elements"""
        return {"type": "desert"}  # Se usará fallback con base_color
    
    def _translate_lava(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Lava planet elements"""
        return {"type": "lava"}  # Se usará fallback con base_color
    
    def _translate_arid(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Arid planet elements"""
        return {"type": "arid"}
    
    def _translate_swamp(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Swamp planet elements"""
        return {"type": "swamp"}
    
    def _translate_tundra(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Tundra planet elements"""
        return {"type": "tundra"}
    
    def _translate_forest(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Forest planet elements"""
        return {"type": "forest"}
    
    def _translate_savannah(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Savannah planet elements"""
        return {"type": "savannah"}
    
    def _translate_cave(self, planet_radius: int, rng: random.Random, 
                       seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Cave planet elements"""
        return {"type": "cave"}
    
    def _translate_crystalline(self, planet_radius: int, rng: random.Random, 
                              seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Crystalline planet elements"""
        return {"type": "crystalline"}
    
    def _translate_metallic(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Metallic planet elements using modular 3D effects system
        
        Based on visual description:
        - Gray metallic surface with PBR materials
        - Purple/violet atmospheric halo
        - Angular fragmentation at edges
        - White atmospheric streaks
        - Circular waves in interior
        """
        
        # Base metallic color variations
        base_gray = rng.uniform(0.3, 0.5)  # Variación de gris metálico
        
        # Sistema de efectos modulares 3D
        effects_3d = []
        
        # 1. SUPERFICIE METÁLICA PBR
        effects_3d.append({
            "type": "metallic_surface",
            "params": {
                "color": [base_gray, base_gray, base_gray + 0.05],  # Ligero tinte azulado
                "roughness": rng.uniform(0.6, 0.8),  # Rugosidad media-alta
                "metalness": rng.uniform(0.85, 0.95),  # Muy metálico
                "fragmentationIntensity": rng.uniform(0.4, 0.7),  # Fragmentación en bordes
                "noiseScale": rng.uniform(6.0, 10.0),  # Escala del ruido superficial
                "noiseIntensity": rng.uniform(0.2, 0.4)  # Intensidad de variaciones
            },
            "priority": 0
        })
        
        # 2. HALO ATMOSFÉRICO VIOLETA
        halo_color = [
            rng.uniform(0.5, 0.7),  # R - violeta
            rng.uniform(0.0, 0.2),  # G - poco verde
            rng.uniform(0.8, 1.0)   # B - mucho azul
        ]
        
        effects_3d.append({
            "type": "atmospheric_halo",
            "params": {
                "color": halo_color,
                "intensity": rng.uniform(0.8, 1.2),
                "falloff": rng.uniform(1.8, 2.5),  # Caída del brillo
                "scale": rng.uniform(1.12, 1.18)  # Tamaño del halo
            },
            "priority": 10
        })
        
        # 3. ESTELAS ATMOSFÉRICAS BLANCAS
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
        
        # 4. FRAGMENTACIÓN EN BORDES
        if rng.random() > 0.3:  # 70% probabilidad de fragmentación visible
            effects_3d.append({
                "type": "fragmentation",
                "params": {
                    "color": [base_gray * 0.7, base_gray * 0.7, base_gray * 0.7],
                    "fragmentCount": rng.randint(15, 30)
                },
                "priority": 5
            })
        
        # Datos de superficie para compatibilidad con sistema actual
        surface_data = {
            "type": "metallic",
            "base_color": [base_gray, base_gray, base_gray + 0.05],
            "roughness": 0.7,
            "metalness": 0.9,
            "fragmentation": 0.5,
            "noise_scale": 8.0,
            "noise_intensity": 0.3,
            "has_fragmentation_zones": True,
            "fragment_count": 20,
            "fragment_color": [base_gray * 0.7, base_gray * 0.7, base_gray * 0.7]
        }
        
        # Datos de atmósfera estructurados
        atmosphere_data = {
            "halo": {
                "color": halo_color,
                "intensity": 1.0,
                "falloff": 2.0,
                "scale": 1.15
            },
            "streaks": {
                "color": [0.95, 0.95, 1.0],
                "count": 100,
                "speed": 1.0
            }
        }
        
        # Generar acciones universales para retrocompatibilidad
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
        
        # Grietas angulares en zonas específicas
        # Cuadrante inferior derecho
        for _ in range(rng.randint(3, 6)):
            crack_start = [
                rng.uniform(0.3, 0.7),
                rng.uniform(-0.7, -0.3)
            ]
            crack_end = [
                crack_start[0] + rng.uniform(-0.2, 0.2),
                crack_start[1] + rng.uniform(-0.2, 0.2)
            ]
            
            actions.append({
                "type": "draw_line",
                "params": {
                    "start": crack_start,
                    "end": crack_end,
                    "width": 0.01,
                    "color": [base_gray * 0.3, base_gray * 0.3, base_gray * 0.3, 0.8]
                }
            })
        
        # Cuadrante superior izquierdo
        for _ in range(rng.randint(3, 6)):
            crack_start = [
                rng.uniform(-0.7, -0.3),
                rng.uniform(0.3, 0.7)
            ]
            crack_end = [
                crack_start[0] + rng.uniform(-0.2, 0.2),
                crack_start[1] + rng.uniform(-0.2, 0.2)
            ]
            
            actions.append({
                "type": "draw_line",
                "params": {
                    "start": crack_start,
                    "end": crack_end,
                    "width": 0.01,
                    "color": [base_gray * 0.3, base_gray * 0.3, base_gray * 0.3, 0.8]
                }
            })
        
        # Manchas de neblina grisácea
        num_fog_patches = rng.randint(5, 10)
        for _ in range(num_fog_patches):
            fog_pos = [
                rng.uniform(-0.6, 0.6),
                rng.uniform(-0.6, 0.6)
            ]
            fog_radius = rng.uniform(0.1, 0.3)
            
            actions.append({
                "type": "draw_cloud",
                "params": {
                    "center": fog_pos,
                    "radius": fog_radius,
                    "density": rng.uniform(0.2, 0.4),
                    "color": [base_gray * 1.2, base_gray * 1.2, base_gray * 1.2, 0.2],
                    "blur": 8
                }
            })
        
        return {
            "type": "metallic_3d",
            "surface": surface_data,
            "atmosphere": atmosphere_data,
            "effects_3d": effects_3d,
            "universal_actions": actions,
            "description": {
                "appearance": "Metallic gray planet with purple halo",
                "surface_features": "Angular fragmentation at edges, circular waves in interior",
                "atmosphere_features": "White atmospheric streaks, violet-purple glow",
                "material": "PBR metallic with medium-high roughness"
            }
        }
    
    def _translate_toxic(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Toxic planet elements"""
        return {"type": "toxic"}
    
    def _translate_radioactive(self, planet_radius: int, rng: random.Random, 
                              seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Radioactive planet elements"""
        return {"type": "radioactive"}
    
    def _translate_magma(self, planet_radius: int, rng: random.Random, 
                        seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Magma planet elements"""
        return {"type": "magma"}
    
    def _translate_molten_core(self, planet_radius: int, rng: random.Random, 
                              seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Molten Core planet elements"""
        return {"type": "molten_core"}
    
    def _translate_carbon(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Carbon planet elements"""
        return {"type": "carbon"}
    
    def _translate_diamond(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Diamond planet elements"""
        return {"type": "diamond"}
    
    def _translate_super_earth(self, planet_radius: int, rng: random.Random, 
                              seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Super Earth planet elements"""
        return {"type": "super_earth"}
    
    def _translate_sub_earth(self, planet_radius: int, rng: random.Random, 
                            seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Sub Earth planet elements"""
        return {"type": "sub_earth"}
    
    def _translate_frozen_gas_giant(self, planet_radius: int, rng: random.Random, 
                                   seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Frozen Gas Giant planet elements"""
        return {"type": "frozen_gas_giant"}
    
    def _translate_nebulous(self, planet_radius: int, rng: random.Random, 
                           seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Nebulous planet elements"""
        return {"type": "nebulous"}
    
    def _translate_aquifer(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Aquifer planet elements"""
        return {"type": "aquifer"}
    
    def _translate_exotic(self, planet_radius: int, rng: random.Random, 
                         seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Exotic planet elements"""
        return {"type": "exotic"}
    
    def _translate_anomaly(self, planet_radius: int, rng: random.Random, 
                          seed: int, planet_name: str) -> Dict[str, Any]:
        """Translate Anomaly planet elements"""
        return {"type": "anomaly"}


# Global translator instance
planet_translator = PlanetRenderingTranslator()


def get_planet_rendering_data(planet) -> Dict[str, Any]:
    """
    Main function to get complete planet rendering data in JSON format
    """
    return planet_translator.translate_planet_rendering(planet)


def register_planet_renderer_api(app):
    """Register the planet renderer API endpoints with the Flask app"""
    from flask import jsonify, session
    from pymodules.__universe_base import Universe
    from pymodules.__universe_constants import PhysicalConstants
    
    @app.route("/api/planet/<planet_name>/rendering-data")
    def get_planet_rendering_api(planet_name):
        """Get complete planet rendering data for ThreeJS"""
        try:
            # Initialize universe if not already done
            if not config.is_initialized:
                if not config.initialize():
                    return jsonify({"error": "Failed to initialize config"})
            
            constants = PhysicalConstants()
            universe = Universe(config.seed, constants)
            
            # Get current session data
            galaxy_data = session.get("galaxy")
            system_index = session.get("system")
            
            if not galaxy_data or system_index is None:
                return jsonify({"error": "No galaxy or system data in session"})
                
            # Get galaxy and system
            galaxy = universe.get_galaxy(*galaxy_data["coordinates"])
            system = galaxy.get_solar_system(system_index)
            
            # Find the planet by name
            planet = None
            planet_name_lower = planet_name.lower()
            
            for index, planet_obj in system.planets.items():
                if planet_obj.name.lower() == planet_name_lower:
                    planet = planet_obj
                    break
                    
            if planet is None:
                return jsonify({"error": f"Planet {planet_name} not found in system"})
            
            # Get complete rendering data
            rendering_data = get_planet_rendering_data(planet)
            
            return jsonify({
                "success": True,
                "planet_name": planet_name,
                "rendering_data": rendering_data
            })
        
        except Exception as e:
            import traceback
            return jsonify({
                "error": f"Error generating rendering data: {str(e)}",
                "traceback": traceback.format_exc()
            })