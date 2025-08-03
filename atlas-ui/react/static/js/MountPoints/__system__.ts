import React from 'react';
import { createRoot } from 'react-dom/client';
import SystemLayout from '../Layouts/__system__.tsx';

console.log('Atlas System React script loading...');

interface SystemProps {
  system: {
    name: string;
    index: number;
    star_system_type: string;
    num_planets: number;
    stars: Array<{
      Type: string;
      Size: string;
      Color: string;
    }>;
    planets: Array<{
      name: string;
    }>;
  };
  galaxy: {
    name: string;
    coordinates: number[];
  };
  system_url: string;
  version: string;
  system_index: number;
  image_url?: string;
  page: number;
  cosmic_origin_time: number;
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, starting System React app...');
  
  try {
    // Get data from JSON scripts in HTML
    const systemDataElement = document.getElementById('system-data');
    const galaxyDataElement = document.getElementById('galaxy-data');
    const metaDataElement = document.getElementById('meta-data');
    
    if (!systemDataElement || !galaxyDataElement || !metaDataElement) {
      console.error('Missing required data elements');
      return;
    }

    const systemData = JSON.parse(systemDataElement.textContent || '{}');
    const galaxyData = JSON.parse(galaxyDataElement.textContent || '{}');
    const metaData = JSON.parse(metaDataElement.textContent || '{}');

    const props: SystemProps = {
      system: systemData,
      galaxy: galaxyData,
      system_url: metaData.system_url,
      version: metaData.version,
      system_index: metaData.system_index,
      image_url: metaData.image_url,
      page: metaData.page || 1,
      cosmic_origin_time: metaData.cosmic_origin_time
    };

    // Render React app
    const container = document.getElementById('atlas-react-root');
    if (container) {
      const root = createRoot(container);
      root.render(React.createElement(SystemLayout, props));
      console.log('System React app rendered successfully!');
    }
  } catch (error) {
    console.error('Error initializing System React app:', error);
  }
});