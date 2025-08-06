#!/usr/bin/env python3
"""
Universal Planet Actions System
===============================
Sistema de acciones universales para renderizado dinámico de planetas.
Todas las operaciones de dibujo se traducen a acciones genéricas que 
Three.js puede interpretar sin necesidad de hardcodear tipos de planetas.

Este módulo define todas las acciones posibles que se pueden ejecutar
para dibujar cualquier tipo de planeta, permitiendo extensibilidad infinita.
"""

from typing import Dict, List, Any, Tuple, Optional
import math
import random


class UniversalPlanetActions:
    """
    Define todas las acciones universales disponibles para renderizar planetas.
    Cada acción es una operación atómica que Three.js puede ejecutar.
    """
    
    # Tipos de acciones disponibles
    ACTION_TYPES = {
        # Formas básicas
        "draw_circle": "Dibuja un círculo sólido o con gradiente",
        "draw_ellipse": "Dibuja una elipse con rotación opcional",
        "draw_polygon": "Dibuja un polígono de N lados",
        "draw_line": "Dibuja una línea con grosor variable",
        "draw_arc": "Dibuja un arco o curva",
        "draw_rectangle": "Dibuja un rectángulo con rotación",
        
        # Formas complejas
        "draw_triangle": "Dibuja un triángulo (para montañas)",
        "draw_star": "Dibuja una estrella de N puntas",
        "draw_crystal": "Dibuja un cristal con múltiples capas",
        "draw_crack": "Dibuja una grieta ramificada",
        
        # Efectos de superficie
        "apply_noise": "Aplica ruido Perlin a una región",
        "apply_gradient": "Aplica un gradiente radial o lineal",
        "apply_texture": "Aplica una textura procedural",
        "apply_blur": "Aplica desenfoque gaussiano",
        
        # Efectos atmosféricos
        "draw_cloud": "Dibuja una nube con transparencia",
        "draw_storm": "Dibuja un sistema de tormenta",
        "draw_aurora": "Dibuja aurora boreal/austral",
        "draw_fog": "Dibuja niebla o neblina",
        
        # Efectos de líquidos
        "draw_ocean": "Dibuja superficie oceánica con olas",
        "draw_river": "Dibuja un río con flujo",
        "draw_lake": "Dibuja un lago o mar interior",
        "draw_lava_flow": "Dibuja flujo de lava",
        
        # Efectos geológicos
        "draw_mountain": "Dibuja una montaña con sombras",
        "draw_crater": "Dibuja un cráter de impacto",
        "draw_canyon": "Dibuja un cañón o grieta profunda",
        "draw_volcano": "Dibuja un volcán activo o inactivo",
        
        # Efectos de vegetación
        "draw_forest": "Dibuja área boscosa",
        "draw_vegetation_cluster": "Dibuja grupo de vegetación",
        "draw_tree": "Dibuja árbol individual",
        
        # Efectos especiales
        "draw_glow": "Añade resplandor a una región",
        "draw_reflection": "Añade reflejo metálico o acuoso",
        "draw_shadow": "Añade sombra proyectada",
        "draw_particles": "Sistema de partículas genérico",
        
        # Bandas y patrones
        "draw_band": "Dibuja banda horizontal o vertical",
        "draw_stripe": "Dibuja franja con patrón",
        "draw_grid": "Dibuja patrón de cuadrícula",
        "draw_spiral": "Dibuja espiral",
        
        # Operaciones de composición
        "blend_multiply": "Multiplica colores (oscurecer)",
        "blend_add": "Suma colores (iluminar)",
        "blend_overlay": "Mezcla overlay",
        "blend_mask": "Aplica máscara de transparencia"
    }
    
    @staticmethod
    def create_action(action_type: str, **params) -> Dict[str, Any]:
        """
        Crea una acción universal con parámetros específicos.
        
        Args:
            action_type: Tipo de acción de ACTION_TYPES
            **params: Parámetros específicos de la acción
            
        Returns:
            Diccionario con la acción formateada para JSON
        """
        if action_type not in UniversalPlanetActions.ACTION_TYPES:
            raise ValueError(f"Unknown action type: {action_type}")
            
        # Estructura base de toda acción
        action = {
            "type": action_type,
            "params": params,
            "blend_mode": params.get("blend_mode", "normal"),
            "opacity": params.get("opacity", 1.0)
        }
        
        # Validar parámetros según el tipo de acción
        UniversalPlanetActions._validate_action_params(action_type, params)
        
        return action
    
    @staticmethod
    def _validate_action_params(action_type: str, params: Dict[str, Any]) -> None:
        """Valida que los parámetros sean correctos para cada tipo de acción."""
        
        # Definir parámetros requeridos para cada tipo
        required_params = {
            "draw_circle": ["center", "radius", "color"],
            "draw_ellipse": ["center", "rx", "ry", "color"],
            "draw_polygon": ["points", "color"],
            "draw_line": ["start", "end", "width", "color"],
            "draw_arc": ["center", "radius", "start_angle", "end_angle", "color"],
            "draw_triangle": ["p1", "p2", "p3", "color"],
            "draw_crystal": ["center", "radius", "layers", "points", "color"],
            "draw_cloud": ["center", "radius", "density", "color"],
            "draw_storm": ["center", "radius", "intensity", "rotation", "color"],
            "draw_mountain": ["base", "peak", "width", "color"],
            "draw_crater": ["center", "radius", "depth", "rim_height", "color"],
            "draw_band": ["y_position", "width", "color", "rotation"],
            "apply_noise": ["region", "frequency", "amplitude", "octaves"],
            "apply_gradient": ["type", "start", "end", "colors"],
            "draw_glow": ["center", "radius", "intensity", "color"],
            "draw_reflection": ["position", "size", "intensity", "angle"],
            "draw_particles": ["positions", "sizes", "colors", "velocities"]
        }
        
        if action_type in required_params:
            missing = [p for p in required_params[action_type] if p not in params]
            if missing:
                print(f"Warning: Missing parameters for {action_type}: {missing}")
    
    @staticmethod
    def normalize_coordinates(x: float, y: float, planet_radius: float) -> Tuple[float, float]:
        """
        Normaliza coordenadas de Pillow (0-400) a Three.js (-1 a 1).
        
        Args:
            x, y: Coordenadas en sistema Pillow (centro en 200,200)
            planet_radius: Radio del planeta en píxeles
            
        Returns:
            Tupla (nx, ny) con coordenadas normalizadas
        """
        center = 200  # Centro en sistema Pillow (imagen 400x400)
        nx = (x - center) / planet_radius
        ny = (y - center) / planet_radius
        return nx, ny
    
    @staticmethod
    def normalize_color(color: Tuple[int, int, int, int]) -> List[float]:
        """
        Normaliza color de RGB 0-255 a 0-1 para shaders.
        
        Args:
            color: Tupla RGBA con valores 0-255
            
        Returns:
            Lista con valores normalizados 0-1
        """
        return [c / 255.0 for c in color]


