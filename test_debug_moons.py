#!/usr/bin/env python3
"""
Debug moon generation probabilities
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

def test_debug():
    """Debug moon generation"""

    constants = PhysicalConstants()

    # Create Jupiter-like planet
    planet = Planet(seed=1, name="Test_Jupiter", constants=constants)
    planet.planet_type = "Gas Giant"
    planet.mass = 317.8 * constants.M_EARTH
    planet.orbital_radius = 5.2
    planet.orbital_radius_m = 5.2 * 1.496e11
    planet.density = 1300
    planet.diameter = 142984  # km

    print("Planet Properties:")
    print(f"  Type: {planet.planet_type}")
    print(f"  Mass: {planet.mass / constants.M_EARTH:.2f} Earth masses")
    print()

    # Test moon system creation
    star_mass = constants.M_SUN
    moon_system = MoonSystem(planet, star_mass)

    print("Moon System Analysis:")
    print(f"  Roche Limit: {moon_system.roche_limit:.2e} km")
    print(f"  Hill Radius: {moon_system.hill_radius:.2e} km")
    print(f"  Hill/Roche Ratio: {moon_system.hill_radius / moon_system.roche_limit:.2f}")
    print()

    # Test _should_have_moons conditions
    planet_radius_km = planet.diameter / 2
    print("Should Have Moons Checks:")
    print(f"  Mass > 1e22 kg: {planet.mass > 1e22} (mass = {planet.mass:.2e})")
    print(f"  Hill > 10*radius: {moon_system.hill_radius > 10 * planet_radius_km}")
    print(f"    (Hill = {moon_system.hill_radius:.2e}, 10*radius = {10*planet_radius_km:.2e})")
    print(f"  Hill > 2*Roche: {moon_system.hill_radius > 2 * moon_system.roche_limit}")
    print(f"    (Hill = {moon_system.hill_radius:.2e}, 2*Roche = {2*moon_system.roche_limit:.2e})")
    print()

    # Test probability calculation
    import math
    mass_factor = min(1.0, math.log10(max(1, planet.mass / 1e23)))
    base_probability = 0.95  # For Gas Giant
    final_probability = base_probability * mass_factor

    print("Probability Calculation:")
    print(f"  Mass factor: {mass_factor:.4f}")
    print(f"  Base probability (Gas Giant): {base_probability}")
    print(f"  Final probability: {final_probability:.4f}")
    print()

    # Test moon origin determination manually
    print("Testing Moon Origin Determination:")
    planet_mass_earth = planet.mass / constants.M_EARTH
    print(f"  Planet mass in Earth masses: {planet_mass_earth:.2f}")

    # Simulate random seeds
    for seed in range(1, 11):
        random.seed(seed)
        origins = []

        # Co-formation logic for gas giants
        if planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
            num_regular = random.randint(2, min(8, int(planet_mass_earth / 10)))
            print(f"  Seed {seed}: Would generate {num_regular} regular moons")

        # Giant impact probability
        if 0.1 < planet_mass_earth < 100:
            if random.random() < 0.2:
                print(f"  Seed {seed}: Would generate giant impact moon")

        # Capture probability
        capture_probability = min(0.5, planet_mass_earth / 300)
        if random.random() < capture_probability:
            max_captured = min(5, int(planet_mass_earth / 50))
            num_captured = random.randint(1, max(1, max_captured))
            print(f"  Seed {seed}: Would capture {num_captured} moon(s) (prob={capture_probability:.3f})")

if __name__ == "__main__":
    test_debug()