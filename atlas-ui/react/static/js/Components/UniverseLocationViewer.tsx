import React, { useEffect, useRef } from 'react';

interface UniverseLocationViewerProps {
  coordinates: number[];
  galaxyName: string;
}

const UniverseLocationViewer: React.FC<UniverseLocationViewerProps> = ({ coordinates, galaxyName }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cross-section side view canvas sizing - very flat and wide
    const container = canvas.parentElement;
    if (!container) return;
    
    const containerWidth = container.clientWidth - 24; // Account for padding
    const isMobile = containerWidth < 640; // sm breakpoint
    
    // Make it very flat for cross-section view
    const width = containerWidth;
    const height = isMobile ? 80 : 90; // Very flat for side view
    
    canvas.width = width;
    canvas.height = height;

    // Universe bounds
    const MIN_COORD = 0;
    const MAX_COORD = 10000000;
    const BIT_BANG = 5000000;

    // Extract coordinates
    const [x, y, z] = coordinates;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Cross-section side view parameters - show X-Z plane with Y as depth
    const margin = 20;
    const universeWidth = width - (margin * 2);
    const universeHeight = height - (margin * 2);
    const offsetX = margin;
    const offsetY = margin;

    // Draw universe cross-section (side view)
    const drawUniverseSection = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;

      // Main universe boundary (X-Z plane)
      ctx.strokeRect(offsetX, offsetY, universeWidth, universeHeight);

      // Draw grid lines for scale reference
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 0.5;

      // Vertical grid lines (X-axis divisions)
      const gridLines = 10;
      for (let i = 1; i < gridLines; i++) {
        const x = offsetX + (i * universeWidth / gridLines);
        ctx.beginPath();
        ctx.moveTo(x, offsetY);
        ctx.lineTo(x, offsetY + universeHeight);
        ctx.stroke();
      }

      // Horizontal grid lines (Z-axis divisions)
      for (let i = 1; i < gridLines; i++) {
        const y = offsetY + (i * universeHeight / gridLines);
        ctx.beginPath();
        ctx.moveTo(offsetX, y);
        ctx.lineTo(offsetX + universeWidth, y);
        ctx.stroke();
      }

      // Draw axis labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      
      // X-axis label (bottom)
      ctx.fillText('X-Axis (0 → 10M)', offsetX + universeWidth / 2, height - 5);
      
      // Z-axis label (left, rotated)
      ctx.save();
      ctx.translate(8, offsetY + universeHeight / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Z-Axis (0 → 10M)', 0, 0);
      ctx.restore();

      // Y-depth indicator (top right)
      ctx.textAlign = 'right';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '8px sans-serif';
      ctx.fillText('Y-Depth: Color Intensity', width - 5, 12);
    };

    // Draw Bit Bang center point in cross-section
    const drawBitBang = () => {
      // Bit Bang is at 5M,5M,5M - center of universe
      const centerX = offsetX + universeWidth / 2; // X = 5M
      const centerY = offsetY + universeHeight / 2; // Z = 5M
      // Y-depth = 5M = center, so full opacity

      const bitBangSize = Math.max(Math.min(universeWidth, universeHeight) / 40, 4);
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, bitBangSize, 0, 2 * Math.PI);
      ctx.fill();

      // Glow effect with cross pattern to show it's the center
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(centerX, centerY, bitBangSize * 0.8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw cross lines to emphasize center
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(offsetX, centerY);
      ctx.lineTo(offsetX + universeWidth, centerY);
      ctx.stroke();
      
      // Vertical line
      ctx.beginPath();
      ctx.moveTo(centerX, offsetY);
      ctx.lineTo(centerX, offsetY + universeHeight);
      ctx.stroke();
      
      ctx.setLineDash([]);
    };

    // Calculate galaxy position in cross-section view
    const drawGalaxyPosition = () => {
      // Normalize coordinates to universe space (0-1)
      const normalizedX = (x - MIN_COORD) / (MAX_COORD - MIN_COORD);
      const normalizedY = (y - MIN_COORD) / (MAX_COORD - MIN_COORD);
      const normalizedZ = (z - MIN_COORD) / (MAX_COORD - MIN_COORD);

      // Map to cross-section coordinates (X-Z plane)
      const galaxyX = offsetX + (normalizedX * universeWidth);
      const galaxyZ = offsetY + (normalizedZ * universeHeight);

      // Use Y-coordinate for color intensity (depth effect)
      const depthOpacity = 0.3 + (normalizedY * 0.7); // 0.3 to 1.0 opacity

      const galaxySize = Math.max(Math.min(universeWidth, universeHeight) / 50, 3);
      
      // Draw galaxy point with depth-based color
      ctx.fillStyle = `rgba(100, 200, 255, ${depthOpacity})`;
      ctx.beginPath();
      ctx.arc(galaxyX, galaxyZ, galaxySize, 0, 2 * Math.PI);
      ctx.fill();

      // Glow effect (more intense for higher Y values)
      ctx.shadowColor = `rgba(100, 200, 255, ${depthOpacity * 0.8})`;
      ctx.shadowBlur = Math.max(galaxySize * 2, 6);
      ctx.beginPath();
      ctx.arc(galaxyX, galaxyZ, galaxySize * 0.8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw connection line to Bit Bang if close enough
      const distance = Math.sqrt(
        Math.pow(x - BIT_BANG, 2) + 
        Math.pow(y - BIT_BANG, 2) + 
        Math.pow(z - BIT_BANG, 2)
      );

      if (distance < 2000000) { // Within 2M units
        const centerX = offsetX + universeWidth / 2;
        const centerY = offsetY + universeHeight / 2;

        ctx.strokeStyle = `rgba(255, 200, 100, ${0.3 + depthOpacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(galaxyX, galaxyZ);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      return { galaxyX, galaxyZ, depthOpacity };
    };

    // Render everything
    drawUniverseSection();
    drawBitBang();
    const galaxyPos = drawGalaxyPosition();

    // Format galaxy name for display
    const formatGalaxyName = (name: string) => {
      return name.replace(/_/g, ' ');
    };

    // Add labels for cross-section view
    const labelFontSize = Math.max(Math.min(universeWidth, universeHeight) / 25, 8);
    const coordFontSize = Math.max(Math.min(universeWidth, universeHeight) / 30, 7);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = `${labelFontSize}px sans-serif`;
    ctx.textAlign = 'center';
    
    // Bit Bang label
    const centerX = offsetX + universeWidth / 2;
    const centerY = offsetY + universeHeight / 2;
    ctx.fillText('Bit Bang', centerX, centerY - labelFontSize - 5);
    
    // Galaxy name label with Y-depth info
    let displayName = formatGalaxyName(galaxyName);
    if (isMobile && displayName.length > 15) {
      displayName = displayName.substring(0, 15) + '...';
    }
    
    ctx.fillStyle = `rgba(255, 255, 255, ${galaxyPos.depthOpacity})`;
    ctx.fillText(displayName, galaxyPos.galaxyX, galaxyPos.galaxyZ - labelFontSize - 3);
    
    // Y-depth indicator for galaxy
    ctx.font = `${coordFontSize}px monospace`;
    ctx.fillStyle = `rgba(200, 200, 200, ${galaxyPos.depthOpacity * 0.8})`;
    const yFormatted = ((y - MIN_COORD) / (MAX_COORD - MIN_COORD) * 100).toFixed(1);
    ctx.fillText(`Y: ${yFormatted}%`, galaxyPos.galaxyX, galaxyPos.galaxyZ + labelFontSize + 8);

    // Coordinate display
    const formatCoord = (coord: number) => {
      if (coord >= 1000000) return `${(coord / 1000000).toFixed(1)}M`;
      if (coord >= 1000) return `${(coord / 1000).toFixed(1)}K`;
      return coord.toString();
    };

    ctx.font = `${coordFontSize}px monospace`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.textAlign = 'left';
    ctx.fillText(
      `Position: ${formatCoord(x)}, ${formatCoord(y)}, ${formatCoord(z)}`, 
      offsetX, 
      height - 8
    );

  }, [coordinates, galaxyName]);

  // Add resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Trigger re-render on resize
      const canvas = canvasRef.current;
      if (canvas) {
        // Force re-render by changing a dependency
        canvas.style.opacity = '0.99';
        setTimeout(() => {
          if (canvas) canvas.style.opacity = '1';
        }, 50);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-xs text-gray-300 mb-2">Universe Location</div>
      <canvas 
        ref={canvasRef}
        className="border border-white/20 rounded bg-black/20 max-w-full"
        style={{ imageRendering: 'crisp-edges' }}
      />
      <div className="text-xs text-gray-400 mt-2 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full opacity-90"></div>
            <span>Bit Bang</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>This Galaxy</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-xs">Cross-section: X-Z plane</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniverseLocationViewer;