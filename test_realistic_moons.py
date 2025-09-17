#!/usr/bin/env python3
"""
Test realistic moon generation with manually created planets
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

def create_test_planet(planet_type, mass_earth, orbital_radius_au, constants, seed_offset=0):
    """Create a test planet with specific parameters"""
    planet = Planet(seed=42 + seed_offset, name=f"Test_{planet_type}", constants=constants)

    # Override key properties for testing
    planet.planet_type = planet_type
    planet.mass = mass_earth * constants.M_EARTH
    planet.orbital_radius = orbital_radius_au
    planet.orbital_radius_m = orbital_radius_au * 1.496e11

    # Set reasonable density based on type
    if planet_type in ["Gas Giant", "Frozen Gas Giant"]:
        planet.density = 1300  # kg/m³
        planet.diameter = 100000  # km
    elif planet_type in ["Rocky", "Super Earth"]:
        planet.density = 5500  # kg/m³
        planet.diameter = 12742 * (mass_earth ** 0.27)  # km, rough scaling
    else:
        planet.density = 3000  # kg/m³
        planet.diameter = 12742 * (mass_earth ** 0.33)  # km

    return planet

def test_realistic_moons():
    """Test moon generation with realistic planet configurations"""

    constants = PhysicalConstants()

    test_cases = [
        # (name, planet_type, mass_earth, orbital_radius_au, star_mass_solar)
        ("Earth-like", "Rocky", 1.0, 1.0, 1.0),
        ("Mars-like", "Rocky", 0.107, 1.52, 1.0),
        ("Super-Earth", "Super Earth", 5.0, 0.5, 1.0),
        ("Mini-Neptune", "Sub Earth", 10.0, 2.0, 1.0),
        ("Jupiter-like", "Gas Giant", 317.8, 5.2, 1.0),
        ("Saturn-like", "Gas Giant", 95.2, 9.5, 1.0),
        ("Ice Giant", "Frozen Gas Giant", 14.5, 20.0, 1.0),
        ("Hot Jupiter", "Gas Giant", 200.0, 0.05, 1.0),
        ("Distant Rocky", "Rocky", 2.0, 30.0, 1.0),
        ("Red Dwarf Planet", "Rocky", 0.5, 0.1, 0.2),
    ]

    print("=" * 100)
    print("REALISTIC MOON GENERATION TEST")
    print("=" * 100)

    for idx, (test_name, planet_type, mass_earth, orbital_radius_au, star_mass_solar) in enumerate(test_cases):
        print(f"\n{test_name}:")
        print("-" * 50)

        # Create planet with unique seed
        planet = create_test_planet(planet_type, mass_earth, orbital_radius_au, constants, seed_offset=idx*100)

        # Generate moon system
        star_mass = star_mass_solar * constants.M_SUN
        moon_system = MoonSystem(planet, star_mass)

        # Display results
        print(f"  Planet Type: {planet_type}")
        print(f"  Mass: {mass_earth:.2f} Earth masses")
        print(f"  Orbital Radius: {orbital_radius_au:.2f} AU")
        print(f"  Star Mass: {star_mass_solar:.2f} Solar masses")

        print(f"\n  Moon System Parameters:")
        print(f"    Roche Limit: {moon_system.roche_limit:.2e} km")
        print(f"    Hill Radius: {moon_system.hill_radius:.2e} km")
        print(f"    Hill/Roche Ratio: {moon_system.hill_radius / moon_system.roche_limit:.2f}")

        if moon_system.moons:
            print(f"\n  Moons ({len(moon_system.moons)}):")
            for moon_data in moon_system.get_moon_data():
                print(f"    {moon_data['name']}:")
                print(f"      Origin: {moon_data['origin']}")
                print(f"      Type: {moon_data['type']}")
                print(f"      Radius: {moon_data['radius_km']:.1f} km")
                print(f"      Semi-major axis: {moon_data['semi_major_axis_km']:.2e} km")
                print(f"      Orbital period: {moon_data['orbital_period_days']:.2f} days")
                print(f"      Eccentricity: {moon_data['eccentricity']:.3f}")
                print(f"      Inclination: {moon_data['inclination_deg']:.1f}°")

                # Validate stability
                stability_check = ""
                if moon_data['semi_major_axis_km'] < moon_system.roche_limit * 1.05:
                    stability_check = " [WARNING: Too close to Roche limit]"
                elif moon_data['semi_major_axis_km'] > moon_system.hill_radius * 0.4:
                    stability_check = " [WARNING: Beyond stable zone]"
                if stability_check:
                    print(f"      {stability_check}")
        else:
            print(f"\n  No moons generated")

            # Explain why
            planet_radius_km = planet.diameter / 2
            if planet.mass < 1e22:
                print(f"    Reason: Planet mass too small ({planet.mass:.2e} kg < 1e22 kg)")
            elif moon_system.hill_radius < 10 * planet_radius_km:
                print(f"    Reason: Hill sphere too small relative to planet")
                print(f"           (Hill: {moon_system.hill_radius:.2e} km < 10 * radius: {10*planet_radius_km:.2e} km)")
            elif moon_system.hill_radius < 2 * moon_system.roche_limit:
                print(f"    Reason: No stable zone between Roche and Hill")
                print(f"           (Hill: {moon_system.hill_radius:.2e} km < 2 * Roche: {2*moon_system.roche_limit:.2e} km)")
            else:
                print(f"    Reason: Random probability (didn't generate moons this time)")

    print("\n" + "=" * 100)
    print("TEST COMPLETE")
    print("=" * 100)

if __name__ == "__main__":
    test_realistic_moons()