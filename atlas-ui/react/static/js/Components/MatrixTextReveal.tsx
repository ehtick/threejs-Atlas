// atlas-ui/react/static/js/Components/MatrixTextReveal.tsx
import React, { useState, useEffect, useRef } from "react";

interface MatrixTextRevealProps {
  seedData?: {
    primordial_seed: string;
    sha256_seed: string;
    decimal_seed: string;
    cosmic_origin_time?: number;
    cosmic_origin_datetime?: string;
  } | null;
  onComplete?: () => void;
}

const MatrixTextReveal: React.FC<MatrixTextRevealProps> = ({ seedData, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"genesis" | "nucleosynthesis" | "quantum" | "digital" | "cosmic" | "universe" | "complete">("genesis");
  const [currentSeedDisplay, setCurrentSeedDisplay] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [universeIntensity, setUniverseIntensity] = useState(0.2);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, size: number, color: string, opacity: number}>>([]);
  const [showFullSeed, setShowFullSeed] = useState(false);
  const cosmicRainRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  const titleText = "COSMIC GENESIS PROTOCOL";
  const subtitleText = "Universal Constants Initialization";
  
  // Use actual seeds from API or fallback - always show full decimal seed
  const primordialSeed = seedData?.primordial_seed || "COSMOS-" + Date.now() + "-GENESIS";
  const sha256Seed = seedData?.sha256_seed || Array.from({length: 64}, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join("").toUpperCase();
  
  // Always show the full 77-digit decimal seed
  const decimalSeed = seedData?.decimal_seed || Array.from({length: 77}, () => Math.floor(Math.random() * 10)).join("");
  
  // Format for display with proper spacing
  const formatDecimalSeedForDisplay = (decimal: string) => {
    return decimal.replace(/(.{8})/g, '$1 ').trim();
  };

  // Smooth cosmic background effect
  useEffect(() => {
    if (!cosmicRainRef.current) return;

    const canvas = cosmicRainRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvas();
    window.addEventListener('resize', updateCanvas);

    // Gentle particles for smooth background
    const particleCount = Math.min(20, Math.floor(window.innerWidth / 80));
    const particles: Array<{x: number, y: number, opacity: number, speed: number, size: number}> = [];

    // Initialize particles with varied properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.3,
        size: 1 + Math.random() * 1.5
      });
    }

    let animationId: number;
    let lastTime = 0;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < 60) { // Smoother 16fps
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;
      
      // Subtle background clear for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gentle floating particles
      particles.forEach((particle, i) => {
        const alpha = particle.opacity * universeIntensity * 0.6;
        ctx.fillStyle = `rgba(100, 200, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Gentle floating movement
        particle.y += particle.speed;
        particle.x += Math.sin(currentTime * 0.001 + i) * 0.1;
        
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', updateCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [universeIntensity]);

  // Elegant animation system for universe creation
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  const typeCosmicText = async (text: string, speed: number = 80) => {
    for (let i = 0; i <= text.length; i++) {
      setDisplayText(text.substring(0, i));
      setProgress(i / text.length * 15); // Only use 15% of progress for title
      await sleep(speed + Math.random() * 40);
    }
  };

  const revealDecimalSeed = async () => {
    const chars = decimalSeed.split('');
    let revealed = '';
    
    setIsTransitioning(true);
    setUniverseIntensity(0.7);
    
    // Reveal each digit with a smooth animation
    for (let i = 0; i < chars.length; i++) {
      // Add some cosmic characters before revealing the real digit
      const cosmicChars = ['◊', '◈', '✦', '✧'];
      const tempChar = cosmicChars[Math.floor(Math.random() * cosmicChars.length)];
      
      // Show temporary cosmic character
      setCurrentSeedDisplay(revealed + tempChar + '█'.repeat(Math.max(0, chars.length - i - 1)));
      await sleep(50);
      
      // Reveal the actual digit
      revealed += chars[i];
      setCurrentSeedDisplay(revealed + '█'.repeat(Math.max(0, chars.length - i - 1)));
      
      // Update progress (75% of total progress for seed reveal)
      setProgress(15 + (i + 1) / chars.length * 75);
      
      await sleep(80 + Math.random() * 40);
    }
    
    // Final reveal without cursor
    setCurrentSeedDisplay(revealed);
    setIsTransitioning(false);
    setUniverseIntensity(0.5);
  };

  const crystallizeText = async (targetText: string, steps: number = 15) => {
    const cosmicChars = ['✦', '✧', '✩', '⭐', '🌟', '💫', '⚡', '∴', '∵', '∞', '◊', '◈'];
    
    setIsTransitioning(true);
    setUniverseIntensity(0.8);
    
    // Create elegant crystallization effect
    for (let step = 0; step < steps; step++) {
      const crystallized = Array.from({ length: targetText.length }, (_, i) => {
        if (step === steps - 1) return targetText[i];
        const progress = step / steps;
        const charProgress = Math.min(1, Math.max(0, (progress * targetText.length - i) / 3));
        
        if (charProgress > 0.9) return targetText[i];
        if (charProgress > 0.6) return cosmicChars[Math.floor(Math.random() * cosmicChars.length)];
        if (charProgress > 0.3) return '◦';
        return ' ';
      }).join('');
      
      setCurrentSeedDisplay(prev => {
        const lines = prev.split('\n');
        lines[lines.length - 1] = crystallized;
        return lines.join('\n');
      });
      
      await sleep(150 - step * 8);
    }
    
    setIsTransitioning(false);
    setUniverseIntensity(0.4);
  };

  // Initialize decimal seed display when component mounts
  useEffect(() => {
    if (phase === "digital" && showFullSeed) {
      setCurrentSeedDisplay('');
    }
  }, [phase, showFullSeed]);

  useEffect(() => {
    const executeUniverseSequence = async () => {
      await sleep(800); // Longer initial pause
      setUniverseIntensity(0.2);
      
      // Phase 1: Genesis - Slow title reveal
      setPhase("genesis");
      await typeCosmicText(titleText, 120); // Much slower typing
      await sleep(1200); // Longer pause after title
      
      // Phase 2: Nucleosynthesis - Show primordial seed
      setPhase("nucleosynthesis");
      await sleep(1500); // Longer transition
      setProgress(20);
      
      // Phase 3: Quantum - Show hash with crystallization
      setPhase("quantum");
      await sleep(1800); // Even longer for dramatic effect
      setProgress(35);
      
      // Phase 4: Digital - Reveal the 77-digit seed digit by digit
      setPhase("digital");
      setShowFullSeed(true);
      await sleep(1000);
      
      // Animate the decimal seed revelation
      await revealDecimalSeed();
      
      await sleep(1500); // Pause to admire the full seed
      
      // Phase 5: Cosmic
      if (seedData?.cosmic_origin_time) {
        setPhase("cosmic");
        await sleep(1200);
        setProgress(95);
      }
      
      // Phase 6: Universe - Final stabilization
      setPhase("universe");
      await sleep(1000);
      if (!seedData?.cosmic_origin_time) {
        setProgress(95);
      }
      
      // Complete - Gentle finish
      await sleep(800);
      setPhase("complete");
      setProgress(100);
      setUniverseIntensity(0.15);

      await sleep(2000); // Longer final pause
      if (onComplete) onComplete();
    };

    executeUniverseSequence();
  }, [titleText, seedData, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Custom styles for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
      {/* Cosmic particle background */}
      <canvas
        ref={cosmicRainRef}
        className="absolute inset-0 opacity-60"
      />
      
      {/* Secondary cosmic effects */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        width={typeof window !== 'undefined' ? window.innerWidth : 1920}
        height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      />
      
      {/* Simple cosmic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-black" />
        
        {/* Minimal floating elements */}
        {Array.from({length: 8}).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${(i * 17) % 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: '#00ffff',
              animation: `pulse ${3 + (i % 2)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-full px-2 py-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Simple container */}
          <div className="relative w-full">
            {/* Simple glow effect */}
            <div className="absolute inset-0 blur-xl opacity-30 bg-cyan-500/20 rounded-2xl" />
            
            {/* Main container */}
            <div className={`
              relative bg-black/90 border border-cyan-400/40 rounded-2xl 
              p-4 sm:p-6 md:p-8 
              max-w-full w-full
              transition-all duration-500 ease-in-out
              max-h-[90vh] overflow-y-auto
              animate-glow-pulse
              ${phase === 'complete' ? 'border-green-400/40' : 'border-cyan-400/40'}
            `} style={{
              boxShadow: phase === 'complete' 
                ? '0 0 30px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.2)'
                : '0 0 30px rgba(6, 182, 212, 0.3)',
            }}>
              {/* Simple corner indicators */}
              <div className="absolute top-2 left-2 text-cyan-400 text-sm opacity-60">✦</div>
              <div className="absolute top-2 right-2 text-purple-400 text-sm opacity-60">✧</div>
              <div className="absolute bottom-2 left-2 text-green-400 text-sm opacity-60">✩</div>
              <div className="absolute bottom-2 right-2 text-yellow-400 text-sm opacity-60">⭐</div>
              
              {/* Universe creation display */}
              <div className="relative z-10 text-center">
                {/* Main title */}
                <div className="mb-6">
                  <h1 className={`
                    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
                    transition-all duration-700 ease-in-out
                    ${phase === 'genesis' ? 'scale-105 opacity-100' : 'scale-100 opacity-95'}
                  `} style={{
                        textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 50px rgba(147, 51, 234, 0.4)',
                        filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))'
                      }}>
                    {phase === "genesis" ? displayText : titleText}
                  </h1>
                  
                  {phase !== "genesis" && (
                    <p className={`
                      text-sm sm:text-base md:text-lg text-blue-300 mt-2
                      transition-all duration-500 ease-in-out
                      ${phase === 'nucleosynthesis' ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-1'}
                    `} style={{
                         textShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
                       }}>
                      {subtitleText}
                    </p>
                  )}
                </div>

                {/* Seed display */}
                {phase !== "genesis" && (
                  <div className={`
                    space-y-4 text-left max-w-full
                    transition-all duration-700 ease-in-out
                    opacity-100 translate-y-0
                  `}>
                    
                    {/* Primordial seed */}
                    {(phase === "nucleosynthesis" || phase === "quantum" || phase === "digital" || phase === "cosmic" || phase === "universe" || phase === "complete") && (
                      <div className={`
                        space-y-2 transition-all duration-500 ease-in-out
                        ${phase === 'nucleosynthesis' ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'}
                      `}>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-cyan-400 flex items-center gap-2">
                          <span className="animate-pulse">🌌</span>
                          <span>PRIMORDIAL GENESIS SEED</span>
                        </h3>
                        <div className="bg-gray-900/50 border border-cyan-400/30 rounded-lg p-2 sm:p-3 hover:bg-gray-900/60 hover:border-cyan-400/40 transition-all duration-300">
                          <div className="text-xs sm:text-sm text-cyan-300 font-mono break-all">
                            {primordialSeed}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quantum hash */}
                    {(phase === "quantum" || phase === "digital" || phase === "cosmic" || phase === "universe" || phase === "complete") && (
                      <div className={`
                        space-y-2 transition-all duration-500 ease-in-out delay-200
                        ${phase === 'quantum' ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'}
                      `}>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-green-400 flex items-center gap-2">
                          <span className="animate-spin" style={{animationDuration: '3s'}}>⚛️</span>
                          <span>QUANTUM HASH</span>
                        </h3>
                        <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-2 sm:p-3 hover:bg-gray-900/60 hover:border-green-400/40 transition-all duration-300">
                          <div className="text-xs sm:text-sm text-green-300 font-mono break-all">
                            {sha256Seed}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Universal constant (77 digits) */}
                    {(phase === "digital" || phase === "cosmic" || phase === "universe" || phase === "complete") && (
                      <div className="space-y-3">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-yellow-400 flex items-center gap-2">
                          <span>🔢</span>
                          <span>UNIVERSAL CONSTANT</span>
                          <span className="text-xs opacity-70">(77 digits)</span>
                        </h3>
                        <div className="bg-gray-900/60 border border-yellow-400/40 rounded-lg p-3 sm:p-4">
                          <div className="text-yellow-300 font-mono relative">
                            {/* Animated seed display */}
                            <div className="min-h-[120px] flex items-center justify-center">
                              {isTransitioning || phase === "digital" ? (
                                // Show animated reveal
                                <div className="text-center space-y-2">
                                  <div className="text-sm sm:text-base leading-relaxed tracking-wider">
                                    <span className="bg-yellow-400/20 border border-yellow-400/30 rounded px-2 py-1 inline-block">
                                      {currentSeedDisplay || '█'.repeat(77)}
                                    </span>
                                  </div>
                                  {currentSeedDisplay && !currentSeedDisplay.includes('█') && (
                                    <div className="text-xs text-yellow-500 opacity-75 animate-fade-in">
                                      ✓ Sequence Complete: {currentSeedDisplay.length} digits
                                    </div>
                                  )}
                                </div>
                              ) : (
                                // Show final formatted display
                                <div className="space-y-3 w-full">
                                  {/* Grouped display in rows */}
                                  <div className="space-y-2">
                                    {formatDecimalSeedForDisplay(decimalSeed).split(' ').reduce((rows: string[][], chunk, i) => {
                                      const rowIndex = Math.floor(i / 6); // 6 chunks per row
                                      if (!rows[rowIndex]) rows[rowIndex] = [];
                                      rows[rowIndex].push(chunk);
                                      return rows;
                                    }, []).map((row, rowIdx) => (
                                      <div key={rowIdx} className="flex flex-wrap gap-1 justify-center">
                                        {row.map((chunk, chunkIdx) => (
                                          <span key={chunkIdx} className="bg-yellow-400/15 border border-yellow-400/25 rounded px-2 py-1 text-xs sm:text-sm hover:bg-yellow-400/25 transition-colors">
                                            {chunk}
                                          </span>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Status indicator */}
                                  <div className="text-center pt-3 border-t border-yellow-400/20">
                                    <div className="inline-flex items-center gap-2 text-xs text-yellow-500 opacity-75">
                                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                      <span>Universal Constant Stabilized: {decimalSeed.length} digits</span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Temporal coordinates */}
                    {seedData?.cosmic_origin_time && (phase === "cosmic" || phase === "universe" || phase === "complete") && (
                      <div className={`
                        space-y-2 transition-all duration-500 ease-in-out delay-600
                        ${phase === 'cosmic' ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'}
                      `}>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-purple-400 flex items-center gap-2">
                          <span className="animate-pulse">🕐</span>
                          <span>TEMPORAL ORIGIN</span>
                        </h3>
                        <div className="bg-gray-900/50 border border-purple-400/30 rounded-lg p-2 sm:p-3 hover:bg-gray-900/60 hover:border-purple-400/40 transition-all duration-300">
                          <div className="text-xs sm:text-sm text-purple-300 font-mono">
                            {seedData.cosmic_origin_time} ({seedData.cosmic_origin_datetime})
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Completion indicator */}
              {phase === "complete" && (
                <div className="mt-6 text-center animate-fade-in">
                  <div className="text-green-400 text-sm font-bold flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>✅ UNIVERSE STABLE</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2 opacity-75">
                    All cosmic constants initialized successfully
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Simple progress bar */}
          {phase !== "complete" && (
            <div className="mt-4 w-full max-w-md mx-auto px-4">
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-400 transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-cyan-400 text-xs min-w-[2.5rem] text-right">
                  {Math.floor(progress)}%
                </div>
              </div>
            </div>
          )}
          
          {/* Enhanced status */}
          <div className="mt-4 text-center px-4">
            <div className="text-xs text-gray-400 transition-all duration-300">
              <span className="inline-flex items-center gap-2">
                <span>PHASE:</span>
                <span className={`
                  text-cyan-400 font-semibold px-2 py-1 rounded 
                  ${phase === 'complete' ? 'bg-green-400/20 text-green-400' : 'bg-cyan-400/20'}
                  transition-all duration-500
                `}>
                  {phase === "genesis" ? "GENESIS" : 
                   phase === "nucleosynthesis" ? "NUCLEOSYNTHESIS" :
                   phase === "quantum" ? "QUANTUM" : 
                   phase === "digital" ? "DIGITAL MANIFESTATION" : 
                   phase === "cosmic" ? "COSMIC ALIGNMENT" :
                   phase === "universe" ? "UNIVERSE FORMATION" :
                   "COMPLETE"}
                </span>
                {phase !== 'complete' && (
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixTextReveal;