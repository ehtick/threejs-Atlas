#!/usr/bin/env python3
"""
Debug script for moon generation system
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__universe_constants import PhysicalConstants
from pymodules.__universe_base import Universe
from pymodules.__atlas_config import config
import time

# Set required config attributes for testing
config.seed = 42
config.cosmic_origin_time = time.time() - 86400  # Set to 1 day ago

def debug_moon_generation():
    """Debug moon generation"""

    # Initialize constants
    constants = PhysicalConstants()

    # Create a test universe
    universe = Universe(seed=42, constants=constants)

    # Get a galaxy
    galaxy = universe.get_galaxy(5000000, 5000000, 5000000)

    print("=" * 80)
    print("MOON GENERATION DEBUG")
    print("=" * 80)

    # Test first 5 systems
    for system_idx in range(5):
        print(f"\nSystem {system_idx}:")
        system = galaxy.get_solar_system(system_idx)

        for planet_idx in range(system.num_planets):
            planet = system.get_planet(planet_idx)
            moon_sys = planet.moon_system

            print(f"  Planet {planet_idx} ({planet.planet_type}):")
            print(f"    Mass: {planet.mass:.2e} kg ({planet.mass/constants.M_EARTH:.3f} Earth)")
            print(f"    Orbital Radius: {planet.orbital_radius:.2f} AU")

            if moon_sys:
                print(f"    Roche Limit: {moon_sys.roche_limit:.2e} km")
                print(f"    Hill Radius: {moon_sys.hill_radius:.2e} km")
                print(f"    Stable Zone: {moon_sys.hill_radius * 0.4 - moon_sys.roche_limit * 1.05:.2e} km")
                print(f"    Planet Radius: {planet.diameter * 500:.2e} km")

                # Check moon generation conditions
                planet_radius = planet.diameter * 500
                stable_zone = moon_sys.hill_radius * 0.4 - moon_sys.roche_limit * 1.05

                print(f"    Should have moons?")
                print(f"      - Mass > 1e22: {planet.mass > 1e22}")
                print(f"      - Stable zone > 5*radius: {stable_zone > 5 * planet_radius}")
                print(f"      - Number of moons: {len(moon_sys.moons)}")

                if moon_sys.moons:
                    for moon in moon_sys.moons:
                        print(f"      Moon: {moon.name}")
                        print(f"        Origin: {moon.origin.value}")
                        print(f"        Semi-major axis: {moon.semi_major_axis:.2e} km")

if __name__ == "__main__":
    debug_moon_generation()