/**
 * Arecibo Message Generator - Canvas con colores
 * Genera un canvas de 73x23 píxeles con representación procedural por tipo de vida
 * Colores: 1=blanco(números), 2=lila(elementos), 3=verde(nucleótidos), 4=azul(ADN)
 */

export interface AreciboConfig {
  lifeForm: string;
  planetName: string;
  width: number;
  height: number;
}

export interface AreciboMessage {
  bitmap: number[];
  colorMap: number[]; // 0=black, 1=white, 2=purple, 3=green, 4=blue, etc.
  width: number;
  height: number;
  lifeForm: string;
  planetName: string;
}

export class AreciboGenerator {
  private static readonly WIDTH = 23;
  private static readonly HEIGHT = 73;
  
  // Colores del mensaje
  private static readonly COLORS = {
    BLACK: 0,
    WHITE: 1,    // Números
    PURPLE: 2,   // Elementos
    GREEN: 3,    // Nucleótidos
    BLUE: 4,     // ADN/Estructura genética
    ORANGE: 5    // Forma de vida
  };

  public static generate(config: AreciboConfig): AreciboMessage {
    // Canvas en blanco - 73x23 píxeles
    const bitmap = new Array(this.WIDTH * this.HEIGHT).fill(0);
    const colorMap = new Array(this.WIDTH * this.HEIGHT).fill(0);
    
    // Sección 1: Números 1-10 (filas 0-3) - COLOR BLANCO
    this.drawNumbers(bitmap, colorMap);
    
    // Línea en blanco (fila 4)
    this.drawBlankLine(bitmap, colorMap, 4);
    
    // Sección 2: Elementos químicos (filas 5-9) - COLOR LILA
    this.drawChemicalElements(bitmap, colorMap, config.lifeForm);
    
    // Línea en blanco (fila 10)
    this.drawBlankLine(bitmap, colorMap, 10);
    
    // Línea en blanco (fila 11)
    this.drawBlankLine(bitmap, colorMap, 11);
    
    // Sección 3: Nucleótidos (filas 12-27) - COLOR VERDE
    this.drawNucleotides(bitmap, colorMap, config.lifeForm);
    
    return {
      bitmap,
      colorMap,
      width: this.WIDTH,
      height: this.HEIGHT,
      lifeForm: config.lifeForm,
      planetName: config.planetName
    };
  }

  private static setPixel(bitmap: number[], colorMap: number[], col: number, row: number, value: number = 1, color: number = 1): void {
    if (col >= 0 && col < this.WIDTH && row >= 0 && row < this.HEIGHT) {
      const index = row * this.WIDTH + col;
      bitmap[index] = value;
      if (value > 0) {
        colorMap[index] = color;
      }
    }
  }

  /**
   * SECCIÓN 1: Números 1-10
   * Filas: 0-3, Color: BLANCO
   */
  private static drawNumbers(bitmap: number[], colorMap: number[]): void {
    const columnPositions = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    for (let i = 0; i < 10; i++) {
      const number = i + 1;
      const col = columnPositions[i];
      const binary = number.toString(2);
      
      for (let bit = 0; bit < binary.length && bit < 4; bit++) {
        const row = 3 - bit;
        const bitValue = parseInt(binary[binary.length - 1 - bit]);
        this.setPixel(bitmap, colorMap, col, row, bitValue, this.COLORS.WHITE);
      }
    }
  }

  /**
   * SECCIÓN 2: Elementos químicos
   * Filas: 5-9, Color: LILA
   */
  private static drawChemicalElements(bitmap: number[], colorMap: number[], lifeForm: string): void {
    const elements = this.getElementsForLifeForm(lifeForm);
    const category = this.getLifeCategory(lifeForm);
    
    // Dibujar según categoría de vida con color lila
    switch (category) {
      case "carbon-based":
        this.drawCarbonBasedElements(bitmap, colorMap, elements);
        break;
      case "silicon-based":
        this.drawSiliconBasedElements(bitmap, colorMap, elements);
        break;
      case "robotic":
        this.drawRoboticElements(bitmap, colorMap, elements);
        break;
      case "gaseous":
        this.drawGaseousElements(bitmap, colorMap, elements);
        break;
      case "energy":
        this.drawEnergyElements(bitmap, colorMap, elements);
        break;
      case "divine":
        this.drawDivineElements(bitmap, colorMap, elements);
        break;
      default:
        this.drawCarbonBasedElements(bitmap, colorMap, elements);
    }
  }

  /**
   * SECCIÓN 3: Nucleótidos/Información genética
   * Filas: 12-27, Color: VERDE
   * Cada tipo de vida tiene su representación ESPECÍFICA y COHERENTE
   */
  private static drawNucleotides(bitmap: number[], colorMap: number[], lifeForm: string): void {
    const category = this.getLifeCategory(lifeForm);
    
    switch (category) {
      case "carbon-based":
        this.drawCarbonBasedGenetics(bitmap, colorMap, lifeForm);
        break;
      case "silicon-based":
        this.drawSiliconBasedGenetics(bitmap, colorMap);
        break;
      case "robotic":
        this.drawRoboticInformation(bitmap, colorMap);
        break;
      case "gaseous":
        this.drawGaseousInformation(bitmap, colorMap);
        break;
      case "energy":
        this.drawEnergyInformation(bitmap, colorMap);
        break;
      case "divine":
        this.drawDivineInformation(bitmap, colorMap);
        break;
      default:
        this.drawCarbonBasedGenetics(bitmap, colorMap, lifeForm);
    }
  }

