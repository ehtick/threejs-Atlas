import React from 'react';
import { createRoot } from 'react-dom/client';
import PlanetLayout from '../Layouts/__planet__.tsx';

console.log('Atlas Planet React script loading...');

interface PlanetProps {
  planet: {
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
    index?: number; // Planet index within the system
  };
  system: {
    name: string;
    index: number;
  };
  galaxy: {
    name: string;
    coordinates: number[];
  };
  planet_url: string;
  version: string;
  image_url?: string;
  cosmic_origin_time: number;
  initial_angle_rotation: number;
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, starting Planet React app...');
  
  try {
    // Get data from JSON scripts in HTML
    const planetDataElement = document.getElementById('planet-data');
    const systemDataElement = document.getElementById('system-data');
    const galaxyDataElement = document.getElementById('galaxy-data');
    const metaDataElement = document.getElementById('meta-data');
    
    if (!planetDataElement || !systemDataElement || !galaxyDataElement || !metaDataElement) {
      console.error('Missing required data elements');
      return;
    }

    const planetData = JSON.parse(planetDataElement.textContent || '{}');
    const systemData = JSON.parse(systemDataElement.textContent || '{}');
    const galaxyData = JSON.parse(galaxyDataElement.textContent || '{}');
    const metaData = JSON.parse(metaDataElement.textContent || '{}');

    const props: PlanetProps = {
      planet: planetData,
      system: systemData,
      galaxy: galaxyData,
      planet_url: metaData.planet_url,
      version: metaData.version,
      image_url: metaData.image_url,
      cosmic_origin_time: metaData.cosmic_origin_time,
      initial_angle_rotation: metaData.initial_angle_rotation
    };

    // Render React app
    const container = document.getElementById('atlas-react-root');
    if (container) {
      const root = createRoot(container);
      root.render(React.createElement(PlanetLayout, props));
      console.log('Planet React app rendered successfully!');
    }
  } catch (error) {
    console.error('Error initializing Planet React app:', error);
  }
});