class PlanetActionTranslator:
    """
    Traduce operaciones de dibujo específicas de Pillow a acciones universales.
    """
    
    def __init__(self, planet_radius: float):
        self.planet_radius = planet_radius
        self.actions = []
    
    def add_cloud_band(self, y_position: float, width: float, 
                      color: Tuple[int, int, int, int], rotation: float = 0) -> None:
        """Añade una banda de nubes (Gas Giant)."""
        ny = (y_position - 200) / self.planet_radius
        nwidth = width / self.planet_radius
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_band",
            y_position=ny,
            width=nwidth,
            color=UniversalPlanetActions.normalize_color(color),
            rotation=rotation
        ))
    
    def add_mountain(self, x: float, y: float, width: float, height: float,
                    color: Tuple[int, int, int, int]) -> None:
        """Añade una montaña triangular (Rocky)."""
        nx, ny = UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius)
        nwidth = width / self.planet_radius
        nheight = height / self.planet_radius
        
        # Calcular los tres puntos del triángulo
        base_left = [nx - nwidth/2, ny + nheight/2]
        base_right = [nx + nwidth/2, ny + nheight/2]
        peak = [nx, ny - nheight/2]
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_triangle",
            p1=base_left,
            p2=base_right,
            p3=peak,
            color=UniversalPlanetActions.normalize_color(color)
        ))
    
    def add_crystal(self, x: float, y: float, radius: float, layers: int,
                   color: Tuple[int, int, int, int], angle: float = 0) -> None:
        """Añade un cristal con múltiples capas (Icy/Metallic)."""
        nx, ny = UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius)
        nradius = radius / self.planet_radius
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_crystal",
            center=[nx, ny],
            radius=nradius,
            layers=layers,
            points=6,  # Hexagonal por defecto
            color=UniversalPlanetActions.normalize_color(color),
            angle=angle
        ))
    
    def add_crater(self, x: float, y: float, radius: float,
                  color: Tuple[int, int, int, int]) -> None:
        """Añade un cráter de impacto."""
        nx, ny = UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius)
        nradius = radius / self.planet_radius
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_crater",
            center=[nx, ny],
            radius=nradius,
            depth=nradius * 0.3,  # Profundidad proporcional
            rim_height=nradius * 0.1,
            color=UniversalPlanetActions.normalize_color(color)
        ))
    
    def add_cloud(self, x: float, y: float, radius: float,
                 color: Tuple[int, int, int, int], blur: float = 5) -> None:
        """Añade una nube con desenfoque."""
        nx, ny = UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius)
        nradius = radius / self.planet_radius
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_cloud",
            center=[nx, ny],
            radius=nradius,
            density=0.7,
            color=UniversalPlanetActions.normalize_color(color),
            blur=blur
        ))
    
    def add_storm(self, x: float, y: float, radius: float, intensity: float,
                 color: Tuple[int, int, int, int]) -> None:
        """Añade un sistema de tormenta (Gas Giant)."""
        nx, ny = UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius)
        nradius = radius / self.planet_radius
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_storm",
            center=[nx, ny],
            radius=nradius,
            intensity=intensity,
            rotation=random.uniform(0, 2 * math.pi),
            color=UniversalPlanetActions.normalize_color(color)
        ))
    
    def add_abstract_land(self, points: List[Tuple[float, float]],
                         color: Tuple[int, int, int, int]) -> None:
        """Añade una masa de tierra abstracta."""
        normalized_points = [
            list(UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius))
            for x, y in points
        ]
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_polygon",
            points=normalized_points,
            color=UniversalPlanetActions.normalize_color(color)
        ))
    
    def add_lava_flow(self, path: List[Tuple[float, float]], width: float,
                     color: Tuple[int, int, int, int], glow: bool = True) -> None:
        """Añade un flujo de lava."""
        normalized_path = [
            list(UniversalPlanetActions.normalize_coordinates(x, y, self.planet_radius))
            for x, y in path
        ]
        
        # Dibujar el flujo como serie de líneas conectadas
        for i in range(len(normalized_path) - 1):
            self.actions.append(UniversalPlanetActions.create_action(
                "draw_line",
                start=normalized_path[i],
                end=normalized_path[i + 1],
                width=width / self.planet_radius,
                color=UniversalPlanetActions.normalize_color(color)
            ))
        
        # Añadir resplandor si está activo
        if glow:
            for point in normalized_path[::3]:  # Cada 3 puntos
                self.actions.append(UniversalPlanetActions.create_action(
                    "draw_glow",
                    center=point,
                    radius=(width * 2) / self.planet_radius,
                    intensity=0.5,
                    color=UniversalPlanetActions.normalize_color(color)
                ))
    
    def add_ocean_waves(self, region: Tuple[float, float, float, float],
                       wave_height: float, wave_frequency: float,
                       color: Tuple[int, int, int, int]) -> None:
        """Añade efecto de olas oceánicas."""
        x1, y1, x2, y2 = region
        nx1, ny1 = UniversalPlanetActions.normalize_coordinates(x1, y1, self.planet_radius)
        nx2, ny2 = UniversalPlanetActions.normalize_coordinates(x2, y2, self.planet_radius)
        
        self.actions.append(UniversalPlanetActions.create_action(
            "draw_ocean",
            region=[nx1, ny1, nx2, ny2],
            wave_height=wave_height / self.planet_radius,
            wave_frequency=wave_frequency,
            color=UniversalPlanetActions.normalize_color(color)
        ))
    
    def add_noise_texture(self, intensity: float = 0.5, frequency: float = 8.0) -> None:
        """Añade textura de ruido a toda la superficie."""
        self.actions.append(UniversalPlanetActions.create_action(
            "apply_noise",
            region=[-1, -1, 1, 1],  # Todo el planeta
            frequency=frequency,
            amplitude=intensity,
            octaves=4
        ))
    
    def add_gradient(self, gradient_type: str, colors: List[Tuple[int, int, int, int]]) -> None:
        """Añade un gradiente (radial o lineal)."""
        normalized_colors = [
            UniversalPlanetActions.normalize_color(c) for c in colors
        ]
        
        self.actions.append(UniversalPlanetActions.create_action(
            "apply_gradient",
            type=gradient_type,  # "radial" o "linear"
            start=[0, 0] if gradient_type == "radial" else [-1, 0],
            end=[1, 0] if gradient_type == "radial" else [1, 0],
            colors=normalized_colors
        ))
    
    def get_actions(self) -> List[Dict[str, Any]]:
        """Retorna todas las acciones acumuladas."""
        return self.actions
    
    def clear_actions(self) -> None:
        """Limpia la lista de acciones."""
        self.actions = []