  /**
   * VIDA BASADA EN CARBONO - ADN/RNA clásico
   * FIEL al mensaje de Arecibo original con márgenes correctos
   */
  private static drawCarbonBasedGenetics(bitmap: number[], colorMap: number[], lifeForm: string): void {
    const elements = this.getElementsForLifeForm(lifeForm);
    const bases = this.getNitrogenBases(lifeForm);
    
    // ESTRUCTURA EXACTA DEL ARECIBO CON MÁRGENES:
    // Siguiendo el orden: H, C, N, O, P (como en la sección de elementos)
    
    // Filas 12-15: Fórmulas químicas de los 4 nucleótidos (deoxyribose + bases)
    this.drawNucleotideFormulas(bitmap, colorMap, bases, elements, lifeForm);
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Grupos fosfato y azúcares
    this.drawSugarPhosphateBackbone(bitmap, colorMap, elements);
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Número de nucleótidos en el genoma
    this.drawGenomeSize(bitmap, colorMap, elements, lifeForm);
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Bordes de la doble hélice (dejando centro libre)
    this.drawDNAHelixBorders(bitmap, colorMap);
  }

  /**
   * VIDA BASADA EN SILICIO - Información cristalina análoga a nucleótidos
   */
  private static drawSiliconBasedGenetics(bitmap: number[], colorMap: number[]): void {
    // Análogos cristalinos de nucleótidos - 4 tipos de unidades de sílice
    
    // Filas 12-15: Cuatro tipos de tetraedros Si-O
    const siliconUnits = [
      { col: 4, bonds: [1,1,0,4,0] },   // SiO4 básico
      { col: 8, bonds: [2,0,1,3,0] },   // SiO3N (nitrogenado) 
      { col: 12, bonds: [1,1,2,2,0] },  // SiO2N2 (más nitrógeno)
      { col: 16, bonds: [0,1,0,3,1] }   // SiO3P (con fósforo)
    ];
    
    // Dibujar cada unidad cristalina vertical
    for (const unit of siliconUnits) {
      this.drawChemicalFormula(bitmap, colorMap, unit.col, 12, unit.bonds);
    }
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Enlaces tetraédricos Si-O-Si (esqueleto cristalino)
    const centerCol = 11;
    for (let row = 17; row <= 20; row++) {
      // Patrón tetraédrico centrado
      this.setPixel(bitmap, colorMap, centerCol, row, 1, this.COLORS.GREEN);
      
      // Enlaces direccionales
      const offset = (row - 17) % 2 === 0 ? 3 : 4;
      this.setPixel(bitmap, colorMap, centerCol - offset, row, 1, this.COLORS.GREEN);
      this.setPixel(bitmap, colorMap, centerCol + offset, row, 1, this.COLORS.GREEN);
      
      // Conectores entre tetraedros
      if (row % 2 === 1) {
        this.setPixel(bitmap, colorMap, 6, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, 16, row, 1, this.COLORS.GREEN);
      }
    }
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Tamaño del cristal genético (complejidad de la red)
    for (let row = 22; row <= 25; row++) {
      const layer = row - 22; // 0-3
      // Capas crecientes que representan la complejidad 3D
      for (let col = 9 - layer; col <= 13 + layer; col++) {
        if ((col + row) % 2 === 0) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Bordes de la estructura cristalina (dejando centro libre)
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 4, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 18, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
  }

  /**
   * ENTIDADES ROBÓTICAS - Información digital análoga a nucleótidos
   */
  private static drawRoboticInformation(bitmap: number[], colorMap: number[]): void {
    // Códigos digitales básicos - equivalentes a "nucleótidos digitales"
    
    // Filas 12-15: Cuatro códigos básicos binarios (como ATGC digital)
    const digitalCodes = [
      { col: 4, code: [0,0] },  // 00 = código A
      { col: 8, code: [0,1] },  // 01 = código T  
      { col: 12, code: [1,0] }, // 10 = código G
      { col: 16, code: [1,1] }  // 11 = código C
    ];
    
    // Dibujar códigos básicos con patrones verticales
    for (const dc of digitalCodes) {
      // Cabecera del código
      this.setPixel(bitmap, colorMap, dc.col, 12, 1, this.COLORS.GREEN);
      this.setPixel(bitmap, colorMap, dc.col + 1, 12, 1, this.COLORS.GREEN);
      
      // Representación binaria del código (filas 13-14)
      for (let i = 0; i < dc.code.length; i++) {
        if (dc.code[i] === 1) {
          this.setPixel(bitmap, colorMap, dc.col + i, 13 + i, 1, this.COLORS.GREEN);
        }
      }
      
      // Marcador de fin
      this.setPixel(bitmap, colorMap, dc.col, 15, 1, this.COLORS.GREEN);
    }
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Backbone digital (buses de datos)
    for (let row = 17; row <= 20; row++) {
      // Bus central de datos
      for (let col = 9; col <= 13; col++) {
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
      }
      
      // Conectores a periféricos
      if (row % 2 === 0) {
        this.setPixel(bitmap, colorMap, 6, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, 7, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, 15, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, 16, row, 1, this.COLORS.GREEN);
      }
    }
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Tamaño del programa/genoma digital
    for (let row = 22; row <= 25; row++) {
      const complexity = row - 22; // 0-3
      // Barras de complejidad creciente
      for (let col = 8; col <= 8 + complexity * 3; col++) {
        if (col <= 14) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Límites del espacio de memoria (dejando centro libre)
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 4, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 18, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
  }

  /**
   * GAS CONSCIENTE - Estados cuánticos análogos a nucleótidos
   */
  private static drawGaseousInformation(bitmap: number[], colorMap: number[]): void {
    // Estados cuánticos básicos - como "nucleótidos cuánticos"
    
    // Filas 12-15: Cuatro estados cuánticos básicos |00⟩, |01⟩, |10⟩, |11⟩
    const quantumStates = [
      { col: 4, state: [0,0] },  // |00⟩
      { col: 8, state: [0,1] },  // |01⟩
      { col: 12, state: [1,0] }, // |10⟩
      { col: 16, state: [1,1] }  // |11⟩
    ];
    
    for (const qs of quantumStates) {
      // Representación del estado cuántico
      this.setPixel(bitmap, colorMap, qs.col, 12, 1, this.COLORS.GREEN);
      this.setPixel(bitmap, colorMap, qs.col + 1, 12, 1, this.COLORS.GREEN);
      
      // Superposición (ambos bits en diferentes filas)
      for (let i = 0; i < qs.state.length; i++) {
        if (qs.state[i] === 1) {
          this.setPixel(bitmap, colorMap, qs.col + i, 13 + i, 1, this.COLORS.GREEN);
        }
      }
      
      // Estado base
      this.setPixel(bitmap, colorMap, qs.col, 15, 1, this.COLORS.GREEN);
    }
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Entrelazamiento cuántico (backbone)
    for (let row = 17; row <= 20; row++) {
      // Centro de entrelazamiento
      this.setPixel(bitmap, colorMap, 11, row, 1, this.COLORS.GREEN);
      
      // Estados entrelazados
      const spread = (row - 17) + 2; // 2-5
      this.setPixel(bitmap, colorMap, 11 - spread, row, 1, this.COLORS.GREEN);
      this.setPixel(bitmap, colorMap, 11 + spread, row, 1, this.COLORS.GREEN);
      
      // Conectores cuánticos
      if (row % 2 === 1) {
        for (let col = 11 - spread; col <= 11 + spread; col += 2) {
          if (col >= 6 && col <= 16) {
            this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
          }
        }
      }
    }
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Complejidad cuántica del sistema
    for (let row = 22; row <= 25; row++) {
      const coherence = row - 22; // 0-3
      // Estados de coherencia creciente
      for (let col = 9; col <= 13; col++) {
        if ((col + row + coherence) % 3 === 0) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Límites del campo cuántico (dejando centro libre)
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 4, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 18, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
  }

  /**
   * ENTIDAD DE ENERGÍA - Patrones ondulatorios análogos a nucleótidos
   */
  private static drawEnergyInformation(bitmap: number[], colorMap: number[]): void {
    // Cuatro frecuencias básicas - "nucleótidos energéticos"
    
    // Filas 12-15: Cuatro frecuencias fundamentales
    const energyStates = [
      { col: 4, freq: 1 },   // Baja frecuencia
      { col: 8, freq: 2 },   // Media baja
      { col: 12, freq: 3 },  // Media alta  
      { col: 16, freq: 4 }   // Alta frecuencia
    ];
    
    for (const es of energyStates) {
      // Patrón de frecuencia vertical
      for (let row = 12; row <= 15; row++) {
        const phase = (row - 12) * Math.PI / es.freq;
        if (Math.sin(phase) > 0) {
          this.setPixel(bitmap, colorMap, es.col, row, 1, this.COLORS.GREEN);
          if (es.freq > 2) {
            this.setPixel(bitmap, colorMap, es.col + 1, row, 1, this.COLORS.GREEN);
          }
        }
      }
    }
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Campo de energía (backbone)
    for (let row = 17; row <= 20; row++) {
      // Campo central
      this.setPixel(bitmap, colorMap, 11, row, 1, this.COLORS.GREEN);
      
      // Radiación hacia los lados
      const intensity = row - 17; // 0-3
      for (let i = 1; i <= 2 + intensity; i++) {
        if (11 - i >= 6) this.setPixel(bitmap, colorMap, 11 - i, row, 1, this.COLORS.GREEN);
        if (11 + i <= 16) this.setPixel(bitmap, colorMap, 11 + i, row, 1, this.COLORS.GREEN);
      }
    }
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Densidad energética total
    for (let row = 22; row <= 25; row++) {
      const level = row - 22; // 0-3
      // Barras de densidad creciente
      for (let col = 10 - level; col <= 12 + level; col++) {
        if (col >= 6 && col <= 16) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Límites del campo energético (dejando centro libre)
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 4, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 18, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
  }

  /**
   * ENTIDAD DIVINA - Geometría sagrada análoga a nucleótidos
   */
  private static drawDivineInformation(bitmap: number[], colorMap: number[]): void {
    // Cuatro constantes cósmicas fundamentales - "nucleótidos divinos"
    
    // Filas 12-15: Pi, Phi, e, raíz de 2 (representadas geométricamente)
    const divineConstants = [
      { col: 4, pattern: [1,1,0,0] },  // Pi ≈ 3.14
      { col: 8, pattern: [1,1,1,0] },  // Phi ≈ 1.618  
      { col: 12, pattern: [1,0,1,1] }, // e ≈ 2.718
      { col: 16, pattern: [1,0,1,0] }  // √2 ≈ 1.414
    ];
    
    for (const dc of divineConstants) {
      for (let i = 0; i < dc.pattern.length; i++) {
        if (dc.pattern[i] === 1) {
          this.setPixel(bitmap, colorMap, dc.col, 12 + i, 1, this.COLORS.GREEN);
          this.setPixel(bitmap, colorMap, dc.col + 1, 12 + i, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 16: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 16);
    
    // Filas 17-20: Matriz de armonía universal (backbone)
    for (let row = 17; row <= 20; row++) {
      // Centro de armonía
      this.setPixel(bitmap, colorMap, 11, row, 1, this.COLORS.GREEN);
      
      // Simetría sagrada
      const harmony = (row - 17) + 1; // 1-4
      for (let i = 1; i <= harmony; i++) {
        if (11 - i * 2 >= 6) this.setPixel(bitmap, colorMap, 11 - i * 2, row, 1, this.COLORS.GREEN);
        if (11 + i * 2 <= 16) this.setPixel(bitmap, colorMap, 11 + i * 2, row, 1, this.COLORS.GREEN);
      }
    }
    
    // Fila 21: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 21);
    
    // Filas 22-25: Complejidad cósmica (secuencia de Fibonacci simplificada)
    const fibLevels = [1, 2, 3, 5]; // Primeros 4 números de Fibonacci
    
    for (let row = 22; row <= 25; row++) {
      const level = fibLevels[row - 22];
      // Barras que crecen según Fibonacci
      for (let col = 11 - level; col <= 11 + level; col++) {
        if (col >= 6 && col <= 16) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        }
      }
    }
    
    // Fila 26: Línea en blanco
    this.drawBlankLine(bitmap, colorMap, 26);
    
    // Fila 27: Límites del cosmos (dejando centro libre para la creación)
    this.setPixel(bitmap, colorMap, 2, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 20, 27, 1, this.COLORS.GREEN);
  }

  /**
   * FUNCIONES ESPECÍFICAS PARA VIDA BASADA EN CARBONO (ADN/RNA)
   * Siguen la estructura exacta del mensaje de Arecibo original
   */

  /**
   * Dibuja las fórmulas químicas de los nucleótidos siguiendo el orden H-C-N-O-P
   * PROCEDURAL: varía según el tipo específico de vida basada en carbono
   */
  private static drawNucleotideFormulas(bitmap: number[], colorMap: number[], bases: string[], elements: number[], lifeForm: string): void {
    const nucleotideData = this.getNucleotideVariation(lifeForm, elements);
    
    // Dibujar las bases nitrogenadas específicas para este tipo de vida
    for (let i = 0; i < Math.min(nucleotideData.bases.length, 4); i++) {
      const base = nucleotideData.bases[i];
      const col = 3 + (i * 4); // Columnas 3, 7, 11, 15
      
      // Dibujar fórmula química de la base (H, C, N, O, P)
      for (let elementIdx = 0; elementIdx < base.formula.length; elementIdx++) {
        const count = base.formula[elementIdx];
        const row = 12 + elementIdx;
        
        if (count > 0) {
          this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
          // Representar cantidades con píxeles adicionales
          if (count >= 4) {
            this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
          }
          if (count >= 7) {
            this.setPixel(bitmap, colorMap, col - 1, row, 1, this.COLORS.GREEN);
          }
        }
      }
    }
    
    // Azúcar (deoxyribose/ribose) - varía según si usa ADN o ARN
    const sugarFormula = nucleotideData.usesRNA ? [9,5,0,4,0] : [7,5,0,1,0]; // Ribosa vs Deoxyribosa
    this.drawChemicalFormula(bitmap, colorMap, 1, 12, sugarFormula);
  }

  /**
   * Dibuja el esqueleto azúcar-fosfato del ADN
   */
  private static drawSugarPhosphateBackbone(bitmap: number[], colorMap: number[], elements: number[]): void {
    // Patrón del grupo fosfato PO4 (filas 17-20)
    // Posición central para el fósforo
    this.setPixel(bitmap, colorMap, 11, 18, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 11, 19, 1, this.COLORS.GREEN);
    
    // Cuatro oxígenos alrededor del fósforo
    this.setPixel(bitmap, colorMap, 10, 17, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 12, 17, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 10, 20, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 12, 20, 1, this.COLORS.GREEN);
    
    // Enlaces a los azúcares (con márgenes apropiados)
    this.setPixel(bitmap, colorMap, 6, 18, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 7, 18, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 15, 18, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 16, 18, 1, this.COLORS.GREEN);
  }

  /**
   * Dibuja el número total de nucleótidos en el genoma (PROCEDURAL)
   */
  private static drawGenomeSize(bitmap: number[], colorMap: number[], elements: number[], lifeForm: string): void {
    const nucleotideData = this.getNucleotideVariation(lifeForm, elements);
    const genomeSizeData = this.getGenomeSizeData(lifeForm, elements);
    
    // Representar complejidad del genoma visualmente
    // Cada fila representa un aspecto diferente de la complejidad genética
    
    // Fila 22: Genes codificantes (barras proporcionales al número de genes)
    const geneCount = Math.floor(genomeSizeData.genes / 1000); // En miles
    for (let col = 8; col <= Math.min(14, 8 + geneCount); col++) {
      this.setPixel(bitmap, colorMap, col, 22, 1, this.COLORS.GREEN);
    }
    
    // Fila 23: Contenido GC (patrón que refleja el ratio GC/AT)
    const gcPattern = genomeSizeData.gcContent;
    for (let col = 9; col <= 13; col++) {
      if (gcPattern === "high" && col % 2 === 1) {
        this.setPixel(bitmap, colorMap, col, 23, 1, this.COLORS.GREEN);
      } else if (gcPattern === "moderate" && (col === 10 || col === 12)) {
        this.setPixel(bitmap, colorMap, col, 23, 1, this.COLORS.GREEN);
      } else if (gcPattern === "variable") {
        this.setPixel(bitmap, colorMap, col, 23, 1, this.COLORS.GREEN);
      }
    }
    
    // Fila 24: Cromosomas/plásmidos
    const chromosomes = genomeSizeData.chromosomes;
    for (let i = 0; i < Math.min(chromosomes, 7); i++) {
      this.setPixel(bitmap, colorMap, 8 + i, 24, 1, this.COLORS.GREEN);
    }
    
    // Fila 25: Complejidad total (tamaño del genoma en megabases)
    const totalSize = Math.floor(Math.log10(genomeSizeData.totalBases / 1000000)); // Log10 de Mb
    for (let col = 9; col <= Math.min(15, 9 + totalSize); col++) {
      this.setPixel(bitmap, colorMap, col, 25, 1, this.COLORS.GREEN);
    }
    
    // Marcadores laterales
    this.setPixel(bitmap, colorMap, 5, 22, 1, this.COLORS.GREEN); // Genes
    this.setPixel(bitmap, colorMap, 17, 25, 1, this.COLORS.GREEN); // Tamaño total
  }

  /**
   * Dibuja solo los bordes de la doble hélice, dejando el centro libre
   */
  private static drawDNAHelixBorders(bitmap: number[], colorMap: number[]): void {
    // EXACTAMENTE como el Arecibo original: solo bordes externos
    // Dejando el área central (columnas 6-16) completamente libre para la doble hélice
    
    // Borde izquierdo (columnas 3-4)
    this.setPixel(bitmap, colorMap, 3, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 4, 27, 1, this.COLORS.GREEN);
    
    // Borde derecho (columnas 18-19) 
    this.setPixel(bitmap, colorMap, 18, 27, 1, this.COLORS.GREEN);
    this.setPixel(bitmap, colorMap, 19, 27, 1, this.COLORS.GREEN);
    
    // CENTRO VACÍO (columnas 5-17) - Aquí va la representación de la doble hélice
  }

  /**
   * Dibuja una fórmula química en formato vertical
   */
  private static drawChemicalFormula(bitmap: number[], colorMap: number[], col: number, startRow: number, formula: number[]): void {
    // formula = [H, C, N, O, P] counts
    for (let i = 0; i < formula.length; i++) {
      const count = formula[i];
      const row = startRow + i;
      
      if (count > 0) {
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        // Para cantidades mayores, usar píxeles adicionales
        if (count >= 3) {
          this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        }
        if (count >= 5) {
          this.setPixel(bitmap, colorMap, col - 1, row, 1, this.COLORS.GREEN);
        }
      }
    }
  }


  /**
   * Dibuja un bloque compacto de píxeles
   */
  private static drawCompactBlock(bitmap: number[], colorMap: number[], startCol: number, startRow: number, width: number, height: number): void {
    for (let row = startRow; row < startRow + height; row++) {
      for (let col = startCol; col < startCol + width; col++) {
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
      }
    }
  }


  /**
   * Obtiene las bases complementarias para el ADN de doble cadena
   */
  private static getComplementaryBases(bases: string[]): string[] {
    const complements: {[key: string]: string} = {
      'A': 'T', 'T': 'A',
      'G': 'C', 'C': 'G',
      'U': 'A', // RNA
      'X': 'X'  // Bases exóticas se complementan consigo mismas
    };
    
    return bases.map(base => complements[base] || 'X');
  }

  /**
   * Obtiene el elemento equivalente al fosfato según la forma de vida
   */
  private static getPhosphateEquivalent(elements: number[]): number {
    // Buscar P (15) o el último elemento de la lista como equivalente
    return elements.includes(15) ? 15 : elements[elements.length - 1];
  }




  // Funciones auxiliares para elementos y categorías (versiones con color)
  
  private static drawCarbonBasedElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    const centerCol = 11;
    const startRow = 5;
    
    this.drawElementBinary(bitmap, colorMap, elements[0], 9, startRow + 4, 4);
    this.drawElementBinary(bitmap, colorMap, elements[1], 11, startRow + 3, 5);
    this.setPixel(bitmap, colorMap, 10, startRow + 1, 1, this.COLORS.PURPLE);
    this.setPixel(bitmap, colorMap, 12, startRow + 1, 1, this.COLORS.PURPLE);
    this.drawElementBinary(bitmap, colorMap, elements[2], 13, startRow + 4, 4);
    this.drawElementBinary(bitmap, colorMap, elements[3], 7, startRow + 3, 4);
    this.drawElementBinary(bitmap, colorMap, elements[4], 15, startRow + 2, 5);
  }

  private static drawSiliconBasedElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    // Implementación similar pero con colores
    const centerCol = 11;
    const startRow = 5;
    
    for (let i = 0; i < elements.length && i < 5; i++) {
      const angles = [0, Math.PI/2, Math.PI, 3*Math.PI/2, Math.PI/4];
      const radius = 3 + (i % 2);
      const col = Math.floor(centerCol + radius * Math.cos(angles[i]));
      const rowOffset = Math.floor(radius * Math.sin(angles[i]) * 0.5);
      
      this.drawElementBinary(bitmap, colorMap, elements[i], col, startRow + 2 + rowOffset, 4);
      
      if (i > 0) {
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.PURPLE);
      }
    }
  }

  private static drawRoboticElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    const startRow = 5;
    const positions = [5, 8, 11, 14, 17];
    
    for (let i = 0; i < elements.length && i < 5; i++) {
      const col = positions[i];
      this.drawElementBinary(bitmap, colorMap, elements[i], col, startRow + 2, 3);
      
      if (i > 0) {
        for (let c = positions[i-1] + 1; c < col; c++) {
          this.setPixel(bitmap, colorMap, c, startRow + 4, 1, this.COLORS.PURPLE);
        }
      }
      
      this.setPixel(bitmap, colorMap, col, startRow + 4, 1, this.COLORS.PURPLE);
      this.setPixel(bitmap, colorMap, col, startRow + 1, 1, this.COLORS.PURPLE);
    }
  }

  private static drawGaseousElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    const centerCol = 11;
    const startRow = 5;
    
    for (let i = 0; i < elements.length && i < 5; i++) {
      const spread = 2 + i;
      const col = centerCol + (i % 2 === 0 ? -spread : spread);
      const rowOffset = Math.floor(i / 2);
      
      this.drawElementBinary(bitmap, colorMap, elements[i], col, startRow + rowOffset, 3);
    }
  }

  private static drawEnergyElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    const centerCol = 11;
    const startRow = 5;
    
    for (let i = 0; i < elements.length && i < 5; i++) {
      const phase = i * Math.PI / 2;
      const amplitude = 3;
      
      for (let step = 0; step < 5; step++) {
        const col = centerCol + Math.floor(amplitude * Math.sin(phase + step * 0.5)) - 2 + i;
        const row = startRow + step;
        
        if (col >= 0 && col < 23) {
          const binary = elements[i].toString(2);
          if (step < binary.length) {
            const bitValue = parseInt(binary[binary.length - 1 - step]);
            this.setPixel(bitmap, colorMap, col, row, bitValue, this.COLORS.PURPLE);
          }
        }
      }
    }
  }

  private static drawDivineElements(bitmap: number[], colorMap: number[], elements: number[]): void {
    const centerCol = 11;
    const centerRow = 7;
    
    for (let i = 0; i < elements.length && i < 5; i++) {
      const angle = (i * 2 * Math.PI) / 5;
      const innerRadius = 2;
      const outerRadius = 4;
      
      const innerCol = Math.floor(centerCol + innerRadius * Math.cos(angle));
      const innerRow = Math.floor(centerRow + innerRadius * Math.sin(angle) * 0.5);
      
      const outerCol = Math.floor(centerCol + outerRadius * Math.cos(angle));
      const outerRow = Math.floor(centerRow + outerRadius * Math.sin(angle) * 0.5);
      
      this.drawElementBinary(bitmap, colorMap, elements[i], innerCol, innerRow, 2);
      this.drawElementBinary(bitmap, colorMap, elements[i], outerCol, outerRow, 2);
      
      this.drawLine(bitmap, colorMap, innerCol, innerRow, outerCol, outerRow, this.COLORS.PURPLE);
      this.drawLine(bitmap, colorMap, centerCol, centerRow, innerCol, innerRow, this.COLORS.PURPLE);
    }
  }

  private static drawElementBinary(bitmap: number[], colorMap: number[], value: number, col: number, startRow: number, maxBits: number): void {
    const binary = value.toString(2);
    
    for (let bit = 0; bit < Math.min(binary.length, maxBits); bit++) {
      const row = startRow - bit;
      const bitValue = parseInt(binary[binary.length - 1 - bit]);
      if (row >= 5 && row <= 9) {
        this.setPixel(bitmap, colorMap, col, row, bitValue, this.COLORS.PURPLE);
      }
    }
  }

  private static drawLine(bitmap: number[], colorMap: number[], x1: number, y1: number, x2: number, y2: number, color: number): void {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;

    let x = x1;
    let y = y1;

    while (true) {
      if (x >= 0 && x < 23 && y >= 5 && y <= 9) {
        this.setPixel(bitmap, colorMap, x, y, 1, color);
      }

      if (x === x2 && y === y2) break;

      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }
  }

  private static drawBinaryNumber(bitmap: number[], colorMap: number[], value: number, startCol: number, row: number, color: number): void {
    const binary = value.toString(2);
    const maxLength = Math.min(binary.length, 23 - startCol);
    
    for (let bit = 0; bit < maxLength; bit++) {
      const bitValue = parseInt(binary[bit]);
      this.setPixel(bitmap, colorMap, startCol + bit, row, bitValue, color);
    }
  }

  private static drawBlankLine(bitmap: number[], colorMap: number[], row: number): void {
    for (let col = 0; col < this.WIDTH; col++) {
      this.setPixel(bitmap, colorMap, col, row, 0);
    }
  }

  // Funciones de datos (sin cambios)
  
  private static getLifeCategory(lifeForm: string): string {
    const categories: { [key: string]: string } = {
      "Bacteria": "carbon-based",
      "Vegetation": "carbon-based", 
      "Animal Life": "carbon-based",
      "Intelligent Life": "carbon-based",
      "Vegetable Animals": "carbon-based",
      "Silicon-Based Life": "silicon-based",
      "Robotic Entities": "robotic",
      "Conscious Gas": "gaseous",
      "Non-Physical Entity": "energy",
      "Have I just found God?": "divine"
    };
    
    return categories[lifeForm] || "carbon-based";
  }

  private static getElementsForLifeForm(lifeForm: string): number[] {
    const elementSets: { [key: string]: number[] } = {
      "Bacteria": [1, 6, 7, 8, 16],
      "Vegetation": [1, 6, 7, 8, 12],
      "Animal Life": [1, 6, 7, 8, 26],
      "Intelligent Life": [1, 6, 7, 8, 15],
      "Vegetable Animals": [1, 6, 7, 8, 11],
      "Silicon-Based Life": [1, 14, 8, 13, 20],
      "Robotic Entities": [14, 32, 31, 49, 73],
      "Conscious Gas": [2, 10, 18, 36, 54],
      "Non-Physical Entity": [1, 2, 3, 4, 6],
      "Have I just found God?": [115, 118, 119, 120, 126]
    };
    
    return elementSets[lifeForm] || [1, 6, 7, 8, 15];
  }

  private static getNitrogenBases(lifeForm: string): string[] {
    const baseSets: { [key: string]: string[] } = {
      "Bacteria": ["A", "T", "G", "C"],         // DNA clásico
      "Vegetation": ["A", "U", "G", "C"],       // RNA predominante
      "Animal Life": ["A", "T", "G", "C"],      // DNA clásico
      "Intelligent Life": ["A", "T", "G", "C"], // DNA clásico
      "Vegetable Animals": ["A", "T", "G", "U"], // Híbrido DNA/RNA
      "Silicon-Based Life": ["X", "X", "X", "X"], // Bases exóticas
      "Robotic Entities": ["X", "X", "X", "X"],   // Bases artificiales
      "Conscious Gas": ["X", "X", "X", "X"],      // Estados cuánticos
      "Non-Physical Entity": ["X", "X", "X", "X"], // Patrones energéticos
      "Have I just found God?": ["X", "X", "X", "X"] // Código cósmico
    };
    
    return baseSets[lifeForm] || ["A", "T", "G", "C"];
  }

  /**
   * Genera nucleótidos basados EXCLUSIVAMENTE en los elementos químicos asignados
   * Cada forma de vida tendrá nucleótidos únicos según su química específica
   */
  private static getNucleotideVariation(lifeForm: string, elements: number[]): any {
    // Obtener elementos específicos asignados
    const elementMap = this.createElementMap(elements);
    
    // Generar nucleótidos basados en elementos disponibles
    const nucleotideData = this.generateElementBasedNucleotides(elementMap, lifeForm);
    
    return nucleotideData;
  }

  /**
   * Crea un mapa de elementos disponibles para esta forma de vida
   */
  private static createElementMap(elements: number[]): { [key: string]: boolean } {
    const elementNames: { [key: number]: string } = {
      1: "H",   6: "C",   7: "N",   8: "O",   15: "P",   16: "S",
      14: "Si", 13: "Al", 20: "Ca", 26: "Fe", 12: "Mg",
      32: "Ge", 31: "Ga", 49: "In", 73: "Ta", 11: "Na",
      2: "He",  10: "Ne", 18: "Ar", 36: "Kr", 54: "Xe",
      115: "Mc", 118: "Og", 119: "Uue", 120: "Ubn", 126: "Ubh"
    };
    
    const elementMap: { [key: string]: boolean } = {};
    
    for (const atomicNumber of elements) {
      const elementSymbol = elementNames[atomicNumber];
      if (elementSymbol) {
        elementMap[elementSymbol] = true;
      }
    }
    
    return elementMap;
  }

  /**
   * Genera estructuras de información genética basadas en elementos específicos
   */
  private static generateElementBasedNucleotides(elementMap: { [key: string]: boolean }, lifeForm: string): any {
    // CASO 1: Vida basada en Carbono clásica (C, N, O, H, P disponibles)
    if (elementMap["C"] && elementMap["N"] && elementMap["O"] && elementMap["H"]) {
      return this.generateCarbonBasedNucleotides(elementMap, lifeForm);
    }
    
    // CASO 2: Vida basada en Silicio (Si, O, H disponibles, sin C/N)
    else if (elementMap["Si"] && elementMap["O"] && !elementMap["C"]) {
      return this.generateSiliconBasedNucleotides(elementMap);
    }
    
    // CASO 3: Vida metálica/robótica (Ga, Ge, In, Ta disponibles)
    else if (elementMap["Ga"] || elementMap["Ge"] || elementMap["In"] || elementMap["Ta"]) {
      return this.generateMetallicNucleotides(elementMap);
    }
    
    // CASO 4: Vida gaseosa (gases nobles: He, Ne, Ar, Kr, Xe)
    else if (elementMap["He"] || elementMap["Ne"] || elementMap["Ar"] || elementMap["Kr"] || elementMap["Xe"]) {
      return this.generateGaseousInformation(elementMap);
    }
    
    // CASO 5: Vida energética/divina (elementos super-pesados)
    else if (elementMap["Mc"] || elementMap["Og"] || elementMap["Uue"]) {
      return this.generateExoticInformation(elementMap);
    }
    
    // FALLBACK: Usar elementos disponibles de forma genérica
    return this.generateGenericInformation(elementMap);
  }

  /**
   * Nucleótidos de carbono clásicos con variaciones según elementos específicos
   */
  private static generateCarbonBasedNucleotides(elementMap: { [key: string]: boolean }, lifeForm: string): any {
    const hasPhosphorus = elementMap["P"];
    const hasSulfur = elementMap["S"];
    const hasMagnesium = elementMap["Mg"];
    
    // Bases clásicas pero adaptadas a elementos disponibles
    const bases = [
      // Adenina - siempre C5H5N5 si hay C,H,N
      { name: "A", formula: this.adaptFormulaToElements([5,5,5,0,0], elementMap) },
      // Timina/Uracilo - depende de si hay suficiente O
      { name: elementMap["O"] && lifeForm !== "Vegetation" ? "T" : "U", 
        formula: this.adaptFormulaToElements(elementMap["O"] ? [6,5,2,2,0] : [4,4,2,2,0], elementMap) },
      // Guanina - C5H5N5O si hay O, sino C5H5N5
      { name: "G", formula: this.adaptFormulaToElements([5,5,5, elementMap["O"] ? 1 : 0, 0], elementMap) },
      // Citosina - C4H5N3O si hay O
      { name: "C", formula: this.adaptFormulaToElements([5,4,3, elementMap["O"] ? 1 : 0, 0], elementMap) }
    ];

    return {
      bases: bases,
      usesRNA: !elementMap["O"] || lifeForm === "Vegetation", // Sin O suficiente = RNA
      gcContent: hasSulfur ? "high" : "moderate", // Azufre permite más estabilidad GC
      backbone: hasPhosphorus ? "phosphate" : (hasSulfur ? "sulfate" : "alternative"),
      sugarType: elementMap["O"] ? "deoxyribose" : "modified_ribose"
    };
  }

  /**
   * Información genética basada en silicio
   */
  private static generateSiliconBasedNucleotides(elementMap: { [key: string]: boolean }): any {
    // Tetraedros de silice como "bases"
    const siliconBases = [
      { name: "SiO4", formula: [0,0,0,4,0,1] },      // Tetraedro básico [H,C,N,O,P,Si]
      { name: "Si2O3", formula: [0,0,0,3,0,2] },     // Doble tetraedro
      { name: "SiO3Al", formula: [0,0,0,3,0,1,1] },  // Con aluminio si está disponible
      { name: "SiO2", formula: [0,0,0,2,0,1] }       // Cuarzo
    ];

    return {
      bases: siliconBases,
      usesRNA: false,
      gcContent: "crystalline",
      backbone: "silicate_chain",
      sugarType: "silicon_cage"
    };
  }

  /**
   * Información digital para entidades metálicas
   */
  private static generateMetallicNucleotides(elementMap: { [key: string]: boolean }): any {
    const metallicBases = [
      { name: "00", formula: [0,0,0,0,0,0,0,1] }, // Solo Ga (estado 00)
      { name: "01", formula: [0,0,0,0,0,0,1,0] }, // Solo Ge (estado 01)
      { name: "10", formula: [0,0,0,0,0,0,0,0,1] }, // In (estado 10)
      { name: "11", formula: [0,0,0,0,0,0,0,0,0,1] } // Ta (estado 11)
    ];

    return {
      bases: metallicBases,
      usesRNA: false,
      gcContent: "digital",
      backbone: "metallic_conductor",
      sugarType: "none"
    };
  }

  /**
   * Estados cuánticos para gases
   */
  private static generateGaseousInformation(elementMap: { [key: string]: boolean }): any {
    const gasStates = [
      { name: "|0⟩", formula: [0,0,0,0,0,0,0,0,0,1] }, // He
      { name: "|1⟩", formula: [0,0,0,0,0,0,0,0,0,0,1] }, // Ne
      { name: "|+⟩", formula: [0,0,0,0,0,0,0,0,0,0,0,1] }, // Ar
      { name: "|-⟩", formula: [0,0,0,0,0,0,0,0,0,0,0,0,1] } // Kr
    ];

    return {
      bases: gasStates,
      usesRNA: false,
      gcContent: "quantum",
      backbone: "field_interaction",
      sugarType: "none"
    };
  }

  /**
   * Información cósmica para elementos exóticos
   */
  private static generateExoticInformation(elementMap: { [key: string]: boolean }): any {
    const exoticStates = [
      { name: "α", formula: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] }, // Mc
      { name: "β", formula: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] }, // Og
      { name: "γ", formula: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] }, // Uue
      { name: "δ", formula: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] } // Ubn
    ];

    return {
      bases: exoticStates,
      usesRNA: false,
      gcContent: "cosmic",
      backbone: "spacetime_fabric",
      sugarType: "none"
    };
  }

