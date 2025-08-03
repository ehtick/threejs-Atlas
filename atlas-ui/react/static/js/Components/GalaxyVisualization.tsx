import React, { useEffect, useRef, useState } from 'react';

interface GalaxyVisualizationProps {
  galaxyUrl: string;
  imageUrl?: string;
}

const GalaxyVisualization: React.FC<GalaxyVisualizationProps> = ({ galaxyUrl, imageUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [stargateText, setStargateText] = useState('Aligning Stargate...');
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasHidden, setCanvasHidden] = useState(false);

  // Space Travel Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Array<{x: number, y: number, z: number, o: number}> = [];
    const numStars = 800;
    let centerX: number, centerY: number;
    const maxCanvasSize = 800;
    let animationId: number;
    let speed = 0.5;
    let decelerate = false;

    function resizeCanvas() {
      const container = canvas?.parentElement;
      if (!container || !canvas) return;
      
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      canvas.width = Math.min(containerWidth, maxCanvasSize);
      canvas.height = Math.min(containerHeight, maxCanvasSize);

      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    }

    function init() {
      resizeCanvas();
      stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * (canvas?.width || 800),
          y: Math.random() * (canvas?.height || 800),
          z: Math.random() * (canvas?.width || 800),
          o: Math.random(),
        });
      }

      animate();
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.o = Math.random();
        }

        const k = canvas.width / star.z;
        const x = (star.x - centerX) * k + centerX;
        const y = (star.y - centerY) * k + centerY;
        const r = 2 * k;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
      });

      if (!decelerate && speed < 60) {
        speed += 1;
      }

      if (decelerate && speed > 2) {
        speed -= 2;
      }

      animationId = requestAnimationFrame(animate);
    }

    // Handle image loading
    const handleImageLoad = () => {
      decelerate = true;
      setImageLoaded(true);
      setCanvasHidden(true);
      
      setTimeout(() => {
        if (canvas) {
          canvas.style.display = 'none';
        }
      }, 2500);
    };

    init();

    // Add resize listener
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Handle galaxy image loading
  useEffect(() => {
    if (imageUrl) {
      console.log('Loading galaxy image:', imageUrl);
      const highResImg = new Image();
      
      highResImg.onload = () => {
        console.log('Galaxy image loaded successfully');
        if (imageRef.current) {
          imageRef.current.src = imageUrl;
          setImageLoaded(true);
          setCanvasHidden(true);
        }
      };
      
      highResImg.onerror = () => {
        console.error('Failed to load galaxy image:', imageUrl);
        // Fallback - just show placeholder
        setTimeout(() => {
          setImageLoaded(true);
          setCanvasHidden(true);
        }, 1500);
      };
      
      highResImg.src = imageUrl;
    } else {
      console.log('No imageUrl provided, using placeholder');
      // No imageUrl - just show placeholder after delay
      setTimeout(() => {
        setImageLoaded(true);
        setCanvasHidden(true);
      }, 1500);
    }
  }, [imageUrl]);

  // Stargate Animation
  useEffect(() => {
    const animationShown = sessionStorage.getItem('stargateAnimationShown');
    
    if (animationShown) {
      setStargateText('Stargate system aligned');
      return;
    }

    sessionStorage.setItem('stargateAnimationShown', 'true');
    setIsAnimating(true);

    const getRandomString = (chars: string, length: number) => {
      return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    };

    const phases = [
      { chars: '01', duration: 40, iterations: 20 },
      { chars: '0123456789', duration: 25, iterations: 30 },
      { chars: '0123456789ABCDEF', duration: 20, iterations: 40 },
      { chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~', duration: 10, iterations: 100 }
    ];

    let currentPhase = 0;
    let currentIteration = 0;

    const animate = () => {
      if (currentPhase >= phases.length) {
        // Final message typing
        const finalMessage = 'Stargate system aligned';
        let charIndex = 0;
        setStargateText('');
        
        const typeChar = () => {
          if (charIndex < finalMessage.length) {
            setStargateText(finalMessage.substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeChar, 30);
          } else {
            setIsAnimating(false);
          }
        };
        
        typeChar();
        return;
      }

      const phase = phases[currentPhase];
      setStargateText(getRandomString(phase.chars, 32));
      currentIteration++;

      if (currentIteration >= phase.iterations) {
        currentPhase++;
        currentIteration = 0;
      }

      setTimeout(animate, phase.duration);
    };

    animate();
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl overflow-hidden">
      {/* Galaxy Image Container */}
      <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-black/50 flex justify-center items-center rounded-2xl overflow-hidden border-2 border-blue-400/30">
        
        {/* Canvas for space animation */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${
            canvasHidden ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ filter: canvasHidden ? 'blur(50px)' : 'none' }}
        />
        
        {/* Galaxy Image */}
        <img
          ref={imageRef}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-[25px]'
          }`}
          src="/static/images/placeholder-min.jpg"
          alt="Galaxy visualization"
        />
      </div>

      {/* Stargate Container */}
      <div className="p-6 text-center">
        <a 
          href={galaxyUrl}
          className={`inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full border-2 border-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
            isAnimating ? 'animate-pulse' : ''
          }`}
          style={{
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
          }}
        >
          <span className="relative z-10 font-mono">
            {stargateText}
          </span>
          
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />
        </a>
        
        <div className="mt-4 text-xs text-gray-400 max-w-md mx-auto">
          Right-click and select 'Copy Link' to save this Stargate location
        </div>
      </div>

    </div>
  );
};

export default GalaxyVisualization;