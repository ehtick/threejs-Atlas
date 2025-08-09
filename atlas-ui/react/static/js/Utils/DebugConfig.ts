/**
 * Configuración global de depuración
 *
 * Estas variables controlan funcionalidades de depuración y desarrollo
 * que normalmente no deben estar visibles en producción.
 */

export const DebugConfig = {
  // Control de efectos 3D - mostrar checkboxes para activar/desactivar efectos
  ENABLE_EFFECTS_CONTROL: true,

  // Logs detallados de efectos
  ENABLE_EFFECTS_LOGGING: true,

  // Mostrar información de debug en consola
  ENABLE_DEBUG_LOGS: true,
} as const;

// También exportar como variables individuales para facilidad de uso
export const ENABLE_EFFECTS_CONTROL = DebugConfig.ENABLE_EFFECTS_CONTROL;
export const ENABLE_EFFECTS_LOGGING = DebugConfig.ENABLE_EFFECTS_LOGGING;
export const ENABLE_DEBUG_LOGS = DebugConfig.ENABLE_DEBUG_LOGS;
