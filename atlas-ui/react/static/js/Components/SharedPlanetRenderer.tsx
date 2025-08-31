// atlas-ui/react/static/js/Components/SharedPlanetRenderer.tsx
import React, { useRef, useEffect } from "react";
import { ModularPlanetRenderer } from "../3DComponents/ModularPlanetRenderer";

interface Planet {
  name: string;
  planet_type: string;
  atmosphere: string;
  life_forms: string;
  mass: number;
  diameter: number;
  density: number;
  gravity: number;
  orbital_radius: number;
  orbital_period_seconds: number;
  orbital_speed: number;
  axial_tilt: number;
  rotation_period_seconds: number;
  surface_temperature: number;
  elements: string[];
}

interface SharedPlanetRendererProps {
  planet: Planet;
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
  autoRotate?: boolean;
  enableControls?: boolean;
  showDebugInfo?: boolean;
  containerClassName?: string;
  sharedDataRef: React.MutableRefObject<any>;
  onDataLoaded?: (data: any) => void;
}

// Global cache for planet data to ensure both instances use identical data
const planetDataCache = new Map<string, any>();

export const SharedPlanetRenderer: React.FC<SharedPlanetRendererProps> = ({
  planet,
  cosmicOriginTime,
  initialAngleRotation,
  autoRotate = true,
  enableControls = true,
  showDebugInfo = true,
  containerClassName = "w-full h-full",
  sharedDataRef,
  onDataLoaded
}) => {
  const cacheKey = `${planet.name}_${cosmicOriginTime || 'default'}`;
  
  const handleDataLoaded = (data: any) => {
    // Cache the data globally so both instances use the same seeds/timing
    planetDataCache.set(cacheKey, data);
    sharedDataRef.current = data;
    
    if (onDataLoaded) {
      onDataLoaded(data);
    }
  };

  // If we have cached data, provide it to ensure deterministic rendering
  const cachedData = planetDataCache.get(cacheKey);
  const shouldUseCache = cachedData && sharedDataRef.current;

  return (
    <ModularPlanetRenderer
      planetName={planet.name}
      containerClassName={containerClassName}
      autoRotate={autoRotate}
      enableControls={enableControls}
      showDebugInfo={showDebugInfo}
      planetData={{
        name: planet.name,
        diameter: planet.diameter,
        density: planet.density,
        gravity: planet.gravity,
        mass: planet.mass,
        orbital_radius: planet.orbital_radius,
        rotation_period_seconds: planet.rotation_period_seconds,
        surface_temperature: planet.surface_temperature,
        axial_tilt: planet.axial_tilt,
        planet_type: planet.planet_type,
        atmosphere: planet.atmosphere,
        elements: planet.elements,
      }}
      cosmicOriginTime={cosmicOriginTime}
      initialAngleRotation={initialAngleRotation}
      onDataLoaded={handleDataLoaded}
      // Force using cached data if available to ensure both instances are identical
      key={shouldUseCache ? `${cacheKey}_cached` : `${cacheKey}_fresh`}
    />
  );
};