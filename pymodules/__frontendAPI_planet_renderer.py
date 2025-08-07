#!/usr/bin/env python3
"""
Universal Planet Renderer Translator Module
Converts all Pillow-based planet generation functions to JSON format
for real-time ThreeJS rendering without frontend recompilation.

This module translates procedural planet generation from Python/Pillow 
to structured JSON data that ThreeJS can interpret and render dynamically.

REFACTORED: Now uses modular planet_renderer package for better maintainability.
The original large monolithic file has been split into focused, maintainable modules:

- atmosphere_translator.py: Handles atmosphere rendering data
- rings_translator.py: Handles ring system rendering data  
- life_forms_translator.py: Handles life forms effects
- shader_utils.py: Utilities for shader uniforms and materials
- planet_type_translators.py: Specific planet type translations
- common_utils.py: Shared utility functions
- main_translator.py: Main coordinator class
- api_endpoints.py: Flask API endpoint handlers
"""

# Import from the new modular planet_renderer package
from pymodules.planet_renderer import (
    get_planet_rendering_data,
    translate_planet_to_json,
    register_planet_renderer_api,
    planet_translator,
    PlanetRenderingTranslator
)

# Backward compatibility exports
__all__ = [
    'PlanetRenderingTranslator',
    'planet_translator',
    'get_planet_rendering_data', 
    'translate_planet_to_json',
    'register_planet_renderer_api'
]