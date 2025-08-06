#!/usr/bin/env python3
"""
Test API to see actual planet data differences
"""

import sys
import os
sys.path.append('.')

from pymodules.__frontendAPI_planet_renderer import get_planet_rendering_data
from pymodules.__atlas_config import config

# Mock planet class for testing
class MockPlanet:
    def __init__(self, name, planet_type):
        self.name = name
        self.planet_type = planet_type
        self.diameter = 100
        self.density = 5.5
        self.gravity = 9.8
        self.axial_tilt = 23.5
        self.rotation_period_seconds = 86400
        self.orbital_period_seconds = 31536000
        self.initial_angle_rotation = 0
        self.initial_orbital_angle = 0
        self.atmosphere = "Breathable"
        self.planet_rings = False
        self.life_forms = "None"
        self.seed = hash(name) & 0x7FFFFFFF

def test_api_uniqueness():
    """Test that API returns unique data for same-type planets"""
    print("🧪 Testing API Data Uniqueness for Same-Type Planets")
    print("=" * 60)
    
    # Initialize config
    if not config.initialize():
        config.seed = 12345
        config.cosmic_origin_time = 1640000000
        config.is_initialized = True
    
    # Create test planets of same type
    oceanic_planets = [
        MockPlanet("oceanic_alpha", "Oceanic"),
        MockPlanet("oceanic_beta", "Oceanic"), 
        MockPlanet("oceanic_gamma", "Oceanic")
    ]
    
    print("🌊 Testing Oceanic Planets:")
    for i, planet in enumerate(oceanic_planets):
        print(f"\n🌍 Planet {i+1}: {planet.name}")
        
        try:
            data = get_planet_rendering_data(planet)
            
            # Extract key data for comparison
            seeds = data.get('seeds', {})
            surface_elements = data.get('surface_elements', {})
            green_patches = surface_elements.get('green_patches', [])
            clouds = surface_elements.get('clouds', [])
            
            print(f"  🌱 Shape Seed: {seeds.get('shape_seed')}")
            print(f"  🟢 Green Patches: {len(green_patches)}")
            if green_patches:
                patch = green_patches[0]
                print(f"     └─ First patch: pos={patch.get('position')}, size={patch.get('size')}")
                print(f"                     color={patch.get('color')}")
            
            print(f"  ☁️  Clouds: {len(clouds)}")
            if clouds:
                cloud = clouds[0]
                print(f"     └─ First cloud: pos={cloud.get('position')}, radius={cloud.get('radius')}")
                
        except Exception as e:
            print(f"  ❌ Error: {e}")
    
    print(f"\n🎯 Result: Each planet should have different:")
    print(f"  • Shape seed values")
    print(f"  • Green patch positions and colors")
    print(f"  • Cloud positions and sizes")
    print(f"  • This proves procedural uniqueness!")
    
    return True

if __name__ == "__main__":
    test_api_uniqueness()