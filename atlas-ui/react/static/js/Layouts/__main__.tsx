import React, { useState } from 'react';
import Header from '../Components/Header.tsx';
import CoordinateSelector from '../Components/CoordinateSelector.tsx';
import VersionFooter from '../Components/VersionFooter.tsx';

interface MainLayoutProps {
  error: string | null;
  version: string;
}

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const MainLayout: React.FC<MainLayoutProps> = ({ error, version }) => {
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({
    x: 1000000,
    y: 1000000,
    z: 1000000
  });

  const handleCoordinateChange = (coordinates: Coordinates) => {
    setCurrentCoordinates(coordinates);
  };

  const handleSubmit = () => {
    // Create a form and submit to Flask
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/navigate';
    
    Object.entries(currentCoordinates).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="atlas-main-layout">
      <Header />
      
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <CoordinateSelector onCoordinateChange={handleCoordinateChange} />
      </form>

      {error && <p className="error">{error}</p>}
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <strong>Current Coordinates:</strong><br />
        X: {currentCoordinates.x.toLocaleString()} | 
        Y: {currentCoordinates.y.toLocaleString()} | 
        Z: {currentCoordinates.z.toLocaleString()}
      </div>
      
      <VersionFooter version={version} />
    </div>
  );
};

export default MainLayout;