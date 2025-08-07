#!/usr/bin/env python3
"""
Planet Renderer Package
Modular planet rendering system for converting Pillow-based planet generation 
to JSON format for ThreeJS rendering.

This package provides a clean, modular architecture for translating 
procedural planet generation from Python/Pillow to structured JSON data 
that ThreeJS can interpret and render dynamically.
"""

from .main_translator import PlanetRenderingTranslator
from .api_endpoints import PlanetRendererAPI

# Global translator instance for backward compatibility
planet_translator = PlanetRenderingTranslator()

# Main API functions for backward compatibility
def get_planet_rendering_data(planet):
    """Main function to get complete planet rendering data in JSON format"""
    return planet_translator.translate_planet_rendering(planet)

def translate_planet_to_json(planet):
    """Simple wrapper function that calls the PlanetRenderingTranslator"""
    return planet_translator.translate_planet_rendering(planet)

def register_planet_renderer_api(app):
    """Register the planet renderer API endpoints with the Flask app"""
    api = PlanetRendererAPI(planet_translator)
    api.register_endpoints(app)

__all__ = [
    'PlanetRenderingTranslator',
    'PlanetRendererAPI', 
    'planet_translator',
    'get_planet_rendering_data',
    'translate_planet_to_json',
    'register_planet_renderer_api'
]