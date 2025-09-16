// atlas-ui/react/static/js/Components/CoordinateSelector.tsx
import React, { useState, useEffect } from "react";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

interface CoordinateSelectorProps {
  onCoordinateChange?: (coordinates: Coordinates, isUserInteraction?: boolean) => void;
  travelCost?: { antimatter: number; element115: number; deuterium: number } | null;
  canAfford?: boolean;
  formatResource?: (value: number) => string;
  efficiency?: number;
}

const TypewriterText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
}> = ({ text, className = "", delay = 0, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, 30); // Más rápido para ser más profesional

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

const CoordinateSelector: React.FC<CoordinateSelectorProps> = ({ onCoordinateChange, travelCost, canAfford, formatResource, efficiency }) => {
  const [coordinates, setCoordinates] = useState({
    x: 1000000,
    y: 1000000,
    z: 1000000,
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRandomJumping, setIsRandomJumping] = useState(false);
  const [showInitializeJump, setShowInitializeJump] = useState(true);
  const [randomJumpText, setRandomJumpText] = useState("🎲 Random Location");
  const [destinationInfo, setDestinationInfo] = useState<{
    galaxy: string;
    system: string;
    planet: string;
  } | null>(null);
  const [warpCharging, setWarpCharging] = useState(false);
  const [jumpReady, setJumpReady] = useState(false);
  const [coordinateGlitchStates, setCoordinateGlitchStates] = useState({
    x: false, y: false, z: false
  });
  const [destinationReveal, setDestinationReveal] = useState({
    phase: 'scanning',
    scanLines: false,
    hologram: false,
    typewriterActive: false,
    showReadyToJump: false
  });

  const coordinateOptions = {
    x: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Alpha" },
      { value: 2000000, name: "Beta" },
      { value: 3000000, name: "Gamma" },
      { value: 4000000, name: "Delta" },
      { value: 5000000, name: "Epsilon" },
      { value: 6000000, name: "Zeta" },
      { value: 7000000, name: "Eta" },
      { value: 8000000, name: "Theta" },
      { value: 9000000, name: "Iota" },
      { value: 10000000, name: "The Unknown" },
    ],
    y: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Lambda" },
      { value: 2000000, name: "Mu" },
      { value: 3000000, name: "Nu" },
      { value: 4000000, name: "Xi" },
      { value: 5000000, name: "Omicron" },
      { value: 6000000, name: "Pi" },
      { value: 7000000, name: "Rho" },
      { value: 8000000, name: "Sigma" },
      { value: 9000000, name: "Tau" },
      { value: 10000000, name: "The Unknown" },
    ],
    z: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Phi" },
      { value: 2000000, name: "Chi" },
      { value: 3000000, name: "Psi" },
      { value: 4000000, name: "Omega" },
      { value: 5000000, name: "Vega" },
      { value: 6000000, name: "Rigel" },
      { value: 7000000, name: "Sirius" },
      { value: 8000000, name: "Antares" },
      { value: 9000000, name: "Procyon" },
      { value: 10000000, name: "The Unknown" },
    ],
  };

  const updateSelectOption = (coordinate, value) => {
    const options = coordinateOptions[coordinate];
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value;
      const nextOptionValue = i < options.length - 1 ? options[i + 1].value : 10000001;

      if ((i === 0 && value <= 999999) || (value >= optionValue && value < nextOptionValue) || (i === options.length - 1 && value >= 9000000 && value <= 10000000)) {
        return i;
      }
    }
    return -1;
  };

  const handleSliderChange = (coordinate, value) => {
    const numValue = parseInt(value, 10);
    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const handleInputChange = (coordinate, value) => {
    let numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0) {
      numValue = 0;
    } else if (numValue > 10000000) {
      numValue = 10000000;
    }

    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const handleSelectChange = (coordinate, value) => {
    const numValue = parseInt(value, 10);
    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const randomizeCoordinates = () => {
    const maxCoordinate = 10000000;
    const newCoordinates = {
      x: Math.floor(Math.random() * maxCoordinate),
      y: Math.floor(Math.random() * maxCoordinate),
      z: Math.floor(Math.random() * maxCoordinate),
    };
    setCoordinates(newCoordinates);
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange(newCoordinates, true);
    }
  };

  const getRandomString = (chars: string, length: number) => {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const cleanName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  const renderGlitchCoordinate = (value: number, axis: 'x' | 'y' | 'z') => {
    const isGlitching = coordinateGlitchStates[axis];

    if (isGlitching) {
      return (
        <div className="relative inline-block">
          {Array.from({length: 3}).map((_, i) => (
            <span key={i}
                  className="absolute inset-0 text-cyan-400 font-mono text-xl sm:text-2xl"
                  style={{
                    animation: `glitchFlicker ${0.1 + i * 0.03}s infinite`,
                    opacity: Math.random() * 0.8 + 0.2,
                    transform: `translateX(${(Math.random() - 0.5) * 4}px) translateY(${(Math.random() - 0.5) * 2}px)`,
                  }}>
              {Math.floor(Math.random() * 10000000).toLocaleString()}
            </span>
          ))}
          <span className="text-white font-mono text-xl sm:text-2xl relative z-10 drop-shadow-lg">
            {value.toLocaleString()}
          </span>
        </div>
      );
    }

    return (
      <span className="font-mono text-xl sm:text-2xl text-cyan-400 drop-shadow-sm transition-all duration-300">
        {value.toLocaleString()}
      </span>
    );
  };

  const handleRandomLocationJump = async () => {
    // Fase 1: Preparación y carga de warp
    setWarpCharging(true);
    setRandomJumpText("⚡ Charging Warp Drive...");

    await sleep(1200);

    setWarpCharging(false);
    setJumpReady(true);
    setRandomJumpText("🚀 Warp Drive Online");

    await sleep(800);

    setIsRandomJumping(true);
    setJumpReady(false);
    setRandomJumpText("🌌 Initiating Jump...");

    // Activar efectos de glitch en coordenadas
    setCoordinateGlitchStates({ x: true, y: true, z: true });

    try {
      // Decide final coordinates and destination BEFORE animation
      const galaxyX = Math.floor(Math.random() * 10000001);
      const galaxyY = Math.floor(Math.random() * 10000001);
      const galaxyZ = Math.floor(Math.random() * 10000001);
      const finalCoordinates = { x: galaxyX, y: galaxyY, z: galaxyZ };

      // Get galaxy info
      const galaxyResponse = await fetch(`/api/galaxy-info?x=${galaxyX}&y=${galaxyY}&z=${galaxyZ}`);
      if (!galaxyResponse.ok) {
        throw new Error("Failed to get galaxy info");
      }

      const galaxyData = await galaxyResponse.json();
      const numSystems = galaxyData.num_systems;

      // Determine final destination
      const rand = Math.random();
      let navigationData: any = { x: galaxyX, y: galaxyY, z: galaxyZ };
      let finalSystemName = "";
      let finalPlanetName = "";

      if (rand <= 0.1) {
        // 10% - Stay at galaxy level
        finalSystemName = "";
        finalPlanetName = "";
      } else if (rand <= 0.4) {
        // 30% - Go to system level
        if (numSystems > 0) {
          const randomSystem = Math.floor(Math.random() * numSystems);
          const systemResponse = await fetch(`/api/system-info?x=${galaxyX}&y=${galaxyY}&z=${galaxyZ}&system=${randomSystem}`);

          if (systemResponse.ok) {
            const systemData = await systemResponse.json();
            navigationData.system = randomSystem;
            finalSystemName = systemData.system_name;
          }
        }
      } else {
        // 60% - Go to planet level
        if (numSystems > 0) {
          const randomSystem = Math.floor(Math.random() * numSystems);
          const systemResponse = await fetch(`/api/system-info?x=${galaxyX}&y=${galaxyY}&z=${galaxyZ}&system=${randomSystem}`);

          if (systemResponse.ok) {
            const systemData = await systemResponse.json();
            const planets = systemData.planets;

            if (planets && planets.length > 0) {
              const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
              navigationData.system = randomSystem;
              navigationData.planet = randomPlanet.name;
              finalSystemName = systemData.system_name;
              finalPlanetName = randomPlanet.name;
            }
          }
        }
      }

      // Set destination info for display
      setDestinationInfo({
        galaxy: cleanName(galaxyData.galaxy_name),
        system: finalSystemName ? cleanName(finalSystemName) : "",
        planet: finalPlanetName ? cleanName(finalPlanetName) : "",
      });

      // Iniciar efecto holográfico
      setDestinationReveal({
        phase: 'scanning',
        scanLines: true,
        hologram: false,
        typewriterActive: false
      });

      // Después de 1.5 segundos, mostrar el holograma
      setTimeout(() => {
        setDestinationReveal(prev => ({
          ...prev,
          scanLines: false,
          hologram: true,
          typewriterActive: true
        }));
      }, 1500);

      // Matrix animation phases
      const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

      // Phase 1: Matrix effect with coordinate jumping
      const numJumps = 10 + Math.floor(Math.random() * 6); // 10-15 jumps
      for (let jump = 0; jump < numJumps; jump++) {
        // Show random coordinates while doing matrix effect
        const randomCoords = {
          x: Math.floor(Math.random() * 10000001),
          y: Math.floor(Math.random() * 10000001),
          z: Math.floor(Math.random() * 10000001),
        };
        setCoordinates(randomCoords);
        if (onCoordinateChange) {
          onCoordinateChange(randomCoords, true); // Changed to true to trigger 3D cube
        }

        // Matrix text animation for this jump (faster)
        for (let i = 0; i < 8; i++) {
          // Reduced from 15 to 8 iterations
          setRandomJumpText(getRandomString(matrixChars, 20));
          await sleep(15); // Reduced from 30ms to 15ms
        }

        await sleep(25); // Reduced from 50ms to 25ms
      }

      // Set final coordinates y desactivar glitch
      setCoordinates(finalCoordinates);
      setCoordinateGlitchStates({ x: false, y: false, z: false });
      if (onCoordinateChange) {
        onCoordinateChange(finalCoordinates, true);
      }

      // Phase 2: Reveal destination (faster)
      if (finalPlanetName) {
        setRandomJumpText("");
        const planetText = `Planet: ${cleanName(finalPlanetName)}`;
        for (let i = 0; i < planetText.length; i++) {
          setRandomJumpText(planetText.substring(0, i + 1));
          await sleep(25); // Reduced from 50ms to 25ms
        }
      } else if (finalSystemName) {
        setRandomJumpText("");
        const systemText = `System: ${cleanName(finalSystemName)}`;
        for (let i = 0; i < systemText.length; i++) {
          setRandomJumpText(systemText.substring(0, i + 1));
          await sleep(25); // Reduced from 50ms to 25ms
        }
      } else {
        setRandomJumpText("");
        const galaxyText = `Galaxy: ${cleanName(galaxyData.galaxy_name)}`;
        for (let i = 0; i < galaxyText.length; i++) {
          setRandomJumpText(galaxyText.substring(0, i + 1));
          await sleep(25); // Reduced from 50ms to 25ms
        }
      }

      await sleep(500); // Reduced from 1000ms to 500ms

      setRandomJumpText("🚀 Jump initiated!");

      // Mostrar "Ready to Jump" después de que termine toda la información
      setTimeout(() => {
        setDestinationReveal(prev => ({
          ...prev,
          showReadyToJump: true
        }));
        setRandomJumpText("⚡ Navigation data locked. Ready to jump!");
      }, 4000);

      // Navigate automatically después de mostrar toda la información
      setTimeout(() => {
        setRandomJumpText("🚀 Jump initiated! Engaging hyperspace drive...");

        setTimeout(() => {
          const form = document.createElement("form");
          form.method = "POST";
          form.action = "/api/random-jump";
          form.style.display = "none";

          Object.keys(navigationData).forEach((key) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = navigationData[key];
            form.appendChild(input);
          });

          document.body.appendChild(form);
          form.submit();
        }, 2000);
      }, 7000); // Esperar 7 segundos total para que se vea toda la información
    } catch (error) {
      console.error("Random jump failed:", error);
      setRandomJumpText("❌ Jump failed");
      setDestinationInfo(null);
      setCoordinateGlitchStates({ x: false, y: false, z: false });
      setDestinationReveal({
        phase: 'scanning',
        scanLines: false,
        hologram: false,
        typewriterActive: false,
        showReadyToJump: false
      });
      setTimeout(() => {
        setIsRandomJumping(false);
        setShowInitializeJump(true);
        setRandomJumpText("🎲 Random Location");
        setWarpCharging(false);
        setJumpReady(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (onCoordinateChange && isInitialized) {
      onCoordinateChange(coordinates, false);
    }
  }, [coordinates, onCoordinateChange, isInitialized]);

  useEffect(() => {
    randomizeCoordinates();
    setIsInitialized(true);
  }, []);

  const renderCoordinateGroup = (coordinate: string, label: string) => {
    const selectedIndex = updateSelectOption(coordinate, coordinates[coordinate]);
    const axisStyles = {
      x: {
        gradient: "from-blue-400 to-cyan-400",
        border: "border-blue-500/40",
        text: "text-blue-300",
        accent: "text-blue-400",
        ring: "focus:ring-blue-500",
      },
      y: {
        gradient: "from-purple-400 to-violet-400",
        border: "border-purple-500/40",
        text: "text-purple-300",
        accent: "text-purple-400",
        ring: "focus:ring-purple-500",
      },
      z: {
        gradient: "from-pink-400 to-rose-400",
        border: "border-pink-500/40",
        text: "text-pink-300",
        accent: "text-pink-400",
        ring: "focus:ring-pink-500",
      },
    };
    const style = axisStyles[coordinate as keyof typeof axisStyles];

    return (
      <div className="space-y-3" key={coordinate}>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-white">{label} Coordinate</h3>
          <div className={`${style.accent} font-bold`}>
            {renderGlitchCoordinate(coordinates[coordinate], coordinate as 'x' | 'y' | 'z')}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <select id={`${coordinate}-name`} className={`flex-1 bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} value={selectedIndex >= 0 ? coordinateOptions[coordinate][selectedIndex].value : ""} onChange={(e) => handleSelectChange(coordinate, e.target.value)}>
            {coordinateOptions[coordinate].map((option, index) => (
              <option key={index} value={option.value} className="bg-gray-800 text-white">
                {option.name}
              </option>
            ))}
          </select>
          <input type="number" id={`${coordinate}-value`} name={coordinate} value={coordinates[coordinate]} className={`flex-1 bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} min="0" max="10000000" onChange={(e) => handleInputChange(coordinate, e.target.value)} />
        </div>

        <div className="space-y-3">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} opacity-20 rounded-xl blur-sm`}></div>
            <div className="relative p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute top-1 left-3 right-3 h-3 bg-white/10 rounded-xl"></div>
                <div className={`absolute top-1 left-3 right-3 h-3 bg-gradient-to-r ${style.gradient} rounded-xl transition-all duration-200 pointer-events-none z-10`} style={{ width: `calc(${(coordinates[coordinate] / 10000000) * 100}% - 12px)` }}></div>
                <input
                  type="range"
                  id={`${coordinate}-slider`}
                  name={coordinate}
                  min="0"
                  max="10000000"
                  value={coordinates[coordinate]}
                  className={`
                    relative z-20 w-full h-3 bg-transparent rounded-xl appearance-none cursor-pointer
                    [&::-webkit-slider-track]:bg-transparent
                    [&::-webkit-slider-track]:rounded-xl
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-6
                    [&::-webkit-slider-thumb]:h-6
                    [&::-webkit-slider-thumb]:bg-gradient-to-br
                    [&::-webkit-slider-thumb]:${style.gradient}
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white/30
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:hover:shadow-xl
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:duration-200
                    [&::-webkit-slider-thumb]:-mt-1.5
                    [&::-moz-range-thumb]:w-6
                    [&::-moz-range-thumb]:h-6
                    [&::-moz-range-thumb]:bg-gradient-to-br
                    [&::-moz-range-thumb]:${style.gradient}
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:border-white/30
                    [&::-moz-range-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:shadow-lg
                    [&::-moz-range-thumb]:border-none
                    [&::-moz-range-track]:bg-transparent
                    [&::-moz-range-track]:border-none
                    [&::-moz-range-track]:h-3
                    transition-all
                    duration-200
                  `}
                  onChange={(e) => handleSliderChange(coordinate, e.target.value)}
                />
                <div className="flex justify-between mt-2 text-xs font-medium">
                  <span className={`${style.text} drop-shadow-sm`}>The Edge</span>
                  <span className={`text-center ${style.text}`}>{coordinateOptions[coordinate][selectedIndex >= 0 ? selectedIndex : 0]?.name || "Unknown Region"}</span>
                  <span className={`${style.text} drop-shadow-sm`}>The Unknown</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative">
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-500/30 backdrop-blur-sm">{renderCoordinateGroup("x", "X")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/30 backdrop-blur-sm">{renderCoordinateGroup("y", "Y")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-pink-500/30 backdrop-blur-sm md:col-span-2 lg:col-span-1">{renderCoordinateGroup("z", "Z")}</div>
      </div>

      <div className="w-full flex gap-4 relative z-10">
        {showInitializeJump && !isRandomJumping && !warpCharging && !jumpReady && (
          <button type="submit" className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-95 shadow-lg backdrop-blur-sm">
            <span className="text-base sm:text-lg">🚀 Initialize Jump</span>
          </button>
        )}
        <button
          type="button"
          className={`
            group relative overflow-hidden font-bold text-lg rounded-xl shadow-lg backdrop-blur-sm
            transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
            ${isRandomJumping || warpCharging || jumpReady ? "w-full" : "flex-1"}
            ${warpCharging
              ? 'bg-gradient-to-r from-yellow-500/20 via-orange-500/30 to-yellow-500/20 text-yellow-400 cursor-wait'
              : jumpReady
              ? 'bg-gradient-to-r from-green-500/20 via-cyan-500/30 to-green-500/20 text-cyan-400 cursor-pointer'
              : isRandomJumping
              ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-cyan-500/20 text-cyan-400 cursor-wait'
              : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white hover:from-purple-700 hover:via-pink-700 hover:to-purple-800'
            }
            px-6 sm:px-8 py-3 sm:py-4
          `}
          onClick={(warpCharging || isRandomJumping) ? undefined : handleRandomLocationJump}
          disabled={warpCharging || isRandomJumping}
        >
          {/* Fondo animado para hover */}
          {!warpCharging && !isRandomJumping && !jumpReady && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          )}

          {/* Efecto de carga warp */}
          {warpCharging && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent
                            animate-[slideRight_1.5s_ease-in-out_infinite]"></div>
          )}

          {/* Efecto de energía ready */}
          {jumpReady && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent
                            animate-pulse"></div>
          )}

          {/* Partículas flotantes para estado normal */}
          {!isRandomJumping && !warpCharging && !jumpReady && (
            <div className="absolute inset-0">
              {Array.from({length: 6}).map((_, i) => (
                <div key={i}
                     className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                     style={{
                       left: `${15 + i * 12}%`,
                       top: `${20 + (i % 2) * 60}%`,
                       animationDelay: `${i * 0.2}s`,
                       animationDuration: '2s'
                     }}></div>
              ))}
            </div>
          )}

          {/* Contenido del botón */}
          <span className="relative z-10 flex items-center justify-center gap-3">
            {warpCharging ? (
              <>
                <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="font-mono">{randomJumpText}</span>
              </>
            ) : jumpReady ? (
              <>
                <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <span className="font-mono">{randomJumpText}</span>
              </>
            ) : isRandomJumping ? (
              <>
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="font-mono">{randomJumpText}</span>
              </>
            ) : (
              <>
                <span className="text-2xl">🎲</span>
                <span>Random Location</span>
                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">✨</span>
              </>
            )}
          </span>

          {/* Efecto de brillo en hover para estado normal */}
          {!warpCharging && !isRandomJumping && !jumpReady && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
                            bg-gradient-to-r from-white via-transparent to-white blur-sm"></div>
          )}
        </button>
      </div>

      {destinationInfo && (
        <>
          {/* Efecto sutil de scanning */}
          {destinationReveal.scanLines && (
            <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-[90]
                            animate-[scanLine_3s_ease-in-out_infinite]"></div>
          )}

          {/* Overlay de información tipo toast elegante */}
          <div className={`fixed top-8 right-8 z-[95] transition-all duration-700 transform
                           ${destinationReveal.hologram ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>

            <div className="bg-slate-900/95 backdrop-blur-xl border border-cyan-400/30 rounded-lg
                            shadow-2xl shadow-cyan-400/10 max-w-sm">

              {/* Header minimalista */}
              <div className="px-4 py-2 border-b border-cyan-400/20">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-mono uppercase tracking-wide">
                    {destinationReveal.phase === 'scanning' ? 'Scanning...' : 'Jump Coordinates'}
                  </span>
                </div>
              </div>

              {/* Contenido elegante */}
              <div className="p-4 space-y-3">
                {destinationReveal.typewriterActive ? (
                  <>
                    {/* Coordenadas en formato elegante */}
                    <div className="space-y-1">
                      <div className="text-blue-400/70 text-xs font-mono uppercase tracking-wider">Location</div>
                      <div className="text-blue-300 font-mono text-sm">
                        <TypewriterText
                          text={`${coordinates.x.toLocaleString()}, ${coordinates.y.toLocaleString()}, ${coordinates.z.toLocaleString()}`}
                          className="text-blue-300"
                        />
                      </div>
                    </div>

                    {/* Galaxy */}
                    <div className="space-y-1">
                      <div className="text-purple-400/70 text-xs font-mono uppercase tracking-wider">Galaxy</div>
                      <div className="text-purple-300 text-sm">
                        <TypewriterText
                          text={destinationInfo.galaxy}
                          className="text-purple-300"
                          delay={600}
                        />
                      </div>
                    </div>

                    {/* System - solo si existe */}
                    {destinationInfo.system && (
                      <div className="space-y-1">
                        <div className="text-cyan-400/70 text-xs font-mono uppercase tracking-wider">System</div>
                        <div className="text-cyan-300 text-sm">
                          <TypewriterText
                            text={destinationInfo.system}
                            className="text-cyan-300"
                            delay={1200}
                          />
                        </div>
                      </div>
                    )}

                    {/* Planet - solo si existe */}
                    {destinationInfo.planet && (
                      <div className="space-y-1">
                        <div className="text-pink-400/70 text-xs font-mono uppercase tracking-wider">Planet</div>
                        <div className="text-pink-300 text-sm font-medium">
                          <TypewriterText
                            text={destinationInfo.planet}
                            className="text-pink-300 font-medium"
                            delay={1800}
                          />
                        </div>
                      </div>
                    )}

                    {/* Status ready */}
                    {destinationReveal.showReadyToJump && (
                      <div className="pt-2 border-t border-green-400/20">
                        <div className="flex items-center gap-2 text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs font-mono uppercase tracking-wider">Ready to jump</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-cyan-400 text-sm">Initializing...</span>
                  </div>
                )}
              </div>

              {/* Borde sutil */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0
                              pointer-events-none opacity-50"></div>
            </div>
          </div>
        </>
      )}

      {travelCost && formatResource && (
        <div className="w-full relative z-10">
          <div className={`w-full flex items-center justify-center gap-3 rounded-xl px-4 py-3 border backdrop-blur-sm text-sm ${canAfford ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
            <div className="flex items-center gap-1 text-xl">
              <AntimatterIcon size={20} color="#a855f7" />
              <span className="text-purple-400 font-medium">{formatResource(travelCost.antimatter)}</span>
            </div>
            <div className="flex items-center gap-1 text-xl">
              <Element115Icon size={20} color="#06b6d4" />
              <span className="text-cyan-400 font-medium">{formatResource(travelCost.element115)}</span>
            </div>
            <div className="flex items-center gap-1 text-xl">
              <DeuteriumIcon size={20} color="#fb7185" />
              <span className="text-orange-400 font-medium">{formatResource(travelCost.deuterium)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoordinateSelector;
