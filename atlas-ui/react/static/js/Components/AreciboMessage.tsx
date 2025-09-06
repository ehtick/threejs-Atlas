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

const AreciboMessage: React.FC<AreciboMessageProps> = ({ lifeForm, planetName, className = "", scale = 32, showControls = true, showInfo = true }) => {
  const [messageData, setMessageData] = useState<AreciboMessageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const revealProgressRef = useRef(0);
  const staticNoiseRef = useRef<number[][]>([]);
  const revealedPixelsRef = useRef<Set<number>>(new Set());
  const revealedBackgroundRef = useRef<Set<number>>(new Set());
  const signalStrengthRef = useRef(0);

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

    // Initialize static noise and revealed pixels
    const initializeRadioStatic = () => {
      const staticNoise: number[][] = [];
      
      for (let y = 0; y < messageData.height; y++) {
        staticNoise[y] = [];
        for (let x = 0; x < messageData.width; x++) {
          staticNoise[y][x] = Math.random(); // Random noise value 0-1
        }
      }
      
      staticNoiseRef.current = staticNoise;
      revealedPixelsRef.current = new Set();
      revealedBackgroundRef.current = new Set();
      signalStrengthRef.current = 0;
    };

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

    // Radio static animation function
    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const progress = revealProgressRef.current;
      const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600', '#FF0000', '#FFFF00', '#B19CD9'];
      
      // Update signal strength (0 to 1 over time)
      signalStrengthRef.current = Math.min(1, progress * 1.5);
      const signalStrength = signalStrengthRef.current;
      
      // Phase 1: Static noise (0-0.467) - 700ms of 1500ms total
      // Phase 2: Message pixel reveal (0.467-1.0) - 800ms of 1500ms total
      
      for (let y = 0; y < messageData.height; y++) {
        for (let x = 0; x < messageData.width; x++) {
          const index = y * messageData.width + x;
          
          // Update static noise occasionally
          if (Math.random() < 0.15) {
            staticNoiseRef.current[y][x] = Math.random();
          }
          
          const noiseValue = staticNoiseRef.current[y][x];
          
          if (progress < 0.467) {
            // Phase 1: Pure TV static (grayscale noise)
            const grayLevel = Math.floor(noiseValue * 255);
            ctx.fillStyle = `rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`;
            ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
            
          } else {
            // Phase 2: Message pixel reveal
            const revealProgress = (progress - 0.467) / 0.533; // 0 to 1
            const pixelIndex = index;
            
            if (messageData.bitmap[index] === 1) {
              // This should be a message pixel - constant probability reveal (2x speed)
              if (!revealedPixelsRef.current.has(pixelIndex) && Math.random() < 0.06) {
                revealedPixelsRef.current.add(pixelIndex);
              }
              
              if (revealedPixelsRef.current.has(pixelIndex)) {
                // Revealed pixel - show final color
                const colorIndex = messageData.colorMap[index] || 1;
                ctx.fillStyle = colors[colorIndex] || '#FFFFFF';
                ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
              } else {
                // Not yet revealed - show static
                const grayLevel = Math.floor(noiseValue * 255);
                ctx.fillStyle = `rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`;
                ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
              }
            } else {
              // Background pixel - transition directly from static to black background (2x speed)
              if (revealProgress > 0.3 && !revealedBackgroundRef.current.has(pixelIndex) && Math.random() < 0.04) {
                revealedBackgroundRef.current.add(pixelIndex);
              }
              
              if (!revealedBackgroundRef.current.has(pixelIndex)) {
                // Still showing static
                const grayLevel = Math.floor(noiseValue * 255);
                ctx.fillStyle = `rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`;
                ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
              }
              // If revealed, don't draw anything (black background shows through)
            }
          }
        }
      }

      // Check if animation is complete (all pixels revealed)
      const totalMessagePixels = messageData.bitmap.filter(p => p === 1).length;
      const totalBackgroundPixels = messageData.bitmap.filter(p => p === 0).length;
      const revealedMessageCount = revealedPixelsRef.current.size;
      const revealedBackgroundCount = revealedBackgroundRef.current.size;
      const isPhase2 = progress >= 0.467;
      
      // Continue animation until all pixels are revealed (or time limit as backup)
      const animationComplete = isPhase2 && revealedMessageCount >= totalMessagePixels && revealedBackgroundCount >= totalBackgroundPixels;
      
      if (!animationComplete && revealProgressRef.current < 3) { // 3 second backup limit
        revealProgressRef.current += 1 / 90; // Keep same timing increment
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    // Start animation or render final state
    if (isAnimating) {
      revealProgressRef.current = 0;
      initializeRadioStatic(); // Initialize radio static
      // Start animation immediately without delay
      requestAnimationFrame(() => animate());
    } else {
      // Render final state exactly like animation (sin cuadrícula explícita)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const colors = ['#000000', '#FFFFFF', '#9966CC', '#00FF00', '#0066FF', '#FF6600', '#FF0000', '#FFFF00', '#B19CD9'];
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
            width: "auto",
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