#!/usr/bin/env python3
"""
Test random seed issue in moon generation
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import random
import math

# Test what random.random() returns with different seeds
print("Testing random.random() with different seeds:")
print("=" * 50)

for seed in range(1, 11):
    random.seed(seed)

    # Simulate the should_have_moons check for Gas Giant
    mass = 1.90e+27  # Jupiter mass
    mass_factor = min(1.0, math.log10(max(1, mass / 1e23)))
    base_probability = 0.95
    final_probability = base_probability * mass_factor

    rand_value = random.random()
    would_have_moons = rand_value < final_probability

    print(f"Seed {seed:2}: random() = {rand_value:.4f}, prob = {final_probability:.4f}, moons? {would_have_moons}")

print("\n" + "=" * 50)
print("Result: Moon generation should work with most seeds!")
print(f"Expected success rate: {final_probability*100:.1f}%")