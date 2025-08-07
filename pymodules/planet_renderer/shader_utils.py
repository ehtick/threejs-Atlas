#!/usr/bin/env python3
"""
Shader Utilities Module
Utilities for generating shader uniforms and data for ThreeJS materials.
"""

from typing import Dict, Any, List


class ShaderUtils:
    """Utilities for shader and material data generation"""
    
    @staticmethod
    def generate_shader_uniforms(planet_type: str, shape_seed: int, 
                                angle_rotation: float, base_color: str, 
                                planet_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate shader uniforms for ThreeJS materials"""
        # Convert hex color to RGB
        base_rgb = ShaderUtils.hex_to_rgb(base_color)
        
        uniforms = {
            "time": {"value": 0.0, "type": "float"},
            "seed": {"value": shape_seed * 0.001, "type": "float"},
            "rotationAngle": {"value": angle_rotation, "type": "float"},
            "baseColor": {"value": base_rgb, "type": "vec3"},
            "planetType": {"value": planet_type, "type": "string"}
        }
        
        # Add planet-specific uniforms
        if planet_type == "Gas Giant" and "cloud_bands" in planet_data:
            bands_data = planet_data["cloud_bands"]
            uniforms.update({
                "numBands": {"value": bands_data["num_bands"], "type": "float"},
                "bandPositions": {"value": bands_data["positions"], "type": "float[]"},
                "bandWidths": {"value": bands_data["widths"], "type": "float[]"},
                "bandRotation": {"value": bands_data["rotation"], "type": "float"}
            })
        
        return uniforms
    
    @staticmethod
    def hex_to_rgb(hex_color: str) -> List[float]:
        """Convert hex color to normalized RGB values"""
        hex_color = hex_color.lstrip('#')
        return [int(hex_color[i:i+2], 16)/255.0 for i in (0, 2, 4)]