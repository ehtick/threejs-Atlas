// atlas-ui/react/static/js/Components/AreciboMessage.tsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { AreciboGenerator, AreciboConfig, AreciboMessage as AreciboMessageType } from "../Utils/LifeAreciboTranslator";

interface AreciboMessageProps {
  lifeForm: string;
  planetName: string;
  className?: string;
  scale?: number;
  showControls?: boolean;
  showInfo?: boolean;
}

const AreciboMessage: React.FC<AreciboMessageProps> = ({ lifeForm, planetName, className = "", scale = 16, showControls = true, showInfo = true }) => {
  const [messageData, setMessageData] = useState<AreciboMessageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const revealProgressRef = useRef(0);

  // Generate message data asynchronously
  useEffect(() => {
    const generateMessage = async () => {
      setIsLoading(true);
      try {
        const config: AreciboConfig = {
          lifeForm,
          planetName,
          width: 23,
          height: 73
        };
        const data = await AreciboGenerator.generate(config);
        setMessageData(data);
      } catch (error) {
        console.error('Error generating Arecibo message:', error);
        // You could set an error state here if needed
      } finally {
        setIsLoading(false);
      }
    };

    generateMessage();
  }, [lifeForm, planetName]);

  useEffect(() => {
    if (!canvasRef.current || !messageData) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = messageData.width * scale;
    canvas.height = messageData.height * scale;

    // Function to draw grid
    const drawGrid = () => {
      if (!ctx) return;
      
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.15;
      
      // Vertical lines
      for (let x = 0; x <= messageData.width; x++) {
        ctx.beginPath();
        ctx.moveTo(x * scale, 0);
        ctx.lineTo(x * scale, messageData.height * scale);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= messageData.height; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * scale);
        ctx.lineTo(messageData.width * scale, y * scale);
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
    };

    // Animation function for revealing the message
    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate how many rows to reveal
      const rowsToReveal = Math.floor(revealProgressRef.current * messageData.height);

      // Draw the message bits with animation using color map (sin cuadrícula durante animación)
      const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600', '#FF0000', '#FFFF00'];
      
      for (let y = 0; y < Math.min(rowsToReveal, messageData.height); y++) {
        for (let x = 0; x < messageData.width; x++) {
          const index = y * messageData.width + x;
          if (messageData.bitmap[index] === 1) {
            // Get color from color map
            const colorIndex = messageData.colorMap[index] || 1;
            ctx.fillStyle = colors[colorIndex] || '#FFFFFF';
            
            // Add a fade effect for recently revealed rows
            const rowAge = (rowsToReveal - y) / 10;
            const opacity = Math.min(1, rowAge * 0.8 + 0.2);
            
            ctx.globalAlpha = opacity;
            ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
          }
        }
      }
      ctx.globalAlpha = 1;

      // Update progress
      if (revealProgressRef.current < 1) {
        revealProgressRef.current += 0.015; // Slightly faster reveal
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        // No hacer render adicional aquí - será manejado por el useEffect
      }
    };

    // Start animation or render final state
    if (isAnimating) {
      revealProgressRef.current = 0;
      animate();
    } else {
      // Render final state exactly like animation (sin cuadrícula explícita)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600', '#FF0000', '#FFFF00'];
      for (let y = 0; y < messageData.height; y++) {
        for (let x = 0; x < messageData.width; x++) {
          const index = y * messageData.width + x;
          if (messageData.bitmap[index] === 1) {
            const colorIndex = messageData.colorMap[index] || 1;
            ctx.fillStyle = colors[colorIndex] || '#FFFFFF';
            ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
          }
        }
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [messageData, scale, isAnimating]);

  const handleReplay = () => {
    setIsAnimating(true);
    revealProgressRef.current = 0;
  };

  if (isLoading) {
    return (
      <div className={`arecibo-message-container ${className}`}>
        <div className="relative border border-green-500/30 rounded bg-black flex items-center justify-center" style={{ minHeight: "300px" }}>
          <div className="text-green-400 text-sm">
            <div className="animate-pulse">Generating Arecibo Message...</div>
            <div className="text-xs text-gray-400 mt-2 text-center">Fetching solar system data...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!messageData) {
    return (
      <div className={`arecibo-message-container ${className}`}>
        <div className="relative border border-red-500/30 rounded bg-black flex items-center justify-center" style={{ minHeight: "300px" }}>
          <div className="text-red-400 text-sm">
            Error generating Arecibo message
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`arecibo-message-container ${className}`}>
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="border border-green-500/30 rounded bg-black"
          style={{
            imageRendering: "pixelated",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        {showControls && !isAnimating && (
          <button
            onClick={handleReplay}
            className="absolute top-2 right-2 px-2 py-1 text-xs bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 rounded transition-colors"
          >
            Replay
          </button>
        )}
      </div>
      
      {showInfo && (
        <div className="mt-2 text-xs text-gray-400">
          <div className="flex justify-between items-center">
            <span>Life Form: <span className="text-green-400">{messageData.lifeForm}</span></span>
            <span>Planet: <span className="text-green-400">{messageData.planetName}</span></span>
          </div>
          <div className="mt-1 text-[10px] text-center">
            <span>73×23 Procedural Arecibo Message</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AreciboMessage;