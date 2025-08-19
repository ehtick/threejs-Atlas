# 🎭 ANOMALY EFFECTS SHOWCASE MODE

## 🚀 ESTADO ACTUAL: TODOS LOS EFECTOS ACTIVOS

Los planetas Anomaly están mostrando **TODOS** los efectos simultáneamente para evaluación:

### ✨ Efectos Activos:
1. **AnomalyGlitchField** - Interferencias electrónicas holográficas (aparece/desaparece)
2. **AnomalyVoidSphere** - Mini agujeros negros que absorben luz
3. **AnomalyPhaseMatter** - Materia en múltiples estados cuánticos
4. **AnomalyGeometricMorph** - Transformaciones orgánicas viscosas (ramas, zarcillos, venas)
5. **AnomalyGravityWell** - Sistema gravitacional con absorción/eyección periódica

## 🎯 INSTRUCCIONES PARA EVALUACIÓN:

1. **Ver en acción**: Carga un planeta Anomaly y observa todos los efectos
2. **Evaluar cada uno**: Nota cuáles te gustan más
3. **Decidir**: Elige qué efectos mantener activos

## 🔧 CÓMO VOLVER AL MODO SELECTIVO:

Cuando hayas decidido qué efectos mantener, edita:
**`/react/static/js/3DEffects/EffectRegistry.tsx`** líneas **976-990** y **1039-1053**

### Reemplazar este código:
```typescript
// 🚀 MODO SHOWCASE: ACTIVAR TODOS LOS EFECTOS PARA EVALUACIÓN
const allAnomalyEffects = [
  EffectType.ANOMALY_GLITCH_FIELD,
  EffectType.ANOMALY_VOID_SPHERE,
  EffectType.ANOMALY_PHASE_MATTER,
  EffectType.ANOMALY_GEOMETRIC_MORPH,
  EffectType.ANOMALY_GRAVITY_WELL
];

const selectedEffects = allAnomalyEffects;
```

### Por este código (ejemplo):
```typescript
// Efectos seleccionados después de evaluación
const selectedEffects = [
  EffectType.ANOMALY_GEOMETRIC_MORPH,    // Mantener - patrones orgánicos
  EffectType.ANOMALY_GRAVITY_WELL,       // Mantener - absorción/eyección
  EffectType.ANOMALY_GLITCH_FIELD,       // Mantener - hologramas electrónicos
  // EffectType.ANOMALY_VOID_SPHERE,     // Quitar si no te gusta
  // etc...
];
```

## 📊 RECOMENDACIONES:

### 🟢 **Efectos Sutiles** (recomendados para uso normal):
- `AnomalyGeometricMorph` - Elegante y único
- `AnomalyGravityWell` - Físicamente realista

### 🟡 **Efectos Moderados**:
- `AnomalyTemporalRift` - Visualmente interesante
- `AnomalyVoidSphere` - Impactante pero no excesivo

### 🔴 **Efectos Intensos** (usar con moderación):
- `AnomalyGlitchField` - Muy llamativo
- `AnomalyQuantumFlux` - Muchas partículas
- `AnomalyPhaseMatter` - Complejo visualmente

## 🎮 COMBINACIONES SUGERIDAS:

1. **Sutil**: Solo `GeometricMorph` + `GravityWell`
2. **Balanceado**: `GeometricMorph` + `TemporalRift`
3. **Dramático**: `VoidSphere` + `GlitchField`
4. **Científico**: `QuantumFlux` + `PhaseMatter`

¡Evalúa y decide qué combinación funciona mejor para tu visión! 🌌