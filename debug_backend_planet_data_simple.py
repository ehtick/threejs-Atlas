#!/usr/bin/env python3
"""
Debug Backend Planet Data - Versión Simplificada
=================================================
Script para ver exactamente qué datos enviaría el backend Python para un planeta.
Extrae directamente de la API de renderizado sin necesidad del objeto Universe.

Uso:
    python debug_backend_planet_data_simple.py "Dioneil GB-6056"
"""

import sys
import json
import random
import math
import time
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator
from pymodules.__atlas_config import config
from pymodules.__atlas_seedmaster import consistent_hash
from pymodules.__drawer_cplanet_type import get_planet_color_map

# Añadir atributos que faltan en config si no existen
if not hasattr(config, 'cosmic_origin_time'):
    config.cosmic_origin_time = time.time() - 1000000  # Tiempo arbitrario en el pasado
if not hasattr(config, 'seed'):
    config.seed = 12345  # Seed por defecto para testing

# Crear un planeta mock para testing
class MockPlanet:
    def __init__(self, name, planet_type="Oceanic"):
        self.name = name
        self.planet_type = planet_type
        self.atmosphere = "Standard"  # Usar string en lugar de dict
        self.life_forms = []
        self.mass = 5.972e24
        self.diameter = 12742
        self.density = 5.514
        self.gravity = 9.807
        self.orbital_radius = 149597870.7
        self.orbital_period_seconds = 365.25 * 24 * 3600
        self.orbital_speed = 29780
        self.axial_tilt = 23.44
        self.rotation_period_seconds = 24 * 3600
        self.surface_temperature = 288
        self.elements = ["Fe", "O", "Si", "Mg"]
        self.seed = consistent_hash(name)
        self.initial_angle_rotation = 0
        self.initial_orbital_angle = 0
        self.planet_rings = False

