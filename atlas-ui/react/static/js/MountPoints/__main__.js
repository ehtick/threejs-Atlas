console.log('Atlas React script loading...');

// Import React dynamically to avoid plugin issues
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, importing React...');
  
  try {
    const React = await import('react');
    const ReactDOM = await import('react-dom/client');
    
    console.log('React imported successfully');
    
    const { useState, createElement: h } = React;
    const { createRoot } = ReactDOM;
    
    function AtlasApp() {
      const [coordinates, setCoordinates] = useState({ x: 1000000, y: 1000000, z: 1000000 });

      const randomizeCoords = () => {
        const maxCoordinate = 10000000;
        setCoordinates({
          x: Math.floor(Math.random() * maxCoordinate),
          y: Math.floor(Math.random() * maxCoordinate),
          z: Math.floor(Math.random() * maxCoordinate)
        });
      };

      const submitCoords = () => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/navigate';
        
        Object.entries(coordinates).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
        
        document.body.appendChild(form);
        form.submit();
      };

      const handleInputChange = (coord, value) => {
        setCoordinates({
          ...coordinates,
          [coord]: parseInt(value) || 0
        });
      };

      const containerStyle = {
        padding: '20px', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
        color: 'white', 
        borderRadius: '12px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      };

      const headerStyle = { textAlign: 'center', marginBottom: '30px' };
      const titleStyle = { fontSize: '2.5rem', marginBottom: '10px' };
      const subtitleStyle = { color: '#bbb', fontSize: '1.1rem' };

      const coordSectionStyle = {
        background: 'rgba(255, 255, 255, 0.05)', 
        padding: '20px', 
        borderRadius: '8px', 
        margin: '20px 0',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      };

      const coordRowStyle = {
        margin: '15px 0', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px'
      };

      const labelStyle = { minWidth: '100px', fontWeight: 'bold' };

      const inputStyle = {
        flex: 1,
        padding: '10px',
        border: '1px solid #0f3460',
        borderRadius: '6px',
        background: '#16213e',
        color: 'white',
        fontSize: '16px'
      };

      const buttonsStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '10px', 
        margin: '20px 0'
      };

      const buttonStyle = {
        padding: '12px 24px',
        background: 'linear-gradient(135deg, #0f3460 0%, #1e4a73 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px'
      };

      const submitButtonStyle = {
        ...buttonStyle,
        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
      };

      const displayStyle = { textAlign: 'center', fontSize: '1.1rem', margin: '20px 0' };

      // Using createElement to build JSX-like structure without JSX syntax
      return h('div', { style: containerStyle }, [
        h('div', { key: 'header', style: headerStyle }, [
          h('h1', { key: 'title', style: titleStyle }, 'Atlas React System'),
          h('p', { key: 'subtitle', style: subtitleStyle }, 'React working with dynamic imports!')
        ]),
        
        h('div', { key: 'coordinates', style: coordSectionStyle }, [
          h('h3', { key: 'coord-title' }, 'Coordinate Selection'),
          
          ...['x', 'y', 'z'].map((coord) => 
            h('div', {
              key: coord,
              style: coordRowStyle
            }, [
              h('label', {
                key: 'label',
                style: labelStyle
              }, `${coord.toUpperCase()} Coordinate:`),
              h('input', {
                key: 'input',
                type: 'number',
                value: coordinates[coord],
                onChange: (e) => handleInputChange(coord, e.target.value),
                min: 0,
                max: 10000000,
                style: inputStyle
              })
            ])
          )
        ]),

        h('div', { key: 'buttons', style: buttonsStyle }, [
          h('button', {
            key: 'test',
            onClick: () => alert('React Dynamic Import System Working! 🚀'),
            style: buttonStyle
          }, 'Test React'),
          h('button', {
            key: 'random',
            onClick: randomizeCoords,
            style: buttonStyle
          }, 'Get Random Coords'),
          h('button', {
            key: 'submit',
            onClick: submitCoords,
            style: submitButtonStyle
          }, 'Initialize Jump')
        ]),

        h('div', { key: 'display', style: displayStyle }, [
          h('strong', { key: 'label' }, 'Current Coordinates:'),
          h('br', { key: 'br' }),
          `X: ${coordinates.x.toLocaleString()} | Y: ${coordinates.y.toLocaleString()} | Z: ${coordinates.z.toLocaleString()}`
        ])
      ]);
    }
    
    const container = document.getElementById('atlas-react-root');
    console.log('Container found:', container);
    
    if (container) {
      console.log('Rendering React app with dynamic imports...');
      const root = createRoot(container);
      root.render(h(AtlasApp));
      console.log('React app rendered successfully!');
    } else {
      console.error('Container atlas-react-root not found!');
    }
    
  } catch (error) {
    console.error('Error loading React:', error);
  }
});