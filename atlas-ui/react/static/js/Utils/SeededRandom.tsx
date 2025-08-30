
/**
 * Generador de números aleatorios con semilla para efectos consistentes
 * Esta clase garantiza que los efectos sean reproducibles usando seeds de Python
 */

export class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  uniform(min: number, max: number): number {
    return min + this.random() * (max - min);
  }

  randint(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  /**
   * Genera una posición aleatoria en la superficie de una esfera
   */
  spherePosition(radius: number): {x: number, y: number, z: number} {
    const theta = this.random() * Math.PI * 2;
    const phi = Math.acos(this.random() * 2 - 1);
    
    return {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi)
    };
  }

  /**
   * Genera un color con variación basada en un color base
   */
  colorVariation(baseColor: {r: number, g: number, b: number}, variation: number = 0.4): {r: number, g: number, b: number} {
    return {
      r: baseColor.r * (0.8 + this.random() * variation),
      g: baseColor.g * (0.8 + this.random() * variation),
      b: baseColor.b * (0.8 + this.random() * variation)
    };
  }
}