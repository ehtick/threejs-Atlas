#!/usr/bin/env python3

import sys
import os
sys.path.append('/Users/bansheetechnologiess.l./Desktop/Atlas')

import random
import math
from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator

def test_metallic_planet():
    # Decode the planet parameters for Pyrogol IE-3967
    planet_name = "pyrogol_ie-3967"
    coordinates = (0, 0, 0)  # coordinates=0,0,0
    system = 0               # system=0
    
    # Create the exact same seed as the backend would generate
    spaced_planet_name = planet_name.replace('_', ' ')
    seed_string = f"{coordinates[0]}-{coordinates[1]}-{coordinates[2]}-{system}-{spaced_planet_name}"
    seed = hash(seed_string) & 0x7FFFFFFF
    
    print(f"Planet: {spaced_planet_name}")
    print(f"Seed string: {seed_string}")  
    print(f"Generated seed: {seed}")
    print()
    
    # Create translator and generate data
    translator = PlanetRenderingTranslator()
    
    # Test with standard planet radius
    planet_radius = 100
    planet_data = translator._translate_metallic(planet_radius, random.Random(seed), seed, spaced_planet_name)
    
    print("=== METALLIC PLANET PROCEDURAL GENERATION ===")
    print()
    
    # Analyze the metallic elements that should be generated
    rng = random.Random(seed)
    center_x, center_y = 100, 100  # Standard center coordinates
    
    print("1. BASE RINGS:")
    rng_rings = random.Random(seed)
    linebreaker = rng_rings.randint(30, 60)
    print(f"   - Rings count: {linebreaker}")
    
    print()
    print("2. METALLIC REFLECTIONS (Crystal-like structures):")
    rng_reflections = random.Random(seed)
    # Skip rings generation to get to reflections
    rng_reflections.randint(30, 60)  # Skip linebreaker
    
    num_reflections = rng_reflections.randint(30, 90)
    print(f"   - Number of reflections: {num_reflections}")
    
    reflections = []
    for i in range(min(num_reflections, 10)):  # Show first 10
        reflection_radius = rng_reflections.randint(10, 160)
        angle = rng_reflections.uniform(0, 2 * math.pi)
        
        cos_angle = math.cos(angle)
        sin_angle = math.sin(angle)
        
        reflection_x = center_x + int((planet_radius + reflection_radius // 2) * cos_angle)
        reflection_y = center_y + int((planet_radius + reflection_radius // 2) * sin_angle)
        
        # Normalized coordinates for 3D
        norm_x = (reflection_x - center_x) / planet_radius
        norm_y = (reflection_y - center_y) / planet_radius
        
        reflections.append({
            'id': i,
            'radius': reflection_radius,
            'angle': angle,
            'position': (norm_x, norm_y),
            'layers': reflection_radius // 8
        })
        
        print(f"   - Reflection {i}: pos=({norm_x:.3f}, {norm_y:.3f}), radius={reflection_radius}, layers={reflection_radius // 8}")
    
    print()
    print("3. ABSTRACT METALLIC LANDS:")
    
    # First abstract land - darker metallic areas (40, 40, 40, 60)
    rng_land1 = random.Random(hash(f"{seed}-{spaced_planet_name}-{planet_radius}-(40, 40, 40, 60)-9-7-2-3-abstract_land") & 0x7FFFFFFF)
    num_segments1 = rng_land1.randint(2, 3)
    print(f"   - Dark metallic areas: {num_segments1} segments")
    
    # Second abstract land - black areas (0, 0, 0, 90)  
    rng_land2 = random.Random(hash(f"{seed}-{spaced_planet_name}-{planet_radius}-(0, 0, 0, 90)-8-6-2-3-abstract_land") & 0x7FFFFFFF)
    num_segments2 = rng_land2.randint(2, 3)
    print(f"   - Black metallic areas: {num_segments2} segments")
    
    print()
    print("4. METALLIC CLOUD AREAS:")
    
    # Metal areas with silver clouds
    rng_metal = random.Random(seed)
    # Skip all previous generations to get to metal areas
    rng_metal.randint(30, 60)  # rings
    for _ in range(num_reflections):  # reflections
        rng_metal.randint(10, 160)
        rng_metal.uniform(0, 2 * math.pi)
        for j in range(rng_metal.randint(10, 160), 0, -8):
            num_points = rng_metal.randint(10, 20)
            for _ in range(num_points):
                rng_metal.uniform(0, 2 * math.pi)
                rng_metal.uniform(j * 0.3, j)
        rng_metal.randint(1, 255)
    
    num_metal_areas = rng_metal.randint(4, 8)
    print(f"   - Number of silver cloud areas: {num_metal_areas}")
    
    metal_areas = []
    for i in range(num_metal_areas):
        metal_radius = rng_metal.randint(10, 18)
        max_offset = planet_radius - metal_radius
        metal_x = center_x + rng_metal.randint(-max_offset, max_offset)
        metal_y = center_y + rng_metal.randint(-max_offset, max_offset)
        
        norm_x = (metal_x - center_x) / planet_radius
        norm_y = (metal_y - center_y) / planet_radius
        
        metal_areas.append({
            'id': i,
            'position': (norm_x, norm_y),
            'radius': metal_radius / planet_radius
        })
        
        print(f"   - Metal area {i}: pos=({norm_x:.3f}, {norm_y:.3f}), radius={metal_radius/planet_radius:.3f}")
    
    print()
    print("5. SURFACE SCRATCHES:")
    num_scratches = rng_metal.randint(40, 60)
    print(f"   - Number of scratches: {num_scratches}")
    
    print()
    print("=== TRANSLATION TO JSON FOR THREEJS ===")
    print(f"Planet data keys: {list(planet_data.keys())}")
    if 'surface' in planet_data:
        surface_keys = list(planet_data['surface'].keys())
        print(f"Surface data keys: {surface_keys}")

if __name__ == "__main__":
    test_metallic_planet()