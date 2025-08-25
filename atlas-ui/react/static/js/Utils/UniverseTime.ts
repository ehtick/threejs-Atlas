/**
 * Universe Time Utilities
 * Provides consistent time calculations across all 3D effects
 */

/**
 * Get the current time in seconds since the cosmic origin (Big Bang)
 * This ensures all effects are synchronized to the same universal timeline
 * 
 * @param cosmicOriginTime - The cosmic origin time from configuration
 * @returns Time in seconds since cosmic origin (infinite, no modulo wrapping)
 */
export function getUniverseTime(cosmicOriginTime: number): number {
  return Date.now() / 1000 - cosmicOriginTime;
}

/**
 * Get animated time with a speed multiplier
 * Useful for effects that need custom animation speeds
 * 
 * @param cosmicOriginTime - The cosmic origin time from configuration
 * @param timeSpeed - Speed multiplier (default 1.0)
 * @param startOffset - Optional offset for variation between effects
 * @returns Animated time in seconds
 */
export function getAnimatedUniverseTime(
  cosmicOriginTime: number, 
  timeSpeed: number = 1.0,
  startOffset: number = 0
): number {
  const universeTime = getUniverseTime(cosmicOriginTime);
  return startOffset + (universeTime * timeSpeed);
}

/**
 * Default cosmic origin time fallback
 * Used when cosmicOriginTime is not provided
 */
export const DEFAULT_COSMIC_ORIGIN_TIME = 514080000;