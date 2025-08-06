#!/usr/bin/env python3
"""
Debug Backend Planet Data
=========================
Script para ver exactamente qué datos envía el backend Python para un planeta específico.
Usa la URL stargate para obtener el planeta y muestra todos los datos de renderizado.

Uso:
    python debug_backend_planet_data.py "http://localhost/stargate/Y29vcmRpbmF0ZXM9MCwwLDAmc3lzdGVtPTAmcGxhbmV0PWRpb25laWxfZ2ItNjA1NiZwYWdlPTE="
"""

import sys
import base64
import json
from urllib.parse import parse_qs
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator
from pymodules.__universe_base import Universe
from pymodules.__atlas_config import config

def decode_stargate_url(url):
    """Decodifica una URL stargate para obtener los parámetros"""
    # Extraer el código base64 de la URL
    if 'stargate/' in url:
        b64_part = url.split('stargate/')[1].split('&')[0].split('#')[0]
    else:
        print("❌ URL no válida. Debe contener 'stargate/'")
        return None
    
    # Decodificar base64
    try:
        decoded = base64.b64decode(b64_part).decode('utf-8')
        params = parse_qs(decoded)
        
        # Extraer parámetros relevantes
        result = {
            'coordinates': params.get('coordinates', ['0,0,0'])[0],
            'system': int(params.get('system', [0])[0]),
            'planet': params.get('planet', [None])[0],
            'page': int(params.get('page', [1])[0])
        }
        
        return result
    except Exception as e:
        print(f"❌ Error decodificando stargate: {e}")
        return None

def get_planet_from_universe(planet_name, coordinates, system_index):
    """Obtiene el planeta del universo"""
    try:
        # Parsear coordenadas
        x, y, z = map(int, coordinates.split(','))
        
        # Crear universo con seed y constants
        from pymodules.__universe_constants import PhysicalConstants
        constants = PhysicalConstants()
        universe = Universe(seed=config.seed, constants=constants)
        
        # Obtener el sector
        sector = universe.get_sector_at_coordinates(x, y, z)
        if not sector:
            print(f"❌ No se encontró sector en coordenadas {x},{y},{z}")
            return None
        
        # Obtener el sistema
        if system_index >= len(sector.systems):
            print(f"❌ Sistema {system_index} no existe en el sector")
            return None
        
        system = sector.systems[system_index]
        
        # Buscar el planeta por nombre
        for planet in system.planets:
            if planet.name.replace('_', ' ').lower() == planet_name.replace('_', ' ').lower():
                return planet
        
        print(f"❌ Planeta '{planet_name}' no encontrado en el sistema")
        return None
        
    except Exception as e:
        print(f"❌ Error obteniendo planeta: {e}")
        return None

def main():
    if len(sys.argv) < 2:
        print("Uso: python debug_backend_planet_data.py <stargate_url>")
        print('Ejemplo: python debug_backend_planet_data.py "http://localhost/stargate/..."')
        sys.exit(1)
    
    url = sys.argv[1]
    
    print("=" * 80)
    print("🔍 DEBUG: DATOS DEL BACKEND PARA PLANETA")
    print("=" * 80)
    
    # Decodificar URL
    params = decode_stargate_url(url)
    if not params:
        sys.exit(1)
    
    print(f"\n📍 Parámetros decodificados:")
    print(f"  - Coordenadas: {params['coordinates']}")
    print(f"  - Sistema: {params['system']}")
    print(f"  - Planeta: {params['planet']}")
    print(f"  - Página: {params['page']}")
    
    # Obtener el planeta
    planet = get_planet_from_universe(
        params['planet'], 
        params['coordinates'],
        params['system']
    )
    
    if not planet:
        sys.exit(1)
    
    print(f"\n🌍 Planeta encontrado: {planet.name}")
    print(f"  - Tipo: {planet.planet_type}")
    print(f"  - Diámetro: {planet.diameter}")
    print(f"  - Gravedad: {planet.gravity}")
    
    # Traducir a datos de renderizado
    translator = PlanetRenderingTranslator()
    rendering_data = translator.translate_planet_rendering(planet)
    
    print(f"\n📊 DATOS DE RENDERIZADO ENVIADOS AL FRONTEND:")
    print("=" * 80)
    
    # Mostrar estructura principal
    print(f"\n1️⃣ INFORMACIÓN DEL PLANETA:")
    print(json.dumps(rendering_data['planet_info'], indent=2))
    
    print(f"\n2️⃣ SEMILLAS (para procedural):")
    print(json.dumps(rendering_data['seeds'], indent=2))
    
    print(f"\n3️⃣ ELEMENTOS DE SUPERFICIE:")
    surface = rendering_data.get('surface_elements', {})
    print(f"  - Tipo: {surface.get('type', 'unknown')}")
    
    if surface.get('type') == 'oceanic':
        print(f"\n  🌊 DATOS ESPECÍFICOS DE PLANETA OCEÁNICO:")
        print(f"  - Anillos de superficie: {surface.get('surface_rings')}")
        print(f"  - Profundidades habilitadas: {surface.get('depths', {}).get('enabled')}")
        
        print(f"\n  🏝️ TIERRAS ABSTRACTAS:")
        for i, land in enumerate(surface.get('abstract_lands', [])):
            print(f"    Land {i}: color={land.get('color')}, points={land.get('points_min')}-{land.get('points_max')}")
        
        print(f"\n  🌿 PARCHES VERDES: {len(surface.get('green_patches', []))} parches")
        for i, patch in enumerate(surface.get('green_patches', [])[:3]):  # Mostrar solo los primeros 3
            print(f"    Parche {i}: pos={patch.get('position')}, size={patch.get('size'):.3f}, color={[f'{c:.2f}' for c in patch.get('color', [])]}")
        if len(surface.get('green_patches', [])) > 3:
            print(f"    ... y {len(surface.get('green_patches', [])) - 3} más")
        
        print(f"\n  ☁️ NUBES: {len(surface.get('clouds', []))} nubes")
        for i, cloud in enumerate(surface.get('clouds', [])):
            print(f"    Nube {i}: pos={cloud.get('position')}, radius={cloud.get('radius'):.3f}")
    else:
        print(json.dumps(surface, indent=2))
    
    print(f"\n4️⃣ ATMÓSFERA:")
    print(json.dumps(rendering_data.get('atmosphere'), indent=2))
    
    print(f"\n5️⃣ ANILLOS:")
    print(json.dumps(rendering_data.get('rings'), indent=2))
    
    # Guardar en archivo para análisis
    output_file = f"debug_planet_{planet.name}_{planet.planet_type}.json"
    with open(output_file, 'w') as f:
        json.dump(rendering_data, f, indent=2)
    
    print(f"\n💾 Datos completos guardados en: {output_file}")
    print("=" * 80)

if __name__ == "__main__":
    main()