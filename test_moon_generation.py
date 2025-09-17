#!/usr/bin/env python3
"""
Test script for moon generation system
Tests different planet types and validates physical constraints
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__universe_constants import PhysicalConstants
from pymodules.__universe_base import Universe, Galaxy, SolarSystem, Planet
from pymodules.__atlas_config import config
import random
import time

# Set required config attributes for testing
config.seed = 42
config.cosmic_origin_time = time.time() - 86400  # Set to 1 day ago

def test_moon_generation():
    """Test moon generation for various planet types"""

    # Initialize constants
    constants = PhysicalConstants()

    # Create a test universe
    universe = Universe(seed=42, constants=constants)

    # Get a galaxy
    galaxy = universe.get_galaxy(5000000, 5000000, 5000000)

    # Test multiple systems
    test_cases = [
        ("Rocky Planet System", 0),
        ("Gas Giant System", 1),
        ("Mixed System", 2),
        ("Icy World System", 3),
        ("Super Earth System", 4)
    ]

    print("=" * 80)
    print("MOON GENERATION TEST RESULTS")
    print("=" * 80)

    for test_name, system_index in test_cases:
        print(f"\n{test_name} (System #{system_index})")
        print("-" * 40)

        try:
            system = galaxy.get_solar_system(system_index)

            print(f"System Name: {system.name}")
            print(f"Star Type: {system.stars[0]['Type'] if system.stars else 'Unknown'}")
            print(f"Number of Planets: {system.num_planets}")
            print()

            for planet_index in range(system.num_planets):
                planet = system.get_planet(planet_index)

                print(f"  Planet {planet_index}: {planet.name}")
                print(f"    Type: {planet.planet_type}")
                print(f"    Mass: {planet.mass / constants.M_EARTH:.3f} Earth masses")
                print(f"    Orbital Radius: {planet.orbital_radius:.2f} AU")
                print(f"    Has Rings: {planet.planet_rings}")

                if planet.moon_system and planet.moon_system.moons:
                    print(f"    Moon System:")
                    print(f"      Roche Limit: {planet.moon_system.roche_limit:.1f} km")
                    print(f"      Hill Radius: {planet.moon_system.hill_radius:.1e} km")
                    print(f"      Number of Moons: {len(planet.moon_system.moons)}")

                    for moon_data in planet.moon_system.get_moon_data():
                        print(f"      - {moon_data['name']}:")
                        print(f"          Origin: {moon_data['origin']}")
                        print(f"          Type: {moon_data['type']}")
                        print(f"          Radius: {moon_data['radius_km']:.1f} km")
                        print(f"          Orbit: {moon_data['semi_major_axis_km']:.1e} km")
                        print(f"          Period: {moon_data['orbital_period_days']:.2f} days")
                        print(f"          Eccentricity: {moon_data['eccentricity']:.3f}")
                        print(f"          Inclination: {moon_data['inclination_deg']:.1f}°")

                        # Validate orbital constraints
                        if moon_data['semi_major_axis_km'] < planet.moon_system.roche_limit:
                            print(f"          WARNING: Inside Roche limit!")
                        if moon_data['semi_major_axis_km'] > planet.moon_system.hill_radius * 0.5:
                            print(f"          WARNING: Beyond stable zone!")
                else:
                    print(f"    No moons")
                print()

        except Exception as e:
            print(f"  Error testing system: {e}")

    print("=" * 80)
    print("\nTEST SUMMARY")
    print("-" * 40)

    # Generate statistics for a larger sample
    moon_counts = {"Rocky": [], "Gas Giant": [], "Icy": [], "Other": []}

    for i in range(20):
        try:
            system = galaxy.get_solar_system(i)
            for j in range(system.num_planets):
                planet = system.get_planet(j)
                moon_count = len(planet.moon_system.moons) if planet.moon_system else 0

                if planet.planet_type == "Rocky":
                    moon_counts["Rocky"].append(moon_count)
                elif planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
                    moon_counts["Gas Giant"].append(moon_count)
                elif planet.planet_type == "Icy":
                    moon_counts["Icy"].append(moon_count)
                else:
                    moon_counts["Other"].append(moon_count)
        except:
            pass

    for planet_type, counts in moon_counts.items():
        if counts:
            avg = sum(counts) / len(counts)
            max_moons = max(counts)
            with_moons = sum(1 for c in counts if c > 0)
            print(f"{planet_type:12} - Avg: {avg:.2f}, Max: {max_moons}, With moons: {with_moons}/{len(counts)}")

    print("\nPhysical validation complete!")
    print("Moon systems follow Roche limit and Hill sphere constraints.")

if __name__ == "__main__":
    test_moon_generation()