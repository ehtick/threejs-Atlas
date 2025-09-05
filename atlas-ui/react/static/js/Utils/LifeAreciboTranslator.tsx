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
    WHITE: 1,    // Números, Población
    PURPLE: 2,   // Elementos
    GREEN: 3,    // Nucleótidos
    BLUE: 4,     // ADN/Estructura genética, Estatura
    ORANGE: 5,   // (No usado en nueva implementación)
    RED: 6       // Figura de forma de vida
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
    this.drawChemicalElements(bitmap, colorMap, config.lifeForm, config.planetName);
    
    // Línea en blanco (fila 10)
    this.drawBlankLine(bitmap, colorMap, 10);
    
    // Línea en blanco (fila 11)
    this.drawBlankLine(bitmap, colorMap, 11);
    
    // Sección 3: Nucleótidos (filas 12-27) - COLOR VERDE
    this.drawNucleotides(bitmap, colorMap, config.lifeForm, config.planetName);
    
    // Línea en blanco entre nucleótidos y ADN
    this.drawBlankLine(bitmap, colorMap, 28);
    
    // Sección 4: Doble hélice del ADN (filas 29-43) - HELICES AZULES + CENTRO BLANCO
    this.drawDNADoubleHelix(bitmap, colorMap, config.lifeForm, config.planetName, 29, 15);
    
    // Línea en blanco después del ADN
    this.drawBlankLine(bitmap, colorMap, 44);
    
    // Sección 5: Forma de vida (filas 45-53, máximo 9 líneas) - COLOR NARANJA
    // Izquierda: Estatura, Centro: Representación gráfica, Derecha: Población
    this.drawLifeFormSection(bitmap, colorMap, config.lifeForm, config.planetName, 45, 9);
    
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
  private static drawChemicalElements(bitmap: number[], colorMap: number[], lifeForm: string, planetName?: string): void {
    const elements = this.getElementsForLifeForm(lifeForm, planetName || "Earth");
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
  private static drawNucleotides(bitmap: number[], colorMap: number[], lifeForm: string, planetName?: string): void {
    const category = this.getLifeCategory(lifeForm);
    
    switch (category) {
      case "carbon-based":
        this.drawCarbonBasedGenetics(bitmap, colorMap, lifeForm, planetName);
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
  private static drawCarbonBasedGenetics(bitmap: number[], colorMap: number[], lifeForm: string, planetName?: string): void {
    const elements = this.getElementsForLifeForm(lifeForm, planetName || "Earth");
    const bases = this.getNitrogenBases(lifeForm, planetName || "Earth");
    
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
    
    // Fila 27: Bordes de la doble hélice (dejando centro libre para la representación posterior)
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
    
    // Fila 27: Bordes de la estructura cristalina (dejando centro libre para la representación posterior)
    this.drawDNAHelixBorders(bitmap, colorMap);
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
    
    // Fila 27: Límites del espacio de memoria (dejando centro libre para la representación posterior)
    this.drawDNAHelixBorders(bitmap, colorMap);
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
    
    // Fila 27: Límites del campo cuántico (dejando centro libre para la representación posterior)
    this.drawDNAHelixBorders(bitmap, colorMap);
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
    
    // Fila 27: Límites del campo energético (dejando centro libre para la representación posterior)
    this.drawDNAHelixBorders(bitmap, colorMap);
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
    
    // Fila 27: Límites del cosmos (dejando centro libre para la representación posterior)
    this.drawDNAHelixBorders(bitmap, colorMap);
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
    
    // Debug: mostrar elementos y nucleótidos generados
    console.log(`Elementos disponibles: [${elements.join(', ')}]`);
    console.log(`Nucleótidos generados:`, nucleotideData.bases.map(b => `${b.name}: [${b.formula.join(',')}]`));
    
    // Dibujar las bases nitrogenadas específicas para este tipo de vida
    for (let i = 0; i < Math.min(nucleotideData.bases.length, 4); i++) {
      const base = nucleotideData.bases[i];
      const col = 3 + (i * 4); // Columnas 3, 7, 11, 15
      
      // Dibujar fórmula química adaptada visualmente según elementos
      this.drawAdaptedNucleotidePattern(bitmap, colorMap, base, col, elements);
    }
    
    // Azúcar (deoxyribose/ribose) - varía según si usa ADN o ARN
    const sugarFormula = nucleotideData.usesRNA ? [9,5,0,4,0] : [7,5,0,1,0]; // Ribosa vs Deoxyribosa
    this.drawChemicalFormula(bitmap, colorMap, 1, 12, sugarFormula);
  }

  /**
   * Dibuja patrones visuales únicos de nucleótidos según los elementos del planeta
   */
  private static drawAdaptedNucleotidePattern(bitmap: number[], colorMap: number[], base: any, col: number, elements: number[]): void {
    const fifthElement = elements[4]; // Quinto elemento (P, S, Mg, Ca, Fe, K, Na)
    
    // Debug detallado
    console.log(`Dibujando nucleótido ${base.name} con elementos [${elements.join(',')}], quinto elemento: ${fifthElement}`);
    console.log(`Fórmula del nucleótido: [${base.formula.join(',')}]`);
    
    // Dibujar patrón base estándar (H, C, N, O siempre en filas 12-15)
    for (let elementIdx = 0; elementIdx < Math.min(4, base.formula.length); elementIdx++) {
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
    
    // PATRÓN ÚNICO DEL QUINTO ELEMENTO (fila 16)
    const fifthElementCount = base.formula[4] || 0;
    if (fifthElementCount > 0) {
      this.drawFifthElementPattern(bitmap, colorMap, col, 16, fifthElement, fifthElementCount);
    }
  }

  /**
   * Dibuja patrones visuales únicos para cada tipo de quinto elemento
   */
  private static drawFifthElementPattern(bitmap: number[], colorMap: number[], col: number, row: number, element: number, count: number): void {
    // Patrones únicos según el elemento específico
    switch (element) {
      case 15: // Fósforo - Patrón clásico lineal (como Tierra)
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        if (count >= 2) this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        break;
        
      case 16: // Azufre - Patrón en L (enlaces direccionales)
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col, row + 1, 1, this.COLORS.GREEN);
        if (count >= 2) this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        break;
        
      case 12: // Magnesio - Patrón de coordinación (centro + alrededores)
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col - 1, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        break;
        
      case 20: // Calcio - Patrón cúbico (estructural)
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col, row + 1, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col + 1, row + 1, 1, this.COLORS.GREEN);
        break;
        
      case 26: // Hierro - Patrón de complejo (octaédrico)
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col - 1, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col + 1, row, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col, row - 1, 1, this.COLORS.GREEN);
        this.setPixel(bitmap, colorMap, col, row + 1, 1, this.COLORS.GREEN);
        break;
        
      case 19: // Potasio - Patrón iónico disperso
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        if (count >= 2) this.setPixel(bitmap, colorMap, col + 2, row, 1, this.COLORS.GREEN);
        break;
        
      case 11: // Sodio - Similar al potasio pero más compacto
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
        if (count >= 2) this.setPixel(bitmap, colorMap, col + 1, row + 1, 1, this.COLORS.GREEN);
        break;
        
      default: // Patrón por defecto
        this.setPixel(bitmap, colorMap, col, row, 1, this.COLORS.GREEN);
    }
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
    const genomeSizeData = this.getGenomeSizeData(lifeForm, "Earth", elements); // TODO: pasar planetName real
    
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
   * Dibuja la representación de la doble hélice del ADN 
   * HELICES AZULES + CENTRO BLANCO según el mensaje original de Arecibo
   * Adaptado para cada forma de vida de manera coherente con sus nucleótidos
   */
  private static drawDNADoubleHelix(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, startRow: number = 28, height: number = 15): void {
    const category = this.getLifeCategory(lifeForm);
    const centerCol = 11; // Columna central del mensaje (23/2 ≈ 11)
    
    switch (category) {
      case "carbon-based":
        this.drawCarbonBasedDoubleHelix(bitmap, colorMap, lifeForm, planetName, centerCol, startRow, height);
        break;
      case "silicon-based":
        this.drawSiliconBasedStructure(bitmap, colorMap, centerCol, startRow, height, lifeForm, planetName);
        break;
      case "robotic":
        this.drawDigitalDataStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      case "gaseous":
        this.drawQuantumFieldStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      case "energy":
        this.drawEnergyFieldStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      case "divine":
        this.drawCosmicGeometryStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      default:
        this.drawCarbonBasedDoubleHelix(bitmap, colorMap, lifeForm, planetName, centerCol, startRow, height);
    }
  }

  /**
   * Doble hélice clásica de ADN para vida basada en carbono
   * EXACTAMENTE como el mensaje de Arecibo original:
   * - Centro: 2 píxeles de ancho representando NÚMERO BINARIO de pares de bases
   * - Hélices laterales AZULES envolviendo el centro sin sobreponerse
   */
  private static drawCarbonBasedDoubleHelix(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, centerCol: number, startRow: number, height: number): void {
    const genomicData = this.getGenomeSizeData(lifeForm, planetName, this.getElementsForLifeForm(lifeForm, planetName));
    
    // COLUMNA CENTRAL - 2 píxeles representando el NÚMERO de pares de bases
    const centerCol1 = 11;    // Primera columna del número binario
    const centerCol2 = 12;    // Segunda columna del número binario
    
    // Convertir el número total de bases a binario para la representación
    const totalBases = genomicData.totalBases;
    const binaryString = totalBases.toString(2);
    
    // VARIACIÓN PROCEDURAL DE HÉLICES POR PLANETA
    const helixHash = this.hashString(lifeForm + planetName + "helix");
    const helixRng = this.createSeededRandom(helixHash);
    
    // Parámetros base del DNA (científicamente correctos)
    const baseTurnsPerHeight = 10.5; // DNA real: 1 vuelta cada 10.5 bases
    const baseAmplitude = 0.5; // Amplitud base de las hélices
    
    // Variaciones por planeta (sutiles pero visibles)
    const turnVariation = (helixRng.random() - 0.5) * 2.0; // ±1 vuelta por altura
    const amplitudeVariation = (helixRng.random() - 0.5) * 0.3; // ±15% amplitud
    const phaseShift = helixRng.random() * Math.PI; // Desplazamiento de fase único
    
    const planetTurnsPerHeight = baseTurnsPerHeight + turnVariation;
    const planetAmplitude = baseAmplitude + amplitudeVariation;
    
    console.log(`Hélices para ${lifeForm} en ${planetName}: ${planetTurnsPerHeight.toFixed(1)} vueltas, amplitud ${planetAmplitude.toFixed(2)}`);
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Cada una muestra bits independientes del número binario
      // Como en el Arecibo original: columna izquierda y derecha pueden tener patrones diferentes
      
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // HÉLICES LATERALES AZULES - CON VARIACIÓN POR PLANETA
      // Usar parámetros únicos generados para este planeta
      const helixPhase = (i * Math.PI * 2) / planetTurnsPerHeight + phaseShift;
      
      // Hélice izquierda - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftHelixRange = 9 - 0; // 9 columnas disponibles (0,1,2,3,4,5,6,7,8,9)
      const leftHelixPosition = 0 + Math.round((leftHelixRange/2) + (leftHelixRange/2) * planetAmplitude * Math.cos(helixPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftHelixPosition)), row, 1, this.COLORS.BLUE);
      
      // Hélice derecha - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)  
      // Desfase de 180° para hélice antiparalela (característica real del DNA)
      const rightHelixRange = 22 - 14; // 8 columnas disponibles (14,15,16,17,18,19,20,21,22)
      const rightHelixPosition = 14 + Math.round((rightHelixRange/2) + (rightHelixRange/2) * planetAmplitude * Math.cos(helixPhase + Math.PI));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightHelixPosition)), row, 1, this.COLORS.BLUE);
      
      // VARIACIONES ESPECÍFICAS según el tipo de vida (usando parámetros del planeta)
      if (lifeForm === "Intelligent Life") {
        // Vida inteligente: doble hélice más regular con parámetros planetarios
        const secondaryPhase = helixPhase + Math.PI;
        const leftSecondary = Math.round(centerCol1 - 3 - planetAmplitude * Math.cos(secondaryPhase));
        const rightSecondary = Math.round(centerCol2 + 3 + planetAmplitude * Math.cos(secondaryPhase));
        
        // Frecuencia de píxeles secundarios varía con las vueltas del planeta
        const secondaryFreq = Math.max(3, Math.floor(planetTurnsPerHeight / 2));
        if (leftSecondary >= 5 && leftSecondary <= 9 && i % secondaryFreq === 0) {
          this.setPixel(bitmap, colorMap, leftSecondary, row, 1, this.COLORS.BLUE);
        }
        if (rightSecondary >= 14 && rightSecondary <= 18 && i % (secondaryFreq + 1) === 0) {
          this.setPixel(bitmap, colorMap, rightSecondary, row, 1, this.COLORS.BLUE);
        }
      } else if (lifeForm === "Vegetation") {
        // Vegetación (RNA): hélice más irregular usando amplitud planetaria
        const rnaFreq = Math.max(4, Math.floor(planetTurnsPerHeight));
        if (i % rnaFreq === Math.floor(rnaFreq / 2)) {
          const rnaCol = leftHelixPosition - Math.round(planetAmplitude);
          if (rnaCol >= 0 && rnaCol <= 9) {
            this.setPixel(bitmap, colorMap, rnaCol, row, 1, this.COLORS.BLUE);
          }
        }
      }
    }
  }

  /**
   * Estructura cristalina para vida basada en silicio
   * SIGUIENDO EL PATRÓN ARECIBO ORIGINAL:
   * - Centro: 2 píxeles representando NÚMERO de unidades cristalinas
   * - Redes laterales AZULES envolviendo sin sobreponerse
   */
  private static drawSiliconBasedStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, lifeForm: string, planetName: string): void {
    // Generar complejidad cristalina proceduralmente
    const hash = this.hashString(lifeForm + planetName + "crystalline");
    const rng = this.createSeededRandom(hash);
    
    // Diferentes tipos de estructuras cristalinas con diferentes complejidades
    const structureTypes = [
      { units: 500000, name: "Cuarzo simple" },      // SiO2 básico
      { units: 1200000, name: "Feldespato complejo" }, // Aluminosilicatos
      { units: 800000, name: "Olivino" },            // Nesosilicatos
      { units: 2000000, name: "Zeolita porosa" },    // Estructuras microporosas
      { units: 1500000, name: "Granate denso" },     // Estructuras cúbicas complejas
      { units: 900000, name: "Piroxeno cadena" },    // Inosilicatos
      { units: 1800000, name: "Matriz silicática" }  // Tectosilicatos complejos
    ];
    
    const structureIndex = Math.floor(rng.random() * structureTypes.length);
    const selectedStructure = structureTypes[structureIndex];
    const crystallineUnits = selectedStructure.units;
    const binaryString = crystallineUnits.toString(2);
    
    console.log(`🔮 ESTRUCTURA CRISTALINA para ${lifeForm} en ${planetName}: ${selectedStructure.name} (${crystallineUnits} unidades)`);
    
    const patternType = Math.floor(rng.random() * 3); // Diferentes patrones de red
    
    const centerCol1 = 11;    // Primera columna del número
    const centerCol2 = 12;    // Segunda columna del número
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Patrones independientes como en Arecibo original
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // REDES CRISTALINAS AZULES - CON SEPARACIÓN DE 2PX DEL TRONCO CENTRAL
      let crystalPhase: number;
      
      // Diferentes patrones según el tipo de estructura cristalina
      switch (patternType) {
        case 0: // Hexagonal (cuarzo, olivino)
          crystalPhase = (i * Math.PI * 2) / 6;
          break;
        case 1: // Cúbico (granate, feldespato)
          crystalPhase = (i * Math.PI * 2) / 4;
          break;
        default: // Complejo/irregular (zeolita, matriz)
          crystalPhase = (i * Math.PI * 2) / 8 + rng.random() * 0.5;
      }
      
      // Red izquierda - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftCrystalRange = 9 - 0; // 9 columnas disponibles
      const leftCrystalPosition = 0 + Math.round((leftCrystalRange/2) + (leftCrystalRange/2) * Math.sin(crystalPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftCrystalPosition)), row, 1, this.COLORS.BLUE);
      
      // Red derecha - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)
      const rightCrystalRange = 22 - 14; // 8 columnas disponibles
      const rightCrystalPosition = 14 + Math.round((rightCrystalRange/2) + (rightCrystalRange/2) * Math.sin(crystalPhase + Math.PI));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightCrystalPosition)), row, 1, this.COLORS.BLUE);
    }
  }

  /**
   * Estructura de datos digital para entidades robóticas
   * SIGUIENDO EL PATRÓN ARECIBO ORIGINAL:
   * - Centro: 2 píxeles representando NÚMERO de instrucciones/líneas de código
   * - Buses laterales AZULES sin sobreponerse
   */
  private static drawDigitalDataStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Simular "líneas de código" como análogo digital del genoma
    const codeLines = 2147483647; // Máximo int32 como "programa complejo"
    const binaryString = codeLines.toString(2);
    
    const centerCol1 = 11;    // Primera columna del número
    const centerCol2 = 12;    // Segunda columna del número
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Patrones independientes como en Arecibo original
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // BUSES DIGITALES AZULES - CON SEPARACIÓN DE 2PX DEL TRONCO CENTRAL
      const digitalPhase = (i * Math.PI * 2) / 4; // Ciclo de clock digital
      
      // Bus izquierdo - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftBusRange = 9 - 0; // 9 columnas disponibles
      const leftBusPosition = 0 + Math.round((leftBusRange/2) + (leftBusRange/2) * Math.sin(digitalPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftBusPosition)), row, 1, this.COLORS.BLUE);
      
      // Bus derecho - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)
      const rightBusRange = 22 - 14; // 8 columnas disponibles
      const rightBusPosition = 14 + Math.round((rightBusRange/2) + (rightBusRange/2) * Math.sin(digitalPhase + Math.PI));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightBusPosition)), row, 1, this.COLORS.BLUE);
    }
  }

  /**
   * Campo cuántico para gas consciente
   * SIGUIENDO EL PATRÓN ARECIBO ORIGINAL:
   * - Centro: 2 píxeles representando NÚMERO de estados cuánticos
   * - Campos laterales AZULES sin sobreponerse
   */
  private static drawQuantumFieldStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Simular "estados cuánticos" como análogo del número de bases
    const quantumStates = 1048576; // 2^20 estados cuánticos posibles
    const binaryString = quantumStates.toString(2);
    
    const centerCol1 = 11;    // Primera columna del número
    const centerCol2 = 12;    // Segunda columna del número
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Patrones independientes como en Arecibo original
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // CAMPOS CUÁNTICOS AZULES - CON SEPARACIÓN DE 2PX DEL TRONCO CENTRAL
      const quantumPhase = (i * Math.PI * 2) / 12; // Oscilación cuántica
      
      // Campo izquierdo - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftFieldRange = 9 - 0; // 9 columnas disponibles
      const leftFieldPosition = 0 + Math.round((leftFieldRange/2) + (leftFieldRange/2) * Math.sin(quantumPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftFieldPosition)), row, 1, this.COLORS.BLUE);
      
      // Campo derecho - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)
      const rightFieldRange = 22 - 14; // 8 columnas disponibles
      const rightFieldPosition = 14 + Math.round((rightFieldRange/2) + (rightFieldRange/2) * Math.cos(quantumPhase));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightFieldPosition)), row, 1, this.COLORS.BLUE);
    }
  }

  /**
   * Campo energético para entidades de energía
   * SIGUIENDO EL PATRÓN ARECIBO ORIGINAL:
   * - Centro: 2 píxeles representando NÚMERO de unidades de energía
   * - Campos laterales AZULES sin sobreponerse
   */
  private static drawEnergyFieldStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Simular "unidades de energía" como análogo del genoma
    const energyUnits = 299792458; // Velocidad de la luz (unidades energéticas)
    const binaryString = energyUnits.toString(2);
    
    const centerCol1 = 11;    // Primera columna del número
    const centerCol2 = 12;    // Segunda columna del número
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Patrones independientes como en Arecibo original
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // CAMPOS ENERGÉTICOS AZULES - CON SEPARACIÓN DE 2PX DEL TRONCO CENTRAL
      const energyPhase = (i * Math.PI * 2) / 10; // Frecuencia energética
      
      // Campo izquierdo - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftEnergyRange = 9 - 0; // 9 columnas disponibles
      const leftEnergyPosition = 0 + Math.round((leftEnergyRange/2) + (leftEnergyRange/2) * Math.sin(energyPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftEnergyPosition)), row, 1, this.COLORS.BLUE);
      
      // Campo derecho - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)
      const rightEnergyRange = 22 - 14; // 8 columnas disponibles
      const rightEnergyPosition = 14 + Math.round((rightEnergyRange/2) + (rightEnergyRange/2) * Math.cos(energyPhase));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightEnergyPosition)), row, 1, this.COLORS.BLUE);
    }
  }

  /**
   * Geometría cósmica para entidades divinas
   * SIGUIENDO EL PATRÓN ARECIBO ORIGINAL:
   * - Centro: 2 píxeles representando NÚMERO cósmico (constantes universales)
   * - Geometrías laterales AZULES sin sobreponerse
   */
  private static drawCosmicGeometryStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Usar el número π * 10^9 como "constante cósmica" (como análogo del genoma)
    const cosmicConstant = Math.floor(Math.PI * 1000000000); // π * 10^9
    const binaryString = cosmicConstant.toString(2);
    
    const centerCol1 = 11;    // Primera columna del número
    const centerCol2 = 12;    // Segunda columna del número
    
    for (let i = 0; i < height; i++) {
      const row = startRow + i;
      if (row >= this.HEIGHT) break;
      
      // COLUMNAS CENTRALES BLANCAS - Patrones independientes como en Arecibo original
      // Columna izquierda: bits en posiciones pares (0, 2, 4, 6...)
      const leftBitIndex = i * 2;
      if (leftBitIndex < binaryString.length) {
        const leftBit = parseInt(binaryString[leftBitIndex]);
        if (leftBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol1, row, 1, this.COLORS.WHITE);
        }
      }
      
      // Columna derecha: bits en posiciones impares (1, 3, 5, 7...)
      const rightBitIndex = i * 2 + 1;
      if (rightBitIndex < binaryString.length) {
        const rightBit = parseInt(binaryString[rightBitIndex]);
        if (rightBit === 1) {
          this.setPixel(bitmap, colorMap, centerCol2, row, 1, this.COLORS.WHITE);
        }
      }
      
      // GEOMETRÍAS SAGRADAS AZULES - CON SEPARACIÓN DE 2PX DEL TRONCO CENTRAL
      const goldenPhase = (i * Math.PI * 2) / 13; // Basado en Fibonacci (13)
      const fibonacciPhase = (i * 1.618033988749) % (2 * Math.PI); // Proporción áurea
      
      // Geometría izquierda - DESDE BORDE ABSOLUTO (col 0) HASTA COL 9 (2px separación del centro)
      const leftGeometryRange = 9 - 0; // 9 columnas disponibles
      const leftGeometryPosition = 0 + Math.round((leftGeometryRange/2) + (leftGeometryRange/2) * Math.sin(goldenPhase));
      this.setPixel(bitmap, colorMap, Math.max(0, Math.min(9, leftGeometryPosition)), row, 1, this.COLORS.BLUE);
      
      // Geometría derecha - DESDE COL 14 (2px separación del centro) HASTA BORDE ABSOLUTO (col 22)
      const rightGeometryRange = 22 - 14; // 8 columnas disponibles
      const rightGeometryPosition = 14 + Math.round((rightGeometryRange/2) + (rightGeometryRange/2) * Math.cos(fibonacciPhase));
      this.setPixel(bitmap, colorMap, Math.max(14, Math.min(22, rightGeometryPosition)), row, 1, this.COLORS.BLUE);
    }
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

  private static getElementsForLifeForm(lifeForm: string, planetName?: string): number[] {
    // Elementos basados en DATOS REALES de abundancia en organismos vivos
    const elementSets: { [key: string]: number[] } = {
      "Bacteria": [1, 6, 7, 8, 15],    // H, C, N, O, P - elementos esenciales del DNA/RNA
      "Vegetation": [1, 6, 7, 8, 12],  // H, C, N, O, Mg - magnesio esencial para clorofila
      "Animal Life": [1, 6, 7, 8, 20], // H, C, N, O, Ca - calcio esencial para huesos/señalización
      "Intelligent Life": [1, 6, 7, 8, 15], // H, C, N, O, P - igual que humanos básicos
      "Vegetable Animals": [1, 6, 7, 8, 26], // H, C, N, O, Fe - hierro para transporte O2 y fotosíntesis
      
      // FORMAS DE VIDA ESPECULATIVAS pero científicamente plausibles
      "Silicon-Based Life": [1, 14, 8, 13, 16], // H, Si, O, Al, S - química silicatos
      "Robotic Entities": [14, 29, 79, 47, 6],  // Si, Cu, Au, Ag, C - semiconductores y conductores
      "Conscious Gas": [1, 2, 10, 18, 36],      // H, He, Ne, Ar, Kr - gases nobles estables
      "Non-Physical Entity": [1, 3, 11, 19, 37], // H, Li, Na, K, Rb - metales alcalinos (energía)
      "Have I just found God?": [1, 2, 3, 4, 5] // H, He, Li, Be, B - primeros elementos del universo
    };
    
    // Obtener elementos base
    let baseElements = elementSets[lifeForm] || [1, 6, 7, 8, 15]; // Default: elementos básicos de la vida
    
    // Si no hay planetName, devolver los elementos base
    if (!planetName || planetName === "Earth") {
      return baseElements;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL POR PLANETA
    const hash = this.hashString(lifeForm + planetName + "elements");
    const rng = this.createSeededRandom(hash);
    
    // Para vida inteligente, generar variaciones bioquímicas realistas
    if (lifeForm === "Intelligent Life") {
      // Elementos base siempre presentes: H, C, N, O (esenciales para la vida)
      const coreElements = [1, 6, 7, 8]; // H, C, N, O
      
      // Quinto elemento puede variar según el planeta
      const possibleFifthElements = [
        15, // P (fósforo) - DNA/RNA clásico como la Tierra
        16, // S (azufre) - metabolismo alternativo  
        12, // Mg (magnesio) - fotosíntesis/enzimas
        20, // Ca (calcio) - estructuras/señalización
        26, // Fe (hierro) - transporte de oxígeno
        19, // K (potasio) - señalización neuronal
        11  // Na (sodio) - equilibrio iónico
      ];
      
      const fifthElementIndex = Math.floor(rng.random() * possibleFifthElements.length);
      const fifthElement = possibleFifthElements[fifthElementIndex];
      
      const variedElements = [...coreElements, fifthElement];
      const elementNames = { 11: 'Na', 12: 'Mg', 15: 'P', 16: 'S', 19: 'K', 20: 'Ca', 26: 'Fe' };
      console.log(`🧪 ELEMENTOS GENERADOS para ${lifeForm} en ${planetName}: [${variedElements.join(', ')}] - ${elementNames[fifthElement] || fifthElement} como elemento clave`);
      
      return variedElements;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL PARA BACTERIA
    if (lifeForm === "Bacteria") {
      // Elementos base siempre presentes para bacterias: H, C, N, O (esenciales)
      const coreElements = [1, 6, 7, 8]; // H, C, N, O
      
      // Quinto elemento puede variar según las condiciones extremas del planeta
      const possibleBacterialElements = [
        15, // P (fósforo) - DNA/RNA clásico como la Tierra
        16, // S (azufre) - bacterias quimiosintéticas (fuentes hidrotermales)
        26, // Fe (hierro) - bacterias magnetotácticas y ferruginosas
        25, // Mn (manganeso) - bacterias oxidantes de manganeso
        24, // Cr (cromo) - bacterias resistentes a metales pesados
        28, // Ni (níquel) - metanógenas y hidrogenótrofas
        27, // Co (cobalto) - bacterias productoras de vitamina B12
        42, // Mo (molibdeno) - fijadoras de nitrógeno en condiciones extremas
        74  // W (tungsteno) - hipertermófilas en ambientes extremos
      ];
      
      const fifthElementIndex = Math.floor(rng.random() * possibleBacterialElements.length);
      const fifthElement = possibleBacterialElements[fifthElementIndex];
      
      const variedElements = [...coreElements, fifthElement];
      const elementNames = { 15: 'P', 16: 'S', 24: 'Cr', 25: 'Mn', 26: 'Fe', 27: 'Co', 28: 'Ni', 42: 'Mo', 74: 'W' };
      console.log(`🦠 ELEMENTOS GENERADOS para ${lifeForm} en ${planetName}: [${variedElements.join(', ')}] - ${elementNames[fifthElement] || fifthElement} como elemento clave para metabolismo extremófilo`);
      
      return variedElements;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL PARA VEGETABLE ANIMALS
    if (lifeForm === "Vegetable Animals") {
      // Elementos base siempre presentes para híbridos: H, C, N, O (esenciales)
      const coreElements = [1, 6, 7, 8]; // H, C, N, O
      
      // Quinto elemento puede variar según las capacidades híbridas del planeta
      const possibleHybridElements = [
        26, // Fe (hierro) - transporte de oxígeno y fotosíntesis combinados
        12, // Mg (magnesio) - clorofila para componente vegetal
        20, // Ca (calcio) - estructuras esqueléticas para componente animal
        29, // Cu (cobre) - enzimas oxidativas y conducción nerviosa
        25, // Mn (manganeso) - fotosíntesis y metabolismo híbrido
        30, // Zn (zinc) - enzimas y neurotransmisión
        42, // Mo (molibdeno) - fijación de nitrógeno y metabolismo
        27, // Co (cobalto) - vitaminas y simbiosis híbrida
        28  // Ni (níquel) - metabolismo especializado de híbridos
      ];
      
      const fifthElementIndex = Math.floor(rng.random() * possibleHybridElements.length);
      const fifthElement = possibleHybridElements[fifthElementIndex];
      
      const variedElements = [...coreElements, fifthElement];
      const elementNames = { 12: 'Mg', 20: 'Ca', 25: 'Mn', 26: 'Fe', 27: 'Co', 28: 'Ni', 29: 'Cu', 30: 'Zn', 42: 'Mo' };
      console.log(`🌿🐾 ELEMENTOS GENERADOS para ${lifeForm} en ${planetName}: [${variedElements.join(', ')}] - ${elementNames[fifthElement] || fifthElement} como elemento clave para función híbrida`);
      
      return variedElements;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL PARA VEGETATION
    if (lifeForm === "Vegetation") {
      // Elementos base siempre presentes para plantas: H, C, N, O (esenciales)
      const coreElements = [1, 6, 7, 8]; // H, C, N, O
      
      // Quinto elemento puede variar según las condiciones del planeta
      const possiblePlantElements = [
        12, // Mg (magnesio) - clorofila clásica como la Tierra
        26, // Fe (hierro) - plantas en ambientes ricos en hierro
        29, // Cu (cobre) - enzimas oxidativas alternativas
        30, // Zn (zinc) - cofactor enzimático en suelos ácidos
        25, // Mn (manganeso) - fotosíntesis en condiciones extremas
        42, // Mo (molibdeno) - fijación de nitrógeno
        16, // S (azufre) - metabolismo quimiosintético
        20  // Ca (calcio) - estructuras de pared celular reforzadas
      ];
      
      const fifthElementIndex = Math.floor(rng.random() * possiblePlantElements.length);
      const fifthElement = possiblePlantElements[fifthElementIndex];
      
      const variedElements = [...coreElements, fifthElement];
      const elementNames = { 12: 'Mg', 16: 'S', 20: 'Ca', 25: 'Mn', 26: 'Fe', 29: 'Cu', 30: 'Zn', 42: 'Mo' };
      console.log(`🌱 ELEMENTOS GENERADOS para ${lifeForm} en ${planetName}: [${variedElements.join(', ')}] - ${elementNames[fifthElement] || fifthElement} como elemento clave para fotosíntesis/metabolismo`);
      
      return variedElements;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL PARA SILICON-BASED LIFE
    if (lifeForm === "Silicon-Based Life") {
      // Elementos base siempre presentes: Si, O (estructura base de silicatos)
      const coreElements = [14, 8]; // Si, O
      
      // Elementos adicionales pueden variar según las condiciones geológicas del planeta
      const possibleSiliconElements = [
        [1, 13, 16], // H, Al, S - silicatos hidratados con azufre
        [13, 26, 12], // Al, Fe, Mg - silicatos ferromagnesianos
        [20, 19, 11], // Ca, K, Na - feldespatos alcalinos
        [26, 24, 28], // Fe, Cr, Ni - silicatos metálicos pesados
        [12, 25, 30], // Mg, Mn, Zn - silicatos con metales de transición
        [22, 23, 27], // Ti, V, Co - silicatos de metales refractarios
        [40, 39, 38], // Zr, Y, Sr - silicatos de tierras raras
        [3, 4, 9],    // Li, Be, F - silicatos ligeros pegmatíticos
        [5, 15, 17]   // B, P, Cl - silicatos con no-metales complejos
      ];
      
      const elementSetIndex = Math.floor(rng.random() * possibleSiliconElements.length);
      const additionalElements = possibleSiliconElements[elementSetIndex];
      
      const variedElements = [...coreElements, ...additionalElements];
      console.log(`🔮 ELEMENTOS GENERADOS para ${lifeForm} en ${planetName}: [${variedElements.join(', ')}] - química de silicatos especializada`);
      
      return variedElements;
    }
    
    // Para otras formas de vida, usar los elementos base sin variación
    return baseElements;
  }

  private static getNitrogenBases(lifeForm: string, planetName?: string): string[] {
    // Bases nitrogenadas REALES y especulativas científicamente fundamentadas
    const baseSets: { [key: string]: string[] } = {
      "Bacteria": ["A", "T", "G", "C"],         // DNA clásico - todas las bacterias
      "Vegetation": ["A", "T", "G", "C"],       // DNA (no RNA como pensé antes - error corregido)
      "Animal Life": ["A", "T", "G", "C"],      // DNA clásico - todos los animales
      "Intelligent Life": ["A", "T", "G", "C"], // DNA clásico - mismo que humanos
      "Vegetable Animals": ["A", "T", "G", "C"], // DNA estándar (organismos híbridos tendrían DNA normal)
      
      // BASES ESPECULATIVAS para formas de vida no-carbono
      "Silicon-Based Life": ["Si", "Al", "O", "S"],    // Análogos basados en silicatos
      "Robotic Entities": ["0", "1", "X", "Z"],        // Código binario extendido
      "Conscious Gas": ["|0⟩", "|1⟩", "|+⟩", "|-⟩"],   // Estados cuánticos básicos
      "Non-Physical Entity": ["α", "β", "γ", "δ"],     // Patrones energéticos griegos
      "Have I just found God?": ["∞", "Ω", "Φ", "Ψ"]   // Símbolos cósmicos/matemáticos
    };
    
    // Obtener bases base
    let baseBases = baseSets[lifeForm] || ["A", "T", "G", "C"]; // Default: DNA estándar
    
    // Si no hay planetName, devolver las bases base
    if (!planetName || planetName === "Earth") {
      return baseBases;
    }
    
    // APLICAR VARIACIÓN PROCEDURAL POR PLANETA SOLO PARA VIDA INTELIGENTE
    if (lifeForm === "Intelligent Life") {
      const hash = this.hashString(lifeForm + planetName + "bases");
      const rng = this.createSeededRandom(hash);
      
      // Bases clásicas del DNA terrestre
      const standardBases = ["A", "T", "G", "C"];
      
      // Bases alternativas científicamente plausibles
      const alternativeBases = [
        "U", // Uracilo (RNA) - más estable en ciertos ambientes
        "I", // Inosina - base wobble natural
        "X", // Xantina - derivado de guanina
        "D", // Diaminopurina - apareamiento más fuerte
        "P", // Pseudouridina - RNA modificado
        "M"  // 5-metilcitosina - epigenética
      ];
      
      // 85% probabilidad de usar bases estándar, 15% de tener 1-2 bases alternativas
      if (rng.random() < 0.85) {
        return standardBases; // DNA clásico como la Tierra
      } else {
        // Reemplazar 1-2 bases por alternativas
        const numReplacements = Math.floor(rng.random() * 2) + 1; // 1 o 2 reemplazos
        const modifiedBases = [...standardBases];
        
        for (let i = 0; i < numReplacements; i++) {
          const indexToReplace = Math.floor(rng.random() * 4);
          const alternativeIndex = Math.floor(rng.random() * alternativeBases.length);
          modifiedBases[indexToReplace] = alternativeBases[alternativeIndex];
        }
        
        console.log(`Bases para ${lifeForm} en ${planetName}: [${modifiedBases.join(', ')}] - DNA modificado`);
        return modifiedBases;
      }
    }
    
    return baseBases;
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
    // IMPORTANTE: Incluir 1 en la posición del quinto elemento para que se pueda sustituir
    const bases = [
      // Adenina - C5H5N5 + quinto elemento
      { name: "A", formula: this.adaptFormulaToElements([5,5,5,0,1], elementMap) },
      // Timina/Uracilo - incluye quinto elemento
      { name: elementMap["O"] && lifeForm !== "Vegetation" ? "T" : "U", 
        formula: this.adaptFormulaToElements(elementMap["O"] ? [6,5,2,2,1] : [4,4,2,2,1], elementMap) },
      // Guanina - incluye quinto elemento
      { name: "G", formula: this.adaptFormulaToElements([5,5,5, elementMap["O"] ? 1 : 0, 1], elementMap) },
      // Citosina - incluye quinto elemento
      { name: "C", formula: this.adaptFormulaToElements([5,4,3, elementMap["O"] ? 1 : 0, 1], elementMap) }
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
   * Adapta una fórmula química a los elementos disponibles en el planeta
   * Sustituye el fósforo (P) por el quinto elemento específico del planeta
   */
  private static adaptFormulaToElements(baseFormula: number[], elementMap: { [key: string]: boolean }): number[] {
    const elementOrder = ["H", "C", "N", "O", "P"]; // Orden estándar H-C-N-O-P
    const adaptedFormula = [...baseFormula];
    
    console.log(`🔬 ADAPTANDO FÓRMULA: [${baseFormula.join(',')}] con elementos disponibles:`, Object.keys(elementMap).filter(k => elementMap[k]));
    
    // SUSTITUCIÓN DEL QUINTO ELEMENTO (originalmente P)
    // El fósforo puede ser sustituido por otros elementos en diferentes planetas
    if (adaptedFormula[4] > 0) { // Si la fórmula base usa fósforo
      const substitutions: { [key: string]: number } = {
        "S":  1,   // Azufre - similar electronegatividad, puede formar enlaces similares
        "Mg": 0.5, // Magnesio - valencia diferente, usa menos cantidad
        "Ca": 0.5, // Calcio - similar al magnesio
        "Fe": 1,   // Hierro - puede formar complejos estables
        "K":  1,   // Potasio - catión monovalente
        "Na": 1    // Sodio - similar al potasio
      };
      
      // Buscar qué quinto elemento está disponible
      for (const [element, multiplier] of Object.entries(substitutions)) {
        if (elementMap[element] && !elementMap["P"]) {
          // Sustituir fósforo por el elemento del planeta
          const originalP = adaptedFormula[4];
          adaptedFormula[4] = Math.max(1, Math.floor(originalP * multiplier));
          break;
        }
      }
    }
    
    // AJUSTES ADICIONALES BASADOS EN ELEMENTOS DISPONIBLES
    // Si hay azufre, puede formar enlaces adicionales (más estables)
    if (elementMap["S"] && adaptedFormula[4] > 0) {
      adaptedFormula[3] = Math.max(1, adaptedFormula[3] - 1); // Menos oxígeno
      adaptedFormula[4] = adaptedFormula[4] + 1; // Más azufre
    }
    
    // Si hay magnesio, coordina con oxígeno (estructuras más estables)
    if (elementMap["Mg"] && adaptedFormula[3] > 0) {
      adaptedFormula[3] = adaptedFormula[3] + 1; // Más oxígeno para coordinación
    }
    
    console.log(`🔬 FÓRMULA ADAPTADA: [${baseFormula.join(',')}] → [${adaptedFormula.join(',')}]`);
    
    return adaptedFormula;
  }

  /**
   * Datos genómicos CIENTÍFICAMENTE EXACTOS basados en biología conocida actual
   */
  private static getGenomeSizeData(lifeForm: string, planetName: string, elements: number[]): any {
    const genomicData: { [key: string]: any } = {
      "Bacteria": {
        totalBases: 4641652,      // E. coli K-12 MG1655: 4,641,652 bp (dato exacto)
        genes: 4288,              // 4,288 genes codificantes de proteínas
        gcContent: "high",        // 50.8% GC en E. coli (dato real)
        chromosomes: 1,           // Cromosoma circular único
        complexity: "simple",
        modification: "methylation", // Metilación de DNA
        plasmids: true,           // Plásmidos adicionales
        repetitiveElements: 3.2   // % de elementos repetitivos
      },
      
      "Vegetation": {
        totalBases: 125000000,    // Arabidopsis thaliana: ~125M bp (dato real)
        genes: 27416,             // 27,416 genes (dato exacto de TAIR)
        gcContent: "moderate",    // 36% GC en Arabidopsis
        chromosomes: 5,           // 5 cromosomas (2n=10)
        complexity: "moderate",
        modification: "chloroplast", // DNA cloroplástico (154 kb adicional)
        mitochondrial: 367808,    // DNA mitocondrial: 367,808 bp
        repetitiveElements: 14    // 14% elementos repetitivos
      },
      
      "Animal Life": {
        totalBases: 3200000000,   // Homo sapiens: ~3.2B bp (haploid)
        genes: 19969,             // 19,969 genes codificantes (dato GENCODE v44)
        gcContent: "variable",    // 41% GC promedio, variable por cromosoma
        chromosomes: 23,          // 23 cromosomas (46 diploides)
        complexity: "very_high",
        modification: "epigenetic", // Modificaciones epigenéticas complejas
        introns: 95,             // 95% del genoma son intrones/regiones no codificantes
        repetitiveElements: 45    // 45% elementos repetitivos (LINES, SINES, etc.)
      },
      
      "Intelligent Life": {
        totalBases: 3200000000,   // Base humana real (no inflada artificialmente)
        genes: 19969,             // Mismos genes base humanos
        gcContent: "optimized",   // Optimización hipotética de GC
        chromosomes: 23,          // Mantener estructura cromosómica
        complexity: "enhanced",
        modification: "advanced_epigenetic", // Epigenética más sofisticada
        enhancedRegulation: true, // Regulación génica mejorada
        repetitiveElements: 35    // Menor % elementos repetitivos por optimización
      },
      
      "Vegetable Animals": {
        totalBases: 600000000,    // Híbrido realista entre planta simple y animal
        genes: 23000,             // Intermedio entre Arabidopsis y humano
        gcContent: "mixed",       // Patrón mixto planta-animal
        chromosomes: 16,          // Número intermedio
        complexity: "chimeric",
        modification: "dual_system", // Sistema genético dual
        chloroplasts: true,       // DNA cloroplástico como plantas
        repetitiveElements: 25    // Intermedio entre plantas y animales
      }
    };
    
    // Datos adicionales para formas de vida especulativas pero científicamente fundamentadas
    const speculativeData: { [key: string]: any } = {
      "Silicon-Based Life": {
        totalBases: 2000000,        // Información en enlaces Si-O (menor densidad que DNA)
        genes: 8000,                // Módulos cristalinos funcionales
        gcContent: "crystalline",   // Estructura de red cristalina
        chromosomes: 3,             // Redes cristalinas principales
        complexity: "moderate",
        modification: "doping",     // Dopaje de semiconductores
        repetitiveElements: 60      // Alta repetición en cristales
      },
      
      "Robotic Entities": {
        totalBases: 2147483647,     // 2^31 - 1 instrucciones (máximo int32)
        genes: 65536,               // Módulos de código (2^16)
        gcContent: "binary",        // Código binario
        chromosomes: 8,             // Bancos de memoria
        complexity: "digital",
        modification: "compilation", // Compilación de código
        repetitiveElements: 20      // Funciones repetidas/librerías
      },
      
      "Conscious Gas": {
        totalBases: 1048576,        // 2^20 estados cuánticos
        genes: 256,                 // Estados básicos (2^8)
        gcContent: "quantum",       // Superposición cuántica
        chromosomes: 4,             // Grados de libertad cuánticos
        complexity: "quantum",
        modification: "entanglement", // Entrelazamiento cuántico
        repetitiveElements: 0       // Cada estado es único
      },
      
      "Non-Physical Entity": {
        totalBases: 299792458,      // Velocidad de la luz (información energética)
        genes: 2000,                // Patrones energéticos básicos
        gcContent: "energy",        // Patrones de frecuencia
        chromosomes: 7,             // Espectro electromagnético (7 colores)
        complexity: "energetic",
        modification: "resonance",   // Resonancia energética
        repetitiveElements: 10      // Patrones armónicos
      },
      
      "Have I just found God?": {
        totalBases: 3141592653,     // π × 10^9 (constante matemática universal)
        genes: 137,                 // Constante de estructura fina × 100
        gcContent: "infinite",      // Información infinita
        chromosomes: 11,            // Dimensiones del universo (teoría M)
        complexity: "cosmic",
        modification: "omnipresence", // Ubicuidad cósmica
        repetitiveElements: 0       // Información única y no repetitiva
      }
    };
    
    // Obtener datos base
    let baseData: any;
    if (genomicData[lifeForm]) {
      baseData = genomicData[lifeForm];
    } else if (speculativeData[lifeForm]) {
      baseData = speculativeData[lifeForm];
    } else {
      // Fallback basado en complejidad elemental
      const complexity = elements.reduce((sum, atomic) => sum + atomic, 0);
      if (complexity < 100) baseData = genomicData["Bacteria"];
      else if (complexity < 200) baseData = genomicData["Vegetation"];
      else baseData = genomicData["Animal Life"];
    }
    
    // APLICAR VARIACIÓN PROCEDURAL POR PLANETA
    const hash = this.hashString(lifeForm + planetName);
    const rng = this.createSeededRandom(hash);
    
    // Crear copia con variaciones procedurales
    const variedData = { ...baseData };
    
    // Variar el número total de bases (±5-20% según complejidad)
    const variationRange = lifeForm === "Intelligent Life" ? 0.1 : 0.2; // 10% para inteligentes, 20% para otros
    const baseVariation = (rng.random() - 0.5) * 2 * variationRange; // -variationRange a +variationRange
    variedData.totalBases = Math.floor(baseData.totalBases * (1 + baseVariation));
    
    // Variar el número de genes (±10-15%)
    const geneVariation = (rng.random() - 0.5) * 2 * 0.15; // ±15%
    variedData.genes = Math.floor(baseData.genes * (1 + geneVariation));
    
    // Variar elementos repetitivos (±5%)
    if (typeof baseData.repetitiveElements === 'number') {
      const repVariation = (rng.random() - 0.5) * 2 * 0.05; // ±5%
      variedData.repetitiveElements = Math.max(0, baseData.repetitiveElements * (1 + repVariation));
    }
    
    console.log(`Genoma para ${lifeForm} en ${planetName}: ${variedData.totalBases.toLocaleString()} bases, ${variedData.genes} genes`);
    
    return variedData;
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
    
    const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600', '#FF0000'];
    
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

  /**
   * SECCIÓN 5: FORMA DE VIDA
   * Filas: 45-53 (9 líneas máximo), Color: NARANJA
   * Layout: [Estatura | Representación Visual | Población]
   * Basado en el mensaje original de Arecibo: estatura binaria vertical, figura simple, población binaria horizontal
   */
  private static drawLifeFormSection(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, startRow: number, height: number): void {
    // 1. Estatura: número binario vertical (lado izquierdo, columnas 0-2)
    this.drawLifeFormHeight(bitmap, colorMap, lifeForm, planetName, startRow, height);
    
    // 2. Representación visual: figura simple (centro, columnas 8-14) 
    this.drawLifeFormRepresentation(bitmap, colorMap, lifeForm, planetName, startRow, height);
    
    // 3. Población: número binario horizontal (lado derecho, parte inferior)
    this.drawLifeFormPopulation(bitmap, colorMap, lifeForm, planetName, startRow, height);
  }

  /**
   * Dibuja la representación de altura exactamente como en el mensaje de Arecibo original:
   * Barra vertical completa (azul) + número binario horizontal al lado (centrado verticalmente)
   * 
   * En Arecibo original: 14 (1110 binario) = 14 × 12.6cm = 176.4cm altura humana
   * Se representaba como:
   *     o (azul)
   *     o (azul)
   *     o (azul)
   *     o (azul)
   *   x xxx (blanco-azul-azul-azul, donde x=marcador, xxx=1110)
   *     o (azul)
   *     o (azul)
   *     o (azul)
   */
  private static drawLifeFormHeight(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, startRow: number, height: number): void {
    // Ahora incluimos planetName para generar variación única por planeta
    const heightValue = this.generateLifeFormHeight(lifeForm, planetName);
    
    // Columna para la barra de altura (lado izquierdo)
    const barCol = 3; // Columna 3 para centrar mejor
    
    // 1. Calcular primero la posición del número binario
    const binaryHeight = heightValue.toString(2);
    const barMiddleRow = startRow + Math.floor(height / 2); // Centro de la sección
    const binaryStartCol = barCol - 2; // Columnas 1-5
    
    // 2. Dibujar barra vertical con huecos donde cruza el número binario
    // En Arecibo: la barra tiene huecos arriba, en medio y abajo del número
    const barHeight = height; // Siempre usa toda la altura disponible
    
    for (let i = 0; i < barHeight; i++) {
      const currentRow = startRow + i;
      // Dejar huecos: una línea arriba, la línea del número, y una línea abajo
      if (currentRow === barMiddleRow - 1 || currentRow === barMiddleRow || currentRow === barMiddleRow + 1) {
        // No dibujar NADA en estas filas (dejar completamente transparente)
        continue;
      }
      this.setPixel(bitmap, colorMap, barCol, currentRow, 1, this.COLORS.BLUE);
    }
    
    // 3. Número binario horizontal CRUZANDO la barra (como en Arecibo original)
    // En Arecibo: el marcador "X" y el número binario cruzan la barra vertical
    // Ejemplo para 14 (1110): X 1110 donde X es el marcador blanco
    
    // Convertir altura a binario y mostrar información de depuración
    console.log(`Altura para ${lifeForm} en ${planetName}: ${heightValue} = ${binaryHeight} binario`);
    
    // Dibujar "X" marcador (bit menos significativo) en blanco
    this.setPixel(bitmap, colorMap, binaryStartCol, barMiddleRow, 1, this.COLORS.WHITE);
    
    // Dibujar cada bit del número binario horizontalmente
    // IMPORTANTE: En el mensaje de Arecibo original:
    // - El marcador "X" es BLANCO
    // - Los bits "1" son BLANCOS (presencia de señal)
    // - Los bits "0" son TRANSPARENTES (ausencia de señal)
    // - NO hay azul en la línea del número binario
    for (let i = 0; i < binaryHeight.length && i < 4; i++) {
      // Leer bits de izquierda a derecha (MSB primero, como en Arecibo)
      const bit = parseInt(binaryHeight[i]); 
      
      // Dibujar bits hacia la derecha del marcador
      const bitCol = binaryStartCol + 1 + i;
      
      // NO dibujar en la columna de la barra (dejar el hueco)
      if (bitCol === barCol) {
        continue; // Saltar la columna de la barra
      }
      
      // Solo dibujar si el bit es 1 (en BLANCO)
      // Si el bit es 0, no dibujar nada (dejar transparente)
      if (bit === 1) {
        this.setPixel(bitmap, colorMap, bitCol, barMiddleRow, 1, this.COLORS.WHITE);
      }
      // Si bit === 0, no dibujamos nada (queda transparente)
    }
  }

  /**
   * Dibuja la representación visual de la forma de vida como figura simple
   * Solo "Intelligent Life" usa el sistema modular de 5×5×5 combinaciones
   */
  private static drawLifeFormRepresentation(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, startRow: number, height: number): void {
    const category = this.getLifeCategory(lifeForm);
    
    // Definir el área central para la figura (columnas 8-14)
    const centerCols = [8, 9, 10, 11, 12, 13, 14];
    const centerCol = centerCols[Math.floor(centerCols.length / 2)]; // Columna 11
    
    // Solo "Intelligent Life" usa el sistema modular
    if (lifeForm === "Intelligent Life") {
      // Sistema modular para vida inteligente - usar planeta para crear variación
      const hash = this.hashString(lifeForm + planetName);
      const rng = this.createSeededRandom(hash);
      
      // Seleccionar componentes (0-4 para cada tipo)
      const headType = Math.floor(rng.random() * 5);
      const torsoType = Math.floor(rng.random() * 5);
      const legsType = Math.floor(rng.random() * 5);
      
      // Dibujar la forma de vida modular
      this.drawModularLifeForm(bitmap, colorMap, centerCol, startRow, height, headType, torsoType, legsType);
    } else {
      // Formas específicas para otras categorías - también usar planeta para crear variación
      const hash = this.hashString(lifeForm + planetName);
      const rng = this.createSeededRandom(hash);
      
      switch (category) {
        case "carbon-based":
          this.drawCarbonBasedForm(bitmap, colorMap, centerCols, centerCol, startRow, height, lifeForm, rng);
          break;
        case "silicon-based":
          this.drawSiliconBasedForm(bitmap, colorMap, centerCols, centerCol, startRow, height, rng);
          break;
        case "robotic":
          this.drawRoboticForm(bitmap, colorMap, centerCols, centerCol, startRow, height, rng);
          break;
        case "gaseous":
          this.drawGaseousForm(bitmap, colorMap, centerCols, centerCol, startRow, height, rng);
          break;
        case "energy":
          this.drawEnergyForm(bitmap, colorMap, centerCols, centerCol, startRow, height, rng);
          break;
        case "divine":
          this.drawDivineForm(bitmap, colorMap, centerCols, centerCol, startRow, height, rng);
          break;
        default:
          // Forma humanoide por defecto
          this.drawHumanoidForm(bitmap, colorMap, centerCols, centerCol, startRow, height);
      }
    }
  }

  /**
   * Dibuja la población del planeta como número binario vertical/horizontal
   * En Arecibo original: 4,292,853,750 (11111111100110110111011110110 en binario)
   * Se dibujaba como un patrón rectangular denso a la derecha del humanoide
   */
  private static drawLifeFormPopulation(bitmap: number[], colorMap: number[], lifeForm: string, planetName: string, startRow: number, height: number): void {
    // Generar población procedural (ahora con valores realistas)
    const population = this.generatePlanetaryPopulation(lifeForm, planetName);
    
    // Convertir a binario completo (32 bits para números grandes)
    const binaryPopulation = population.toString(2);
    console.log(`Población para ${lifeForm} en ${planetName}: ${population.toLocaleString()} = ${binaryPopulation} binario (${binaryPopulation.length} bits)`);
    
    // Área para dibujar la población: lado derecho
    const startCol = 16; // Columnas 16-22 (7 columnas) - movido un píxel a la derecha
    const maxCols = 6; // Reducir un poco para que quepa mejor
    const maxRows = height; // Usar toda la altura disponible
    
    // Dibujar el número binario en formato rectangular (como Arecibo)
    // Dividir los bits en filas para crear un patrón denso
    let bitIndex = binaryPopulation.length - 1; // Empezar por el bit menos significativo
    
    for (let row = 0; row < maxRows && bitIndex >= 0; row++) {
      for (let col = 0; col < maxCols && bitIndex >= 0; col++) {
        const bit = parseInt(binaryPopulation[bitIndex]);
        
        // Solo dibujar bits "1" en blanco (como en Arecibo)
        if (bit === 1) {
          this.setPixel(bitmap, colorMap, startCol + col, startRow + row, 1, this.COLORS.WHITE);
        }
        
        bitIndex--; // Avanzar al siguiente bit
      }
    }
  }

  /**
   * Genera la estatura procedural de una forma de vida
   * Valores entre 1-255 para caber en 8 bits (como el 14 del mensaje original)
   * Ahora incluye planetName para generar variación única por planeta
   */
  private static generateLifeFormHeight(lifeForm: string, planetName: string): number {
    // Para "Intelligent Life" usamos variaciones realistas basadas en combinaciones modular
    if (lifeForm === "Intelligent Life") {
      // Incluir planetName en el hash para variación por planeta
      const hash = this.hashString(lifeForm + planetName);
      const rng = this.createSeededRandom(hash);
      
      // Estaturas realistas para vida inteligente (en unidades de longitud de onda)
      // Basado en el mensaje de Arecibo original: 14 = 176.4cm humanos
      const heightVariations = [
        12,  // ~150cm - Vida inteligente pequeña/compacta
        14,  // ~176cm - Estatura similar a humanos (referencia Arecibo)  
        18,  // ~227cm - Vida inteligente alta
        22,  // ~277cm - Vida inteligente muy alta
        26   // ~327cm - Gigantes inteligentes
      ];
      
      const index = Math.floor(rng.random() * heightVariations.length);
      return heightVariations[index];
    }
    
    // Para otras formas de vida, también incluir planetName para variación
    const category = this.getLifeCategory(lifeForm);
    const hash = this.hashString(lifeForm + planetName);
    const rng = this.createSeededRandom(hash);
    
    switch (category) {
      case "carbon-based":
        // Rango humanoide: 10-25 unidades
        return Math.floor(10 + rng.random() * 15);
      case "silicon-based":
        // Más grandes: 25-50 unidades  
        return Math.floor(25 + rng.random() * 25);
      case "robotic":
        // Variados: 5-100 unidades
        return Math.floor(5 + rng.random() * 95);
      case "gaseous":
        // Muy grandes: 100-200 unidades
        return Math.floor(100 + rng.random() * 100);
      case "energy":
        // Pequeños/teóricos: 1-10 unidades
        return Math.floor(1 + rng.random() * 9);
      case "divine":
        // Épicos: 200-255 unidades
        return Math.floor(200 + rng.random() * 55);
      default:
        // Similar al humano original (14): 12-18 unidades
        return Math.floor(12 + rng.random() * 6);
    }
  }

  /**
   * Genera la población planetaria procedural para una forma de vida
   * Valores realistas en millones/miles de millones como en Arecibo original
   * Arecibo original: ~4.29 mil millones (4,292,853,750)
   */
  private static generatePlanetaryPopulation(lifeForm: string, planetName: string): number {
    const category = this.getLifeCategory(lifeForm);
    const combinedHash = this.hashString(lifeForm + planetName);
    const rng = this.createSeededRandom(combinedHash);
    
    switch (category) {
      case "carbon-based":
        // Poblaciones altas como la Tierra: 1-10 mil millones
        return Math.floor(1000000000 + rng.random() * 9000000000);
      case "silicon-based":
        // Poblaciones menores: 100M - 2 mil millones 
        return Math.floor(100000000 + rng.random() * 1900000000);
      case "robotic":
        // Muy variables: 1M - 5 mil millones
        return Math.floor(1000000 + rng.random() * 4999000000);
      case "gaseous":
        // Menos individuos pero existentes: 10M - 500M
        return Math.floor(10000000 + rng.random() * 490000000);
      case "energy":
        // Entidades raras pero significativas: 100K - 50M
        return Math.floor(100000 + rng.random() * 49900000);
      case "divine":
        // Muy pocos pero poderosos: 1K - 1M
        return Math.floor(1000 + rng.random() * 999000);
      default:
        // Similar a la Tierra original de Arecibo: 3-6 mil millones
        return Math.floor(3000000000 + rng.random() * 3000000000);
    }
  }

  /**
   * Genera un hash simple de una cadena para usar como seed
   */
  private static hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convertir a 32-bit integer
    }
    return Math.abs(hash);
  }

  /**
   * Crea un generador de números aleatorios con seed
   */
  private static createSeededRandom(seed: number): { random: () => number } {
    return {
      random: () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      }
    };
  }

  /**
   * Dibuja una forma de vida modular combinando cabeza, torso y piernas
   */
  private static drawModularLifeForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, headType: number, torsoType: number, legsType: number): void {
    // Distribución de las 9 filas:
    // Filas 0-2: Cabeza (3 filas)
    // Filas 3-5: Torso (3 filas)  
    // Filas 6-8: Piernas (3 filas)
    
    this.drawHead(bitmap, colorMap, centerCol, startRow, headType);
    this.drawTorso(bitmap, colorMap, centerCol, startRow + 3, torsoType);
    this.drawLegs(bitmap, colorMap, centerCol, startRow + 6, legsType);
  }

  /**
   * Dibuja diferentes tipos de cabezas (5 variaciones)
   */
  private static drawHead(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, headType: number): void {
    switch (headType) {
      case 0: // Cabeza humanoide clásica
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
        break;
        
      case 1: // Cabeza triangular/alienígena
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 2: // Cabeza cuadrada/robótica
        for (let r = 0; r < 3; r++) {
          for (let c = -1; c <= 1; c++) {
            this.setPixel(bitmap, colorMap, centerCol + c, startRow + r, 1, this.COLORS.RED);
          }
        }
        break;
        
      case 3: // Cabeza alargada vertical
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 4: // Cabeza con antenas/insectoide
        // Antenas
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
        // Cabeza central
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        break;
    }
  }

  /**
   * Dibuja diferentes tipos de torsos (5 variaciones)
   */
  private static drawTorso(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, torsoType: number): void {
    switch (torsoType) {
      case 0: // Torso humanoide simple
        for (let r = 0; r < 3; r++) {
          this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
        }
        // Brazos en el medio
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
        break;
        
      case 1: // Torso ancho/robusto
        for (let r = 0; r < 3; r++) {
          for (let c = -1; c <= 1; c++) {
            this.setPixel(bitmap, colorMap, centerCol + c, startRow + r, 1, this.COLORS.RED);
          }
        }
        // Brazos extendidos
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        break;
        
      case 2: // Torso con múltiples brazos
        for (let r = 0; r < 3; r++) {
          this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
        }
        // Múltiples brazos
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 3: // Torso serpentino/ondulado
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        // Brazos simétricos
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        break;
        
      case 4: // Torso cristalino/geométrico
        // Forma de diamante
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        // Brazos puntiagudos
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        break;
    }
  }

  /**
   * Dibuja diferentes tipos de piernas (5 variaciones)
   */
  private static drawLegs(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, legsType: number): void {
    switch (legsType) {
      case 0: // Piernas humanoides clásicas
        for (let r = 0; r < 3; r++) {
          this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
          this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
        }
        break;
        
      case 1: // Piernas con pies grandes
        for (let r = 0; r < 2; r++) {
          this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
          this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
        }
        // Pies grandes
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 2: // Múltiples piernas/insectoide
        // 4 patas
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow, 1, this.COLORS.RED);
        
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 3: // Columna central/serpentino
        this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
        break;
        
      case 4: // Base flotante/energética
        // Patrón ondulado en la base
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
        break;
    }
  }

  // Formas específicas para cada categoría de vida (mantenidas por compatibilidad)

  /**
   * Forma humanoide simple - stick figure como el original de Arecibo
   */
  private static drawHumanoidForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number): void {
    // Cabeza (filas 0-1) - cabeza más grande
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    // Cuerpo (filas 2-5) - tronco más largo usando las 9 líneas
    for (let r = 2; r <= 5; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Brazos (fila 3) - brazos extendidos
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 3, 1, this.COLORS.RED);
    
    // Piernas (filas 6-8) - usar completamente las 9 líneas
    for (let r = 6; r < height; r++) {
      this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
    }
  }

  /**
   * Forma basada en carbono - cada tipo de vida tiene su representación única
   */
  private static drawCarbonBasedForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, lifeForm: string, rng: { random: () => number }): void {
    // Cada forma de vida basada en carbono tiene su propia representación visual única
    switch (lifeForm) {
      case "Bacteria":
        this.drawBacteriaForm(bitmap, colorMap, centerCol, startRow, height, rng);
        break;
      case "Vegetation":
        this.drawVegetationForm(bitmap, colorMap, centerCol, startRow, height, rng);
        break;
      case "Animal Life":
        this.drawAnimalForm(bitmap, colorMap, centerCol, startRow, height, rng);
        break;
      case "Vegetable Animals":
        this.drawVegetableAnimalForm(bitmap, colorMap, centerCol, startRow, height, rng);
        break;
      case "Intelligent Life":
        // Esto no debería pasar, pero por si acaso
        this.drawHumanoidForm(bitmap, colorMap, cols, centerCol, startRow, height);
        break;
      default:
        // Forma humanoide por defecto para formas de vida desconocidas
        this.drawHumanoidForm(bitmap, colorMap, cols, centerCol, startRow, height);
    }
  }

  /**
   * Forma basada en silicio - múltiples estructuras cristalinas y minerales
   * Diferentes tipos según geología planetaria
   */
  private static drawSiliconBasedForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Usar el generador RNG para determinar el tipo de estructura cristalina
    const crystalType = Math.floor(rng.random() * 7);
    
    switch (crystalType) {
      case 0:
        this.drawQuartzCrystal(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 1:
        this.drawFeldsparStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 2:
        this.drawOlivineNetwork(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 3:
        this.drawZeoliteFramework(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 4:
        this.drawGarnetStructure(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 5:
        this.drawPyroxeneChain(bitmap, colorMap, centerCol, startRow, height);
        break;
      default:
        this.drawSilicateMatrix(bitmap, colorMap, centerCol, startRow, height);
    }
  }

  /**
   * Cuarzo - estructura hexagonal
   */
  private static drawQuartzCrystal(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Estructura hexagonal del cuarzo
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    // Hexágono central
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 3, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Feldespato - estructura tridimensional compleja
   */
  private static drawFeldsparStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Estructura de marco tridimensional
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Olivino - estructura de islas de tetraedros
   */
  private static drawOlivineNetwork(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Tetraedros aislados conectados por cationes
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    
    // Segundo tetraedro
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 3, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Zeolita - estructura microporosa
   */
  private static drawZeoliteFramework(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Marco con cavidades y canales
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    // Cavidad central
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Granate - estructura compleja cúbica
   */
  private static drawGarnetStructure(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Estructura cúbica compleja
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    
    for (let c = -2; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 1, 1, this.COLORS.RED);
    }
    
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    for (let c = -1; c <= 1; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 3, 1, this.COLORS.RED);
    }
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Piroxeno - cadenas de tetraedros
   */
  private static drawPyroxeneChain(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Cadenas simples de tetraedros
    for (let r = 0; r < Math.min(6, height); r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
      if (r % 2 === 0) {
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
      }
    }
  }

  /**
   * Matriz de silicatos general - red compleja
   */
  private static drawSilicateMatrix(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Red tridimensional compleja
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    for (let c = -2; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 2, 1, this.COLORS.RED);
    }
    
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Forma robótica - estructura geométrica rígida
   */
  private static drawRoboticForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Cabeza cuadrada
    for (let c = -1; c <= 1; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 1, 1, this.COLORS.RED);
    }
    
    // Cuerpo rectangular
    for (let r = 2; r < 5; r++) {
      this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
    }
    
    // Brazos mecánicos
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 3, 1, this.COLORS.RED);
    
    // Piernas
    for (let r = 5; r < height - 2; r++) {
      this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
    }
  }

  /**
   * Forma gaseosa - nube difusa
   */
  private static drawGaseousForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Nube difusa - círculo aproximado
    // Fila superior
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    // Filas medias más anchas
    for (let r = 2; r < 5; r++) {
      this.setPixel(bitmap, colorMap, centerCol - 2, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + 2, startRow + r, 1, this.COLORS.RED);
    }
    
    // Fila inferior
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Forma de energía - ondas simples
   */
  private static drawEnergyForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Ondas de energía - patrón zigzag
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 6, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 7, 1, this.COLORS.RED);
    // Línea horizontal de energía
    for (let c = -2; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 3, 1, this.COLORS.RED);
    }
  }

  /**
   * Forma divina - cruz o estrella simple
   */
  private static drawDivineForm(bitmap: number[], colorMap: number[], cols: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Cruz divina
    // Línea vertical
    for (let r = 0; r < height - 2; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Línea horizontal
    for (let c = -2; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 3, 1, this.COLORS.RED);
    }
    
    // Rayos diagonales
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Forma animal - diferentes tipos de animales con variación procedural
   */
  private static drawAnimalForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Seleccionar tipo de animal aleatoriamente (5 tipos)
    const animalType = Math.floor(rng.random() * 5);
    
    switch (animalType) {
      case 0: // Cuadrúpedo mamífero (perro/gato)
        this.drawQuadrupedMammal(bitmap, colorMap, centerCol, startRow);
        break;
      case 1: // Ave/volador
        this.drawBirdForm(bitmap, colorMap, centerCol, startRow);
        break;
      case 2: // Pez/acuático
        this.drawFishForm(bitmap, colorMap, centerCol, startRow);
        break;
      case 3: // Insecto/arácnido
        this.drawInsectForm(bitmap, colorMap, centerCol, startRow);
        break;
      case 4: // Reptil/serpiente
        this.drawReptileForm(bitmap, colorMap, centerCol, startRow);
        break;
    }
  }

  /**
   * Mamífero cuadrúpedo - forma mejorada
   */
  private static drawQuadrupedMammal(bitmap: number[], colorMap: number[], centerCol: number, startRow: number): void {
    // Cabeza más realista
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    
    // Cuello
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    
    // Cuerpo más realista
    for (let c = 0; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 2, 1, this.COLORS.RED);
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 3, 1, this.COLORS.RED);
    }
    
    // Patas delanteras y traseras
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 5, 1, this.COLORS.RED);
    
    // Cola
    this.setPixel(bitmap, colorMap, centerCol + 3, startRow + 2, 1, this.COLORS.RED);
  }

  /**
   * Forma de ave
   */
  private static drawBirdForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number): void {
    // Cabeza
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    
    // Pico
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    
    // Cuerpo
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    
    // Alas extendidas
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
    
    // Patas
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Forma de pez
   */
  private static drawFishForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number): void {
    // Cabeza
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    
    // Cuerpo alargado
    for (let c = -1; c <= 2; c++) {
      this.setPixel(bitmap, colorMap, centerCol + c, startRow + 2, 1, this.COLORS.RED);
    }
    
    // Aletas
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    
    // Cola
    this.setPixel(bitmap, colorMap, centerCol + 3, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 3, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 3, startRow + 3, 1, this.COLORS.RED);
  }

  /**
   * Forma de insecto
   */
  private static drawInsectForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number): void {
    // Cabeza
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    
    // Tórax
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    
    // Abdomen
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 3, 1, this.COLORS.RED);
    
    // 6 patas (3 de cada lado)
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 4, 1, this.COLORS.RED);
    
    // Antenas
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
  }

  /**
   * Forma de reptil/serpiente
   */
  private static drawReptileForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number): void {
    // Cabeza triangular
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    
    // Cuerpo serpenteante
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Forma de bacteria - múltiples tipos según morfología bacterial real
   * Diferentes formas basadas en clasificación científica
   */
  private static drawBacteriaForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Usar el generador RNG para determinar el tipo de bacteria aleatoriamente
    const bacteriaType = Math.floor(rng.random() * 7);
    
    switch (bacteriaType) {
      case 0:
        this.drawCoccusBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 1:
        this.drawBacillusBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 2:
        this.drawSpirillusBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 3:
        this.drawStreptococcusBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 4:
        this.drawStaphylococcusBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 5:
        this.drawVibroBacteria(bitmap, colorMap, centerCol, startRow, height);
        break;
      default:
        this.drawFilamentousBacteria(bitmap, colorMap, centerCol, startRow, height);
    }
  }

  /**
   * Coccus - bacteria esférica
   */
  private static drawCoccusBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Forma circular simple
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
  }

  /**
   * Bacillus - bacteria en forma de bastón
   */
  private static drawBacillusBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Forma alargada vertical (bastón)
    for (let r = 0; r < Math.min(5, height); r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
      if (r === 1 || r === 3) {
        // Ampliar en el medio
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
      }
    }
  }

  /**
   * Spirillum - bacteria espiral
   */
  private static drawSpirillusBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Forma espiral
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Streptococcus - cadena de bacterias esféricas
   */
  private static drawStreptococcusBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Cadena vertical de esferas
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Staphylococcus - racimo de bacterias esféricas
   */
  private static drawStaphylococcusBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Racimo (cluster) irregular
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
  }

  /**
   * Vibrio - bacteria en forma de coma
   */
  private static drawVibroBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Forma curva (como una coma)
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Bacteria filamentosa - cadena larga
   */
  private static drawFilamentousBacteria(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Cadena larga y delgada
    for (let r = 0; r < Math.min(6, height); r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
      // Agregar ramificaciones ocasionales
      if (r === 2) {
        this.setPixel(bitmap, colorMap, centerCol - 1, startRow + r, 1, this.COLORS.RED);
      }
      if (r === 4) {
        this.setPixel(bitmap, colorMap, centerCol + 1, startRow + r, 1, this.COLORS.RED);
      }
    }
  }

  /**
   * Forma de vegetación - estructura de planta con múltiples variaciones
   * Diferentes tipos de árboles y plantas basados en generación procedural
   */
  private static drawVegetationForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Usar el generador RNG para determinar el tipo de vegetación aleatoriamente
    const hash = Math.floor(rng.random() * 6);
    
    switch (hash) {
      case 0:
        this.drawTreeForm(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 1:
        this.drawBushForm(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 2:
        this.drawPalmTreeForm(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 3:
        this.drawFlowerForm(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 4:
        this.drawConiferForm(bitmap, colorMap, centerCol, startRow, height);
        break;
      default:
        this.drawFernForm(bitmap, colorMap, centerCol, startRow, height);
    }
  }

  /**
   * Árbol clásico con copa redondeada
   */
  private static drawTreeForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Copa/hojas (parte superior) - forma redondeada
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    
    // Segunda fila de copa - más amplia
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
    
    // Tronco principal (vertical)
    for (let r = 2; r < height - 1; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Sistema de raíces
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Arbusto bajo y frondoso
   */
  private static drawBushForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Copa baja pero amplia
    const midHeight = Math.floor(height / 2);
    
    // Parte superior del arbusto
    for (let r = 0; r < midHeight; r++) {
      const width = Math.max(1, 3 - Math.abs(r - 1));
      for (let c = -width; c <= width; c++) {
        if (Math.abs(c) <= width) {
          this.setPixel(bitmap, colorMap, centerCol + c, startRow + r, 1, this.COLORS.RED);
        }
      }
    }
    
    // Tallo corto
    for (let r = midHeight; r < height - 1; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Raíces dispersas
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Palmera con hojas largas
   */
  private static drawPalmTreeForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Hojas de palmera (extendidas)
    this.setPixel(bitmap, colorMap, centerCol - 3, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 3, startRow, 1, this.COLORS.RED);
    
    // Segunda fila de hojas
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
    
    // Tronco ligeramente curvado
    for (let r = 2; r < height - 1; r++) {
      const offset = r % 2 === 0 ? 0 : (r % 4 === 2 ? 1 : -1);
      this.setPixel(bitmap, colorMap, centerCol + offset, startRow + r, 1, this.COLORS.RED);
    }
    
    // Base amplia
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Flor con pétalos
   */
  private static drawFlowerForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Pétalos en forma de cruz
    this.setPixel(bitmap, colorMap, centerCol, startRow - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    
    // Tallo delgado
    for (let r = 2; r < height - 1; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Raíz pequeña
    this.setPixel(bitmap, colorMap, centerCol, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Conífera con forma triangular
   */
  private static drawConiferForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Forma triangular de conífera
    const midHeight = Math.floor(height * 0.8);
    
    for (let r = 0; r < midHeight; r++) {
      const width = Math.min(2, Math.floor(r / 2));
      for (let c = -width; c <= width; c++) {
        this.setPixel(bitmap, colorMap, centerCol + c, startRow + r, 1, this.COLORS.RED);
      }
    }
    
    // Tronco
    for (let r = midHeight; r < height - 1; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Base
    this.setPixel(bitmap, colorMap, centerCol, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Helecho con frondas
   */
  private static drawFernForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Frondas curvadas
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow, 1, this.COLORS.RED);
    
    // Más frondas en diferentes niveles
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    
    // Tallo central
    for (let r = 3; r < height - 1; r++) {
      this.setPixel(bitmap, colorMap, centerCol, startRow + r, 1, this.COLORS.RED);
    }
    
    // Sistema de raíces subterráneas
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + height - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + height - 1, 1, this.COLORS.RED);
  }

  /**
   * Forma de animal-vegetal - múltiples tipos de organismos híbridos
   * Diferentes combinaciones de características vegetales y animales
   */
  private static drawVegetableAnimalForm(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Usar el generador RNG para determinar el tipo de híbrido aleatoriamente
    const hybridType = Math.floor(rng.random() * 6);
    
    switch (hybridType) {
      case 0:
        this.drawTreentHybrid(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 1:
        this.drawCoralAnimalHybrid(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 2:
        this.drawWalkingPlantHybrid(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 3:
        this.drawPhotosynthethicAnimalHybrid(bitmap, colorMap, centerCol, startRow, height);
        break;
      case 4:
        this.drawMyceliaNeuralHybrid(bitmap, colorMap, centerCol, startRow, height);
        break;
      default:
        this.drawFlowerBeastHybrid(bitmap, colorMap, centerCol, startRow, height);
    }
  }

  /**
   * Treent/Ent - árbol con capacidades animales
   */
  private static drawTreentHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Copa de árbol con "ojos"
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED); // "ojos"
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    
    // Ramas como brazos
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    // Tronco móvil
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
    
    // Raíces como pies
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Coral animal - estructura coral con capacidades de movimiento
   */
  private static drawCoralAnimalHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Estructura ramificada como coral
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    
    // Tentáculos/pólipos animales
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    // Base móvil
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
  }

  /**
   * Planta caminante - planta con patas
   */
  private static drawWalkingPlantHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Hojas/flores superiores
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    
    // Tallo con brazos
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    // Patas como animal
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 5, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 5, 1, this.COLORS.RED);
  }

  /**
   * Animal fotosintético - animal que realiza fotosíntesis
   */
  private static drawPhotosynthethicAnimalHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // "Cabeza" con capacidad fotosintética
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    
    // Extensiones fotosintéticas (como hojas)
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 1, 1, this.COLORS.RED);
    
    // Cuerpo animal
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    
    // Extremidades de locomoción
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Red micelial neural - organismo tipo hongo con inteligencia distribuida
   */
  private static drawMyceliaNeuralHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // Cuerpo frutal central
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    
    // Red neuronal/micelial extendida
    this.setPixel(bitmap, colorMap, centerCol - 2, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 2, startRow + 2, 1, this.COLORS.RED);
    
    // Conexiones subterráneas
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 3, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Bestia-flor - criatura animal que se camufla como flor
   */
  private static drawFlowerBeastHybrid(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number): void {
    // "Pétalos" que son en realidad apéndices sensoriales
    this.setPixel(bitmap, colorMap, centerCol, startRow - 1, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 1, 1, this.COLORS.RED);
    
    // Centro animal (boca/órganos)
    this.setPixel(bitmap, colorMap, centerCol, startRow, 1, this.COLORS.RED);
    
    // Tallo que es en realidad columna vertebral
    this.setPixel(bitmap, colorMap, centerCol, startRow + 2, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 3, 1, this.COLORS.RED);
    
    // Sistema de anclaje/garras
    this.setPixel(bitmap, colorMap, centerCol - 1, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol, startRow + 4, 1, this.COLORS.RED);
    this.setPixel(bitmap, colorMap, centerCol + 1, startRow + 4, 1, this.COLORS.RED);
  }

  /**
   * Agrega características aleatorias para crear variaciones
   */
  private static addRandomFeatures(bitmap: number[], colorMap: number[], centerCol: number, startRow: number, height: number, rng: { random: () => number }): void {
    // Agregar puntos aleatorios para crear variaciones visuales
    for (let i = 0; i < 3; i++) {
      const randomRow = startRow + Math.floor(rng.random() * height);
      const randomCol = centerCol + Math.floor(rng.random() * 6) - 3; // -3 a +2
      
      if (rng.random() < 0.5) {
        this.setPixel(bitmap, colorMap, randomCol, randomRow, 1, this.COLORS.RED);
      }
    }
  }
}