def main():
    if len(sys.argv) < 2:
        # Por defecto usar el planeta del ejemplo
        planet_name = "Dioneil GB-6056"
        planet_type = "Oceanic"
        print(f"ℹ️ Usando planeta por defecto: {planet_name} (tipo: {planet_type})")
    else:
        planet_name = sys.argv[1]
        planet_type = sys.argv[2] if len(sys.argv) > 2 else "Oceanic"
    
    print("=" * 80)
    print("🔍 DEBUG: DATOS DEL BACKEND PARA PLANETA (Simplificado)")
    print("=" * 80)
    
    # Crear planeta mock
    planet = MockPlanet(planet_name.replace(" ", "_"), planet_type)
    
    print(f"\n🌍 Planeta simulado: {planet.name}")
    print(f"  - Tipo: {planet.planet_type}")
    print(f"  - Diámetro: {planet.diameter}")
    print(f"  - Gravedad: {planet.gravity}")
    
    # Traducir a datos de renderizado
    translator = PlanetRenderingTranslator()
    rendering_data = translator.translate_planet_rendering(planet)
    
    print(f"\n📊 DATOS DE RENDERIZADO QUE SE ENVIARÍAN AL FRONTEND:")
    print("=" * 80)
    
    # Mostrar estructura principal
    print(f"\n1️⃣ INFORMACIÓN DEL PLANETA:")
    print(f"  - Nombre: {rendering_data['planet_info']['name']}")
    print(f"  - Tipo: {rendering_data['planet_info']['type']}")
    print(f"  - Color base: {rendering_data['planet_info']['base_color']}")
    print(f"  - Radio: {rendering_data['planet_info']['radius']}")
    
    print(f"\n2️⃣ SEMILLAS (para procedural):")
    print(f"  - shape_seed: {rendering_data['seeds']['shape_seed']}")
    print(f"  - config_seed: {rendering_data['seeds']['config_seed']}")
    print(f"  - planet_seed: {rendering_data['seeds']['planet_seed']}")
    
    print(f"\n3️⃣ ELEMENTOS DE SUPERFICIE:")
    surface = rendering_data.get('surface_elements', {})
    print(f"  - Tipo: {surface.get('type', 'unknown')}")
    
    if surface.get('type') == 'oceanic':
        print(f"\n  🌊 DATOS ESPECÍFICOS DE PLANETA OCEÁNICO:")
        print(f"  - Color base (debe ser azul): {rendering_data['planet_info']['base_color']}")
        
        if 'surface_rings' in surface:
            print(f"  - Anillos de superficie: color={surface['surface_rings']['color']}")
        
        if 'depths' in surface:
            print(f"  - Profundidades oceánicas: habilitadas={surface['depths'].get('enabled', False)}")
        
        if 'abstract_lands' in surface:
            print(f"\n  🏝️ TIERRAS ABSTRACTAS: {len(surface['abstract_lands'])} elementos")
            for i, land in enumerate(surface['abstract_lands']):
                print(f"    Land {i}:")
                print(f"      - Color RGBA: {land.get('color')}")
                print(f"      - Puntos: {land.get('points_min')}-{land.get('points_max')}")
                print(f"      - Segmentos: {land.get('seg_min')}-{land.get('seg_max')}")
        
        if 'green_patches' in surface:
            patches = surface['green_patches']
            print(f"\n  🌿 PARCHES VERDES/MARRONES: {len(patches)} parches")
            if patches:
                # Mostrar color del primer parche
                first_patch_color = patches[0].get('color', [])
                print(f"    Color de parches (RGBA): {[f'{c:.3f}' for c in first_patch_color]}")
                
                # Mostrar primeros 3 parches
                for i, patch in enumerate(patches[:3]):
                    pos = patch.get('position', [0, 0])
                    print(f"    Parche {i}:")
                    print(f"      - Posición normalizada: [{pos[0]:.3f}, {pos[1]:.3f}]")
                    print(f"      - Tamaño: {patch.get('size', 0):.3f}")
                    print(f"      - Lados del polígono: {patch.get('sides', 0)}")
                
                if len(patches) > 3:
                    print(f"    ... y {len(patches) - 3} parches más")
        
        if 'clouds' in surface:
            clouds = surface['clouds']
            print(f"\n  ☁️ NUBES: {len(clouds)} nubes")
            for i, cloud in enumerate(clouds):
                pos = cloud.get('position', [0, 0])
                print(f"    Nube {i}:")
                print(f"      - Posición: [{pos[0]:.3f}, {pos[1]:.3f}]")
                print(f"      - Radio: {cloud.get('radius', 0):.3f}")
                print(f"      - Color: {cloud.get('color', [])}")
    
    # Análisis del problema
    print(f"\n❗ ANÁLISIS DEL PROBLEMA DE RENDERIZADO:")
    print("=" * 80)
    
    if surface.get('type') == 'oceanic':
        print("🔍 El backend Python envía:")
        print(f"  1. Color base azul: {rendering_data['planet_info']['base_color']}")
        print(f"  2. {len(surface.get('green_patches', []))} parches verdes/marrones en posiciones específicas")
        print(f"  3. {len(surface.get('abstract_lands', []))} formas de tierra azul oscura")
        print(f"  4. {len(surface.get('clouds', []))} nubes color sandybrown")
        
        print("\n⚠️ El problema actual:")
        print("  - OceanWaves.tsx IGNORA estos datos y genera su propio ruido fractal")
        print("  - Usa colores hardcodeados (verde para tierra) en lugar de los datos de Python")
        print("  - No renderiza los green_patches en sus posiciones correctas")
        print("  - No renderiza los abstract_lands como formas específicas")
        
        print("\n✅ La solución correcta sería:")
        print("  - Renderizar cada green_patch como un polígono en su posición exacta")
        print("  - Renderizar cada abstract_land con su forma específica")
        print("  - Usar el color base azul (#0000FF) como fondo oceánico")
        print("  - NO generar contenido procedural adicional")
    
    # Guardar en archivo para análisis
    output_file = f"debug_planet_{planet.name}_{planet.planet_type}.json"
    with open(output_file, 'w') as f:
        json.dump(rendering_data, f, indent=2)
    
    print(f"\n💾 Datos completos guardados en: {output_file}")
    print("=" * 80)

if __name__ == "__main__":
    main()