def translate_pillow_to_actions(draw_function, planet_radius: float, 
                               seed: int, planet_name: str) -> List[Dict[str, Any]]:
    """
    Función principal que traduce cualquier función de dibujo Pillow a acciones universales.
    
    Args:
        draw_function: Función de dibujo específica del tipo de planeta
        planet_radius: Radio del planeta
        seed: Semilla para generación procedural
        planet_name: Nombre del planeta
        
    Returns:
        Lista de acciones universales para Three.js
    """
    translator = PlanetActionTranslator(planet_radius)
    
    # La función de dibujo debería usar el translator en lugar de PIL directamente
    # Este es el punto donde interceptamos las llamadas de dibujo
    
    # Por ahora retornamos acciones vacías - esto se integrará con el sistema existente
    return translator.get_actions()


# Ejemplo de cómo se usaría para traducir un planeta Rocky
def example_rocky_planet_actions(planet_radius: float, rng: random.Random) -> List[Dict[str, Any]]:
    """Ejemplo de traducción de un planeta Rocky a acciones universales."""
    translator = PlanetActionTranslator(planet_radius)
    
    # Añadir tierra abstracta
    num_lands = rng.randint(2, 4)
    for _ in range(num_lands):
        points = []
        num_points = rng.randint(6, 12)
        for i in range(num_points):
            angle = (2 * math.pi * i) / num_points + rng.uniform(-0.2, 0.2)
            dist = rng.uniform(0.5, 0.9) * planet_radius
            x = 200 + dist * math.cos(angle)
            y = 200 + dist * math.sin(angle)
            points.append((x, y))
        
        translator.add_abstract_land(points, (80, 80, 80, 100))
    
    # Añadir montañas
    num_mountains = rng.randint(5, 15)
    for _ in range(num_mountains):
        x = 200 + rng.uniform(-planet_radius, planet_radius)
        y = 200 + rng.uniform(-planet_radius, planet_radius)
        width = rng.uniform(10, 30)
        height = rng.uniform(15, 40)
        translator.add_mountain(x, y, width, height, (130, 130, 130, 255))
    
    # Añadir cráter
    if rng.random() < 0.7:
        x = 200 + rng.uniform(-planet_radius * 0.7, planet_radius * 0.7)
        y = 200 + rng.uniform(-planet_radius * 0.7, planet_radius * 0.7)
        radius = rng.uniform(20, 50)
        translator.add_crater(x, y, radius, (50, 50, 50, 200))
    
    # Añadir nubes
    num_clouds = rng.randint(3, 8)
    for _ in range(num_clouds):
        x = 200 + rng.uniform(-planet_radius, planet_radius)
        y = 200 + rng.uniform(-planet_radius, planet_radius)
        radius = rng.uniform(15, 35)
        translator.add_cloud(x, y, radius, (180, 180, 180, 100))
    
    # Añadir textura de ruido
    translator.add_noise_texture(intensity=0.3, frequency=12.0)
    
    return translator.get_actions()