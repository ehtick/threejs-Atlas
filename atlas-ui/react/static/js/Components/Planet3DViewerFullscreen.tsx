// atlas-ui/react/static/js/Components/Planet3DViewerFullscreen.tsx
import React, { useEffect } from "react";
import { ModularPlanetRendererWrapper } from "../3DComponents/ModularPlanetRendererWrapper";

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

interface Planet3DViewerFullscreenProps {
  planet: Planet;
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
  onEffectsCreated?: (effects: any[]) => void;
}

const Planet3DViewerFullscreen: React.FC<Planet3DViewerFullscreenProps> = ({ 
  planet, 
  cosmicOriginTime, 
  initialAngleRotation,
  onEffectsCreated 
}) => {
  // Handle keyboard events for fullscreen controls
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      document.dispatchEvent(new CustomEvent("planet-close-fullscreen"));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <ModularPlanetRendererWrapper
        planetName={planet.name}
        containerClassName="w-full h-full"
        autoRotate={false} // Keep same as original
        enableControls={true}
        showDebugInfo={false} // Hide debug info in fullscreen for cleaner look
        // Only pass onEffectsCreated if it's provided (which it shouldn't be)
        {...(onEffectsCreated && { onEffectsCreated })}
        planetData={{
          name: planet.name,
          diameter: planet.diameter,
          density: planet.density,
          gravity: planet.gravity,
          mass: planet.mass,
          orbital_radius: planet.orbital_radius,
          orbital_period_seconds: planet.orbital_period_seconds,
          rotation_period_seconds: planet.rotation_period_seconds,
          surface_temperature: planet.surface_temperature,
          axial_tilt: planet.axial_tilt,
          planet_type: planet.planet_type,
          atmosphere: planet.atmosphere,
          elements: planet.elements,
          initial_orbital_angle: (planet as any).initial_orbital_angle || 0,
        }}
        cosmicOriginTime={cosmicOriginTime}
        initialAngleRotation={initialAngleRotation}
      />
    </div>
  );
};

export default Planet3DViewerFullscreen;