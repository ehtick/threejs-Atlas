import React from 'react';
import { ModularPlanetRenderer } from './ModularPlanetRenderer';

interface ModularPlanetRendererProps {
  planetName: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  enableControls?: boolean;
  showDebugInfo?: boolean;
  planetData?: {
    diameter: number;
    density: number;
    gravity: number;
    mass: number;
    orbital_radius: number;
    orbital_period_seconds?: number; // Añadido para cálculo orbital
    rotation_period_seconds: number;
    surface_temperature: number;
    axial_tilt: number;
    planet_type: string;
    atmosphere: string;
    elements: string[];
    initial_orbital_angle?: number; // Añadido para posición orbital inicial
  };
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
  onDataLoaded?: (data: any) => void;
  onError?: (error: string) => void;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('🚨 ErrorBoundary caught error:', error);
    console.error('🚨 Error stack:', error.stack);
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 componentDidCatch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center w-full h-full bg-gray-900/50 rounded">
          <div className="text-center p-4">
            <div className="text-red-400 text-sm mb-2">3D Renderer Error</div>
            <div className="text-xs text-gray-400">{this.state.error}</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const ModularPlanetRendererWrapper: React.FC<ModularPlanetRendererProps> = (props) => {
  return (
    <ErrorBoundary>
      <ModularPlanetRenderer {...props} />
    </ErrorBoundary>
  );
};