#!/usr/bin/env python3
"""
Main Planet Rendering Translator Module
Core translator class that coordinates all planet rendering translation components.
"""

import math
import random
import time
from typing import Dict, List, Any, Optional, Tuple

from pymodules.__atlas_config import config
from pymodules.__atlas_seedmaster import consistent_hash
from pymodules.__atlas_fixed_vars import VISUAL_DEBUG
from pymodules.__drawer_cplanet_type import get_planet_color_map

from .atmosphere_translator import AtmosphereTranslator
from .rings_translator import RingsTranslator
from .life_forms_translator import LifeFormsTranslator
from .shader_utils import ShaderUtils
from .planet_type_translators import PlanetTypeTranslators


class PlanetRenderingTranslator:
    """
    Main translator class that converts Pillow planet generation to JSON
    """
    
    def __init__(self):
        # Initialize component translators
        self.atmosphere_translator = AtmosphereTranslator()
        self.rings_translator = RingsTranslator()
        self.life_forms_translator = LifeFormsTranslator()
        self.planet_type_translators = PlanetTypeTranslators()
        
        # Map planet types to their translation methods
        self.planet_types = {
            "Gas Giant": self.planet_type_translators.translate_gas_giant,
            "Anomaly": self.planet_type_translators.translate_anomaly,
            "Rocky": self.planet_type_translators.translate_rocky,
            "Icy": self.planet_type_translators.translate_icy,
            "Oceanic": self.planet_type_translators.translate_oceanic,
            "Desert": self.planet_type_translators.translate_desert,
            "Lava": self.planet_type_translators.translate_lava,
            "Arid": self.planet_type_translators.translate_arid,
            "Swamp": self.planet_type_translators.translate_swamp,
            "Tundra": self.planet_type_translators.translate_tundra,
            "Forest": self.planet_type_translators.translate_forest,
            "Savannah": self.planet_type_translators.translate_savannah,
            "Cave": self.planet_type_translators.translate_cave,
            "Crystalline": self.planet_type_translators.translate_crystalline,
            "Metallic": self.planet_type_translators.translate_metallic,
            "Toxic": self.planet_type_translators.translate_toxic,
            "Radioactive": self.planet_type_translators.translate_radioactive,
            "Magma": self.planet_type_translators.translate_magma,
            "Molten Core": self.planet_type_translators.translate_molten_core,
            "Carbon": self.planet_type_translators.translate_carbon,
            "Diamond": self.planet_type_translators.translate_diamond,
            "Super Earth": self.planet_type_translators.translate_super_earth,
            "Sub Earth": self.planet_type_translators.translate_sub_earth,
            "Frozen Gas Giant": self.planet_type_translators.translate_frozen_gas_giant,
            "Nebulous": self.planet_type_translators.translate_nebulous,
            "Aquifer": self.planet_type_translators.translate_aquifer,
            "Exotic": self.planet_type_translators.translate_exotic,
        }
        
    def translate_planet_rendering(self, planet) -> Dict[str, Any]:
        """
        Main translation function that converts a planet object to complete
        JSON rendering data for ThreeJS
        """
        spaced_planet_name = planet.name.replace("_", " ")
        planet_type = planet.planet_type.replace("_", " ")
        
        # Calculate exact seeds as in Pillow
        # CRITICAL: Use SAME cosmic_origin_time as System endpoint to ensure consistency
        cosmic_origin_time = 514080000  # FIXED: Same as System API
        current_time = time.time()
        time_elapsed_seconds = current_time - cosmic_origin_time
        
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
            # Calculate orbital period in years for hexagon timing
            orbital_period_years = planet.orbital_period_seconds / (365.25 * 24 * 3600) if planet.orbital_period_seconds else 1.0
            
            # Check if this is a planet type that needs orbital period
            if planet_type in ["Gas Giant", "Frozen Gas Giant", "Nebulous", "Anomaly", "Exotic"]:
                planet_specific_data = self.planet_types[planet_type](
                    planet_radius, rng, config.seed, spaced_planet_name, orbital_period_years
                )
            else:
                planet_specific_data = self.planet_types[planet_type](
                    planet_radius, rng, config.seed, spaced_planet_name
                )
        
        # Si no hay datos específicos, simplemente usar datos básicos
        if not planet_specific_data:
            planet_specific_data = {
                "type": "basic"
            }
        
        # Generate atmosphere data
        atmosphere_data = self.atmosphere_translator.translate_atmosphere(planet.atmosphere)
        
        # Generate rings data if applicable
        rings_data = None
        if planet.planet_rings:
            rings_data = self.rings_translator.translate_rings(
                planet, planet_radius, rng, tilt_factor, angle_rotation
            )
        
        # Generate life forms data
        life_forms_data = self.life_forms_translator.translate_life_forms(
            planet.life_forms, planet_radius, rng, config.seed, spaced_planet_name
        )
        
        return {
            "planet_info": {
                "name": spaced_planet_name,
                "type": planet_type,
                "base_color": base_color,
                "radius": planet_radius,
                "diameter": planet.diameter,
                "orbital_radius": planet.orbital_radius,
                "density": planet.density,
                "gravity": planet.gravity,
                "axial_tilt": planet.axial_tilt,
                "rotation_period": planet.rotation_period_seconds,
                "orbital_period": planet.orbital_period_seconds
            },
            "debug": {
                "visual_debug": VISUAL_DEBUG,
                "cosmic_origin_time": cosmic_origin_time,  # Use fixed value
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
                "initial_orbital_angle": planet.initial_orbital_angle,  # AÑADIDO: posición estática inicial
                "tilt_factor": tilt_factor,
                "cosmic_origin_time": cosmic_origin_time,  # Use fixed value same as System API
                "time_elapsed_seconds": time_elapsed_seconds,
                "elapsed_time": time_elapsed_seconds  # Also as elapsed_time for compatibility
            },
            "surface_elements": planet_specific_data,
            "atmosphere": atmosphere_data,
            "rings": rings_data,
            "life_forms": life_forms_data,
            "shader_uniforms": ShaderUtils.generate_shader_uniforms(
                planet_type, shape_seed, angle_rotation, base_color, planet_specific_data
            )
        }