  /**
   * Sistema genérico que usa cualquier elemento disponible
   */
  private static generateGenericInformation(elementMap: { [key: string]: boolean }): any {
    const availableElements = Object.keys(elementMap);
    const genericBases = [];

    // Crear hasta 4 "bases" usando elementos disponibles
    for (let i = 0; i < Math.min(4, availableElements.length); i++) {
      const formula = new Array(15).fill(0); // Array para todos los elementos posibles
      formula[i] = 1; // Un átomo del elemento correspondiente
      
      genericBases.push({
        name: availableElements[i],
        formula: formula
      });
    }

    return {
      bases: genericBases,
      usesRNA: false,
      gcContent: "variable",
      backbone: "elemental",
      sugarType: "adapted"
    };
  }

  /**
   * Adapta una fórmula química a los elementos disponibles
   */
  private static adaptFormulaToElements(baseFormula: number[], elementMap: { [key: string]: boolean }): number[] {
    const elementOrder = ["H", "C", "N", "O", "P"];
    const adaptedFormula = [...baseFormula];
    
    // Si falta algún elemento esencial, sustituir por elementos disponibles
    for (let i = 0; i < elementOrder.length; i++) {
      if (!elementMap[elementOrder[i]] && adaptedFormula[i] > 0) {
        // Buscar sustituto disponible
        if (elementOrder[i] === "C" && elementMap["Si"]) {
          // Silicio puede sustituir carbono
          adaptedFormula[i] = 0; // Quitar carbono
          // Agregar silicio (posición 5 en nuestro array extendido)
        }
        // Más sustituciones químicamente válidas...
      }
    }
    
    return adaptedFormula;
  }

