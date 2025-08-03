import React from 'react';
import { createRoot } from 'react-dom/client';
import GalaxyLayout from '../Layouts/__galaxy__.tsx';

console.log('Atlas Galaxy React script loading...');

// Mount React component when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, mounting Galaxy React component...');
  
  const rootElement = document.getElementById('atlas-react-root');
  if (!rootElement) {
    console.error('Could not find atlas-react-root element');
    return;
  }

  // Extract props from window or data attributes
  const props = (window as any).galaxyProps || {
    galaxy: {
      name: 'Unknown Galaxy',
      coordinates: [0, 0, 0],
      galaxy_type: 'Unknown',
      num_systems: 0,
      black_holes: 0,
      pulsars: 0,
      quasars: 0
    },
    systems: [],
    galaxy_url: '#',
    version: '1.0.0',
    page: 1,
    finish: 1
  };

  const root = createRoot(rootElement);
  root.render(React.createElement(GalaxyLayout, props));
  
  console.log('Galaxy React component mounted successfully!');
});