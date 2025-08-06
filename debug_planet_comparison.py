#!/usr/bin/env python3
"""
Debug script to compare what Pillow generates vs what Universal Renderer generates
for the specific planet: iapetusdin_lq-2442
"""

import json
import sys
import os
import math
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__atlas_config import config
from pymodules.__universe_base import Universe
from pymodules.__universe_constants import PhysicalConstants
from pymodules.__frontendAPI_planet_renderer import get_planet_rendering_data

def debug_planet_shapes():
    print("🔍 DEBUG: Pillow vs ThreeJS Shape Comparison")
    print("=" * 60)
    print("Planet: iapetusdin_lq-2442 (Icy)")
    print()
    
    # Get the specific planet
    coordinates = (1596377, 7795998, 5462285)
    system_index = 18
    planet_name = "iapetusdin_lq-2442"
    
    if not config.initialize():
        return False
        
    constants = PhysicalConstants()
    universe = Universe(config.seed, constants)
    galaxy = universe.get_galaxy(*coordinates)
    system = galaxy.get_solar_system(system_index)
    
    # Find planet
    target_planet = None
    planet_name_to_find = planet_name.replace("_", " ").lower()
    
    for index, planet_obj in system.planets.items():
        if planet_obj.name.replace("_", " ").lower() == planet_name_to_find:
            target_planet = planet_obj
            break
    
    if not target_planet:
        print("❌ Planet not found!")
        return False
    
    # Generate Universal Renderer data
    rendering_data = get_planet_rendering_data(target_planet)
    surface = rendering_data['surface_elements']
    
    print("🎯 EXACT PILLOW DATA vs THREEJS CURRENT IMPLEMENTATION")
    print("=" * 60)
    
    print("\n❄️ ICE CRYSTALS (Pillow generates EXACT positions):")
    print("   Pillow: 21 crystals at specific coordinates")
    crystals = surface['crystals']
    for i, crystal in enumerate(crystals[:5]):  # Show first 5
        pos = crystal['position']
        size = f"{crystal['length']:.3f}x{crystal['width']:.3f}"
        angle = crystal['angle']
        print(f"   Crystal {i+1}: pos=({pos[0]:.3f}, {pos[1]:.3f}), size={size}, angle={angle:.3f}")
    print(f"   ... and {len(crystals)-5} more crystals")
    
    print("\n   ThreeJS Current: Using generic noise() function")
    print("   ❌ PROBLEMA: noise(pos * 15.0) NO genera las mismas posiciones!")
    print()
    
    print("🕳️ ICE CRACKS (Pillow generates EXACT angles):")
    print("   Pillow: 4 cracks at specific angles")
    cracks = surface['cracks']
    for i, crack in enumerate(cracks):
        angle_deg = crack['angle'] * 180 / math.pi
        print(f"   Crack {i+1}: angle={crack['angle']:.3f} rad ({angle_deg:.1f}°)")
    
    print("\n   ThreeJS Current: Using generic sin/cos patterns")
    print("   ❌ PROBLEMA: abs(sin(pos.x * 30.0)) NO genera los mismos ángulos!")
    print()
    
    print("🧊 ICE CAPS (Pillow generates EXACT positions):")
    print("   Pillow: 2 ice caps at specific locations")
    ice_caps = surface['ice_caps']
    for i, cap in enumerate(ice_caps):
        pos = cap['position']
        radius = cap['radius']
        print(f"   Ice Cap {i+1}: pos=({pos[0]:.3f}, {pos[1]:.3f}), radius={radius:.3f}")
    
    print("\n   ThreeJS Current: Using polar calculation")
    print("   ❌ PROBLEMA: 1.0 - abs(pos.y) NO genera las mismas posiciones!")
    print()
    
    print("🌍 ABSTRACT LANDS (Pillow generates procedural polygons):")
    abstract_lands = surface['abstract_lands']
    for i, land in enumerate(abstract_lands):
        color = land['color']
        points = f"{land['points_min']}-{land['points_max']}"
        print(f"   Layer {i}: color=({color[0]:.3f},{color[1]:.3f},{color[2]:.3f}), points={points}")
        print(f"           seed='{land['seed'][:50]}...'")
    
    print("\n   ThreeJS Current: Using generic noise patterns")
    print("   ❌ PROBLEMA: noise(pos * 6.0) NO replica las formas poligonales!")
    print()
    
    print("💡 SOLUCIÓN REQUERIDA:")
    print("=" * 60)
    print("1. El shader debe usar las posiciones EXACTAS de los cristales")
    print("2. El shader debe usar los ángulos EXACTOS de las grietas")
    print("3. El shader debe usar las posiciones EXACTAS de los casquetes de hielo")
    print("4. El shader debe generar las formas abstractas usando las seeds exactas")
    print()
    print("🔧 IMPLEMENTACIÓN:")
    print("- En lugar de noise(), usar los arrays de datos de la API")
    print("- Usar for loops para iterar por cada cristal/grieta/casquete")
    print("- Comparar distance() con las posiciones exactas")
    print("- Aplicar los colores exactos de Pillow")
    print()
    
    print("🚨 PROBLEMA PRINCIPAL:")
    print("ThreeJS está usando algoritmos GENÉRICOS en lugar de los datos ESPECÍFICOS")
    print("que genera Pillow para este planeta exacto!")
    print()
    
    return True

if __name__ == "__main__":
    debug_planet_shapes()