  /**
   * Datos genómicos procedurales realistas basados en biología conocida
   */
  private static getGenomeSizeData(lifeForm: string, elements: number[]): any {
    const genomicData: { [key: string]: any } = {
      "Bacteria": {
        totalBases: 4600000,      // E. coli típica: ~4.6M bp
        genes: 4300,              // ~4,300 genes
        gcContent: "high",        // 50-70% GC en muchas bacterias
        chromosomes: 1,           // Cromosoma circular único
        complexity: "simple",
        modification: "restriction" // Enzimas de restricción
      },
      
      "Vegetation": {
        totalBases: 120000000,    // Arabidopsis: ~120M bp
        genes: 27000,             // ~27,000 genes (más que animales!)
        gcContent: "variable",    // Varía mucho entre especies
        chromosomes: 5,           // Arabidopsis: 5 cromosomas
        complexity: "moderate",
        modification: "chloroplast" // DNA cloroplástico adicional
      },
      
      "Animal Life": {
        totalBases: 3200000000,   // Humanos: ~3.2B bp
        genes: 20000,             // ~20,000 genes (menos que plantas)
        gcContent: "moderate",    // ~41% GC en humanos
        chromosomes: 23,          // 23 pares en humanos
        complexity: "high",
        modification: "histones"  // Organización en histonas
      },
      
      "Intelligent Life": {
        totalBases: 5000000000,   // Genoma expandido hipotético
        genes: 35000,             // Más genes por duplicación
        gcContent: "optimized",   // GC optimizado evolutivamente
        chromosomes: 30,          // Más cromosomas para estabilidad
        complexity: "very_high",
        modification: "enhanced_epigenetic" // Epigenética avanzada
      },
      
      "Vegetable Animals": {
        totalBases: 800000000,    // Híbrido entre planta y animal
        genes: 24000,             // Intermedio planta-animal
        gcContent: "hybrid",      // Patrón mixto
        chromosomes: 15,          // Número intermedio
        complexity: "chimeric",
        modification: "dual_system" // Sistema genético dual
      }
    };
    
    // Retornar datos específicos o default basado en complejidad elemental
    if (genomicData[lifeForm]) {
      return genomicData[lifeForm];
    }
    
    // Fallback basado en elementos
    const complexity = elements.reduce((sum, atomic) => sum + atomic, 0);
    if (complexity < 100) return genomicData["Bacteria"];
    if (complexity < 200) return genomicData["Vegetation"];
    return genomicData["Animal Life"];
  }

