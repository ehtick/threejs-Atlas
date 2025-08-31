// atlas-ui/react/static/js/Utils/UniverseTime.tsx

export function getUniverseTime(cosmicOriginTime: number): number {
  return Date.now() / 1000 - cosmicOriginTime;
}
export function getAnimatedUniverseTime(cosmicOriginTime: number, timeSpeed: number = 1.0, startOffset: number = 0): number {
  const universeTime = getUniverseTime(cosmicOriginTime);
  return startOffset + universeTime * timeSpeed;
}
export const DEFAULT_COSMIC_ORIGIN_TIME = 514080000;
