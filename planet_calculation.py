#!/usr/bin/env python3

# Cálculo del número total de planetas en The Atlas
# Basado en los parámetros del código fuente

def calculate_total_planets():
    """
    Calcula el número total de planetas en The Atlas basado en los parámetros del código
    """
    
    # PARÁMETROS DESDE EL CÓDIGO:
    
    # 1. Universo Cube (desde __universe_base.py línea 22)
    max_coordinate = 10**7  # 10 million
    total_galaxies = max_coordinate**3  # 10^21 = 1 sextillion galaxies
    
    print(f"🌌 UNIVERSO CUBE")
    print(f"   Max coordinate: {max_coordinate:,}")
    print(f"   Total galaxies: {total_galaxies:e} ({total_galaxies:,})")
    print()
    
    # 2. Tipos de galaxias y sistemas (desde __universe_base.py líneas 71-82)
    galaxy_types = {
        "Dwarf": {
            "min_systems": 500,
            "max_systems": 10**7,  # 10 million
        },
        "Spiral": {
            "min_systems": 1500,
            "max_systems": 5 * 10**10,  # 50 billion
        },
        "Elliptical": {
            "min_systems": 5000,
            "max_systems": 10**11,  # 100 billion
        }
    }
    
    print(f"🌠 TIPOS DE GALAXIAS:")
    for gtype, data in galaxy_types.items():
        print(f"   {gtype}: {data['min_systems']:,} - {data['max_systems']:,} systems")
    print()
    
    # 3. Planetas por sistema (desde __universe_base.py línea 156)
    min_planets_per_system = 1
    max_planets_per_system = 6
    avg_planets_per_system = (min_planets_per_system + max_planets_per_system) / 2
    
    print(f"🪐 PLANETAS POR SISTEMA:")
    print(f"   Rango: {min_planets_per_system} - {max_planets_per_system} planetas")
    print(f"   Promedio: {avg_planets_per_system} planetas")
    print()
    
    # CÁLCULOS:
    
    # Escenario mínimo (todas galaxias Dwarf con mínimos sistemas y 1 planeta cada una)
    min_total_systems = total_galaxies * galaxy_types["Dwarf"]["min_systems"]
    min_total_planets = min_total_systems * min_planets_per_system
    
    # Escenario máximo (todas galaxias Elliptical con máximos sistemas y 6 planetas cada una)
    max_total_systems = total_galaxies * galaxy_types["Elliptical"]["max_systems"]
    max_total_planets = max_total_systems * max_planets_per_system
    
    # Escenario promedio estimado (mix de tipos con promedio de planetas)
    avg_systems_per_galaxy = (
        galaxy_types["Dwarf"]["max_systems"] + 
        galaxy_types["Spiral"]["max_systems"] + 
        galaxy_types["Elliptical"]["max_systems"]
    ) / 3
    avg_total_systems = total_galaxies * avg_systems_per_galaxy
    avg_total_planets = avg_total_systems * avg_planets_per_system
    
    print(f"📊 RESULTADOS:")
    print(f"   Escenario MÍNIMO:")
    print(f"     Total sistemas: {min_total_systems:e}")
    print(f"     Total planetas: {min_total_planets:e}")
    print()
    print(f"   Escenario MÁXIMO:")
    print(f"     Total sistemas: {max_total_systems:e}")
    print(f"     Total planetas: {max_total_planets:e}")
    print()
    print(f"   Escenario PROMEDIO:")
    print(f"     Sistemas promedio por galaxia: {avg_systems_per_galaxy:e}")
    print(f"     Total sistemas: {avg_total_systems:e}")
    print(f"     Total planetas: {avg_total_planets:e}")
    print()
    
    # COMPARACIÓN CON FAQ:
    print(f"🔍 COMPARACIÓN CON FAQ:")
    faq_claim = 3e32  # 3×10³² from FAQ
    print(f"   FAQ afirma: {faq_claim:e} planetas")
    print(f"   Código máximo: {max_total_planets:e} planetas")
    print(f"   Código promedio: {avg_total_planets:e} planetas")
    print()
    
    # ¿Es consistente?
    if max_total_planets >= faq_claim * 0.9 and max_total_planets <= faq_claim * 1.1:
        print("✅ CONSISTENTE: El cálculo del código coincide con el FAQ")
    elif max_total_planets > faq_claim:
        ratio = max_total_planets / faq_claim
        print(f"⚠️  DISCREPANCIA: El código permite {ratio:.1f}x más planetas que el FAQ")
    else:
        ratio = faq_claim / max_total_planets
        print(f"⚠️  DISCREPANCIA: El FAQ afirma {ratio:.1f}x más planetas que el código permite")
    
    return {
        "min_planets": min_total_planets,
        "max_planets": max_total_planets,
        "avg_planets": avg_total_planets,
        "faq_claim": faq_claim
    }

if __name__ == "__main__":
    calculate_total_planets()