  private static getGenomeSize(elements: number[]): number {
    // Función legacy mantenida para compatibilidad
    const complexity = elements.reduce((sum, atomic) => sum + atomic, 0);
    
    // Categorías basadas en complejidad elemental
    if (complexity < 50) return 4000000;          // Vida simple (bacterias)
    if (complexity < 100) return 150000000;       // Vida vegetal  
    if (complexity < 150) return 1000000000;      // Vida híbrida
    if (complexity < 200) return 3000000000;      // Vida animal
    if (complexity < 250) return 3200000000;      // Vida inteligente
    if (complexity < 500) return 2147483647;      // Vida digital/robótica
    return 4294967295;                            // Vida exótica/divina
  }

  // Canvas rendering con colores
  public static renderToCanvas(message: AreciboMessage, canvas: HTMLCanvasElement, scale: number = 10): void {
    canvas.width = message.width * scale;
    canvas.height = message.height * scale;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Background negro
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600'];
    
    for (let y = 0; y < message.height; y++) {
      for (let x = 0; x < message.width; x++) {
        const index = y * message.width + x;
        if (message.bitmap[index] === 1) {
          const colorIndex = message.colorMap[index] || 1;
          ctx.fillStyle = colors[colorIndex] || '#FFFFFF';
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    }
  }

  public static exportToPNG(message: AreciboMessage, scale: number = 10): string {
    const canvas = document.createElement('canvas');
    this.renderToCanvas(message, canvas, scale);
    return canvas.toDataURL('image/png');
  }
}