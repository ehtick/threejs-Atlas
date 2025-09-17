#!/usr/bin/env python3
"""
Test moon generation with many different seeds
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__universe_constants import PhysicalConstants
from pymodules.__universe_base import Planet
from pymodules.__universe_moons import MoonSystem
from pymodules.__atlas_config import config
import time
import random

# Set required config attributes for testing
config.seed = 42
config.cosmic_origin_time = time.time() - 86400

def test_many_seeds():
    """Test moon generation with various seeds to find working examples"""

    constants = PhysicalConstants()

    # Test with Jupiter-like planet (should have high probability of moons)
    results = {"with_moons": 0, "without_moons": 0}
    moon_counts = []

    print("Testing 100 Jupiter-like planets with different seeds...")
    print("=" * 60)

    for seed in range(1, 101):
        # Create Jupiter-like planet
        planet = Planet(seed=seed, name=f"Jupiter_{seed}", constants=constants)
        planet.planet_type = "Gas Giant"
        planet.mass = 317.8 * constants.M_EARTH
        planet.orbital_radius = 5.2
        planet.orbital_radius_m = 5.2 * 1.496e11
        planet.density = 1300
        planet.diameter = 142984  # km (actual Jupiter diameter)

        # Generate moon system
        star_mass = constants.M_SUN
        moon_system = MoonSystem(planet, star_mass)

        if moon_system.moons:
            results["with_moons"] += 1
            moon_counts.append(len(moon_system.moons))
            print(f"Seed {seed:3}: {len(moon_system.moons)} moons generated")

            # Show first successful case in detail
            if results["with_moons"] == 1:
                print("\n  FIRST SUCCESSFUL MOON GENERATION:")
                print("  " + "-" * 40)
                for moon_data in moon_system.get_moon_data():
                    print(f"  {moon_data['name']}:")
                    print(f"    Origin: {moon_data['origin']}")
                    print(f"    Type: {moon_data['type']}")
                    print(f"    Radius: {moon_data['radius_km']:.1f} km")
                    print(f"    Orbit: {moon_data['semi_major_axis_km']:.2e} km")
                    print(f"    Period: {moon_data['orbital_period_days']:.2f} days")
                print("  " + "-" * 40)
                print()
        else:
            results["without_moons"] += 1

    print("\n" + "=" * 60)
    print("SUMMARY:")
    print(f"  Planets with moons: {results['with_moons']}/100 ({results['with_moons']}%)")
    print(f"  Planets without moons: {results['without_moons']}/100")
    if moon_counts:
        print(f"  Average moons when present: {sum(moon_counts)/len(moon_counts):.2f}")
        print(f"  Max moons: {max(moon_counts)}")
        print(f"  Min moons: {min(moon_counts)}")

    # Now test rocky planets
    print("\n\nTesting 100 Earth-like planets...")
    print("=" * 60)

    rocky_results = {"with_moons": 0, "without_moons": 0}
    rocky_moon_counts = []

    for seed in range(1, 101):
        # Create Earth-like planet
        planet = Planet(seed=seed * 1000, name=f"Earth_{seed}", constants=constants)
        planet.planet_type = "Rocky"
        planet.mass = constants.M_EARTH
        planet.orbital_radius = 1.0
        planet.orbital_radius_m = 1.496e11
        planet.density = 5500
        planet.diameter = 12742

        # Generate moon system
        star_mass = constants.M_SUN
        moon_system = MoonSystem(planet, star_mass)

        if moon_system.moons:
            rocky_results["with_moons"] += 1
            rocky_moon_counts.append(len(moon_system.moons))
            print(f"Seed {seed:3}: {len(moon_system.moons)} moon(s) generated")
        else:
            rocky_results["without_moons"] += 1

    print("\n" + "=" * 60)
    print("EARTH-LIKE SUMMARY:")
    print(f"  Planets with moons: {rocky_results['with_moons']}/100 ({rocky_results['with_moons']}%)")
    print(f"  Planets without moons: {rocky_results['without_moons']}/100")
    if rocky_moon_counts:
        print(f"  Average moons when present: {sum(rocky_moon_counts)/len(rocky_moon_counts):.2f}")
        print(f"  Max moons: {max(rocky_moon_counts)}")
        print(f"  Min moons: {min(rocky_moon_counts)}")

if __name__ == "__main__":
    test_many_seeds()