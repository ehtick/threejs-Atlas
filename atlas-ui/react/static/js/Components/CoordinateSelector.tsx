// atlas-ui/react/static/js/Components/CoordinateSelector.tsx
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";
import GalaxyIcon from "../Icons/GalaxyIcon.tsx";
import SystemIcon from "../Icons/SystemIcon.tsx";
import PlanetIcon from "../Icons/PlanetIcon.tsx";
import CoordinatesIcon from "../Icons/CoordinatesIcon.tsx";

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

// Charset compartido para efectos matrix
const MATRIX_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

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
      }, 30);

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

const MatrixRevealText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  matrixColor?: string;
}> = ({ text, className = "", delay = 0, matrixColor = "inherit" }) => {
  const [revealedChars, setRevealedChars] = useState<boolean[]>([]);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  const matrixCharset = MATRIX_CHARSET;

  useEffect(() => {
    if (!text) return;

    // Initialize with all false (matrix chars) and random matrix characters
    const initialRevealed = new Array(text.length).fill(false);
    setRevealedChars(initialRevealed);
    setMatrixChars(text.split('').map(() =>
      matrixCharset[Math.floor(Math.random() * matrixCharset.length)]
    ));

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      let currentRevealed = [...initialRevealed];

      // Matrix animation for unrevealed chars - start immediately
      const matrixInterval = setInterval(() => {
        setMatrixChars(prev =>
          prev.map((_, index) => {
            // Don't change chars that are already revealed
            if (currentRevealed[index]) return prev[index];
            return matrixCharset[Math.floor(Math.random() * matrixCharset.length)];
          })
        );
      }, 40); // Faster matrix animation

      const revealInterval = setInterval(() => {
        if (currentIndex < text.length) {
          currentRevealed[currentIndex] = true;
          setRevealedChars([...currentRevealed]);
          currentIndex++;
        } else {
          clearInterval(revealInterval);
          clearInterval(matrixInterval);
        }
      }, 15); // Much faster: 15ms per character

      return () => {
        clearInterval(revealInterval);
        clearInterval(matrixInterval);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={revealedChars[index] ? '' : 'animate-pulse opacity-70'}
          style={revealedChars[index] ? {} : { color: matrixColor }}
        >
          {revealedChars[index] ? char : (char === ' ' ? ' ' : matrixChars[index])}
        </span>
      ))}
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
  const [currentFlash, setCurrentFlash] = useState<'coordinates' | 'galaxy' | 'system' | 'planet' | 'ready' | null>(null);

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
        <span className="font-mono text-xl sm:text-2xl text-cyan-400 drop-shadow-sm animate-pulse">
          {value.toLocaleString()}
        </span>
      );
    }

    return (
      <span className="font-mono text-xl sm:text-2xl text-cyan-400 drop-shadow-sm transition-all duration-300">
        {value.toLocaleString()}
      </span>
    );
  };

  const handleRandomLocationJump = async () => {
    // Iniciar directamente el salto con efecto matrix
    setIsRandomJumping(true);
    setRandomJumpText("INITIALIZING...");

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

      if (rand <= 0.05) {
        // 5% - Stay at galaxy level
        finalSystemName = "";
        finalPlanetName = "";
      } else if (rand <= 0.15) {
        // 10% - Go to system level (5% + 10% = 15%)
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
        // 85% - Go to planet level
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

      // Matrix animation phases - usando el mismo charset que MatrixRevealText
      const matrixChars = MATRIX_CHARSET;

      // Phase 1: Matrix effect with coordinate jumping - exponential deceleration
      const numJumps = 20 + Math.floor(Math.random() * 11); // 20-30 jumps
      for (let jump = 0; jump < numJumps; jump++) {
        // Calculate exponential deceleration - starts super fast, ends very slow
        const progress = jump / (numJumps - 1); // 0 to 1

        // Exponential delay calculation: starts at 5ms, ends at 300ms
        const baseDelay = 5; // Very fast start
        const maxDelay = 300; // Slow end
        const exponentialFactor = 3; // Higher = more dramatic curve
        const currentDelay = baseDelay + (Math.pow(progress, exponentialFactor) * (maxDelay - baseDelay));

        // Show random coordinates
        const randomCoords = {
          x: Math.floor(Math.random() * 10000001),
          y: Math.floor(Math.random() * 10000001),
          z: Math.floor(Math.random() * 10000001),
        };
        setCoordinates(randomCoords);
        if (onCoordinateChange) {
          onCoordinateChange(randomCoords, true);
        }

        // Quick matrix animation (gets shorter towards end)
        const matrixIterations = Math.max(2, 6 - Math.floor(progress * 4));
        for (let i = 0; i < matrixIterations; i++) {
          setRandomJumpText(getRandomString(matrixChars, 20));
          await sleep(8); // Fast matrix animation
        }

        // Main exponential delay between coordinate jumps
        await sleep(currentDelay);
      }

      // Set final coordinates y desactivar glitch
      setCoordinates(finalCoordinates);
      setCoordinateGlitchStates({ x: false, y: false, z: false });
      if (onCoordinateChange) {
        onCoordinateChange(finalCoordinates, true);
      }

      // Set destination info
      setDestinationInfo({
        galaxy: cleanName(galaxyData.galaxy_name),
        system: finalSystemName ? cleanName(finalSystemName) : "",
        planet: finalPlanetName ? cleanName(finalPlanetName) : "",
      });

      // Mostrar la información del destino
      setDestinationReveal({
        phase: 'ready',
        scanLines: false,
        hologram: true,
        typewriterActive: true,
        showReadyToJump: false
      });

      // SECUENCIA DE FLASHES FUTURISTA - ritmo dinámico pero legible
      await sleep(300);

      // Crear el toast una sola vez y actualizar su contenido
      const toast = document.createElement("div");
      toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-[90vw] max-w-lg opacity-0 scale-95 transition-all duration-500 ease-out";

      // Añadir fade in inicial
      setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translate(-50%, 0) scale(1)";
      }, 100);

      const popup = document.createElement("div");
      popup.className = "relative rounded-lg shadow-lg border px-4 py-3 transition-all duration-1000 bg-gradient-to-r from-slate-900/90 to-blue-900/90 border-cyan-500/50";

      // Crear un overlay para la animación de color
      const overlay = document.createElement("div");
      overlay.className = "absolute inset-0 rounded-lg transition-all duration-1000 ease-in-out";
      overlay.style.background = "transparent";
      overlay.style.opacity = "0";
      popup.appendChild(overlay);

      const container = document.createElement("div");
      container.className = "flex items-center space-x-3 relative z-10";

      // Icono dinámico que cambia según la fase
      const iconDiv = document.createElement("div");
      iconDiv.className = "flex items-center justify-center w-8 h-8 transition-all duration-500 ease-in-out";

      const iconRoot = createRoot(iconDiv);
      // Empezar con icono de coordenadas
      iconRoot.render(React.createElement(CoordinatesIcon, { size: 24, color: "#60A5FA" }));

      const contentDiv = document.createElement("div");
      contentDiv.className = "flex-1";

      const flashDiv = document.createElement("div");
      flashDiv.className = "text-sm font-medium transition-all duration-500 ease-in-out";

      contentDiv.appendChild(flashDiv);
      container.appendChild(iconDiv);
      container.appendChild(contentDiv);
      popup.appendChild(container);
      toast.appendChild(popup);

      document.body.appendChild(toast);
      currentToastElement = toast;

      // Función para actualizar el contenido del flash Y el icono con animación
      const updateFlash = (type: string) => {
        let flashHTML = '';

        // Animación de salida del icono y texto (scale down + fade out)
        iconDiv.style.transform = "scale(0.5)";
        iconDiv.style.opacity = "0";
        flashDiv.style.transform = "translateX(-20px)";
        flashDiv.style.opacity = "0";

        // Después de la animación de salida, cambiar el icono y animar la entrada
        setTimeout(() => {
          // Actualizar el icono según el tipo
          if (type === 'coordinates') {
            iconRoot.render(React.createElement(CoordinatesIcon, { size: 24, color: "#60A5FA" }));
            flashHTML = `
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs font-mono uppercase rounded border border-blue-500/30">COORDS</span>
                <span class="text-blue-200">[${finalCoordinates.x.toLocaleString()}, ${finalCoordinates.y.toLocaleString()}, ${finalCoordinates.z.toLocaleString()}]</span>
              </div>
            `;
          } else if (type === 'galaxy') {
            iconRoot.render(React.createElement(GalaxyIcon, { size: 24, color: "#C084FC" }));
            flashHTML = `
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs font-mono uppercase rounded border border-purple-500/30">GALAXY</span>
                <span class="text-purple-200">${cleanName(galaxyData.galaxy_name)}</span>
              </div>
            `;
          } else if (type === 'system' && finalSystemName) {
            iconRoot.render(React.createElement(SystemIcon, { size: 24, color: "#67E8F9" }));
            flashHTML = `
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-mono uppercase rounded border border-cyan-500/30">SYSTEM</span>
                <span class="text-cyan-200">${cleanName(finalSystemName)}</span>
              </div>
            `;
          } else if (type === 'planet' && finalPlanetName) {
            iconRoot.render(React.createElement(PlanetIcon, { size: 24, color: "#F9A8D4" }));
            flashHTML = `
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-pink-900/50 text-pink-300 text-xs font-mono uppercase rounded border border-pink-500/30">PLANET</span>
                <span class="text-pink-200">${cleanName(finalPlanetName)}</span>
              </div>
            `;
          }

          // Actualizar el contenido del flash
          flashDiv.innerHTML = flashHTML;

          // Animación de entrada del icono y texto (scale up + fade in + slide in)
          setTimeout(() => {
            iconDiv.style.transform = "scale(1)";
            iconDiv.style.opacity = "1";
            flashDiv.style.transform = "translateX(0)";
            flashDiv.style.opacity = "1";
          }, 50);
        }, 250); // La mitad de la duración de la transición CSS (500ms / 2)
      };

      // SECUENCIA DE FLASHES FUTURISTA - ritmo dinámico pero legible
      // Flash 1: Coordenadas
      setCurrentFlash('coordinates');
      updateFlash('coordinates');
      await sleep(1000);

      // Flash 2: Galaxy
      setCurrentFlash('galaxy');
      updateFlash('galaxy');
      await sleep(900);

      // Flash 3: System (si existe)
      if (finalSystemName) {
        setCurrentFlash('system');
        updateFlash('system');
        await sleep(900);
      }

      // Flash 4: Planet (si existe)
      if (finalPlanetName) {
        setCurrentFlash('planet');
        updateFlash('planet');
        await sleep(900);
      }

      // Estado final: cambiar gradualmente el color de fondo a verde

      // Animar el overlay para crear una transición suave a verde
      overlay.style.background = "linear-gradient(to right, rgb(20 83 45 / 0.9), rgb(30 58 138 / 0.9))";
      overlay.style.opacity = "1";
      popup.style.borderColor = "rgb(34 197 94 / 0.5)";

      await sleep(500);

      // Navigate automatically después de mostrar toda la información
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
      }, 3500); // Reducir tiempo de espera
    } catch (error) {
      console.error("Random jump failed:", error);
      setRandomJumpText("❌ Jump failed");
      setDestinationInfo(null);
      setCurrentFlash(null);
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
        setCurrentFlash(null);
      }, 2000);
    }
  };

  useEffect(() => {
    if (onCoordinateChange && isInitialized) {
      onCoordinateChange(coordinates, false);
    }
  }, [coordinates, onCoordinateChange, isInitialized]);

  // Variable para rastrear el toast actual
  let currentToastElement: HTMLDivElement | null = null;

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
    <>
      <div className="w-full space-y-6 sm:space-y-8 relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative">
          <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-500/30 backdrop-blur-sm">{renderCoordinateGroup("x", "X")}</div>
          <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/30 backdrop-blur-sm">{renderCoordinateGroup("y", "Y")}</div>
          <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-pink-500/30 backdrop-blur-sm md:col-span-2 lg:col-span-1">{renderCoordinateGroup("z", "Z")}</div>
        </div>

        <div className="w-full flex gap-4 relative z-10">
          {showInitializeJump && !isRandomJumping && (
            <button type="submit" className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-95 shadow-lg backdrop-blur-sm">
              <span className="text-base sm:text-lg">🚀 Initialize Jump</span>
            </button>
          )}
          <button
            type="button"
            className={`
              group relative overflow-hidden font-bold text-lg rounded-xl shadow-lg backdrop-blur-sm
              transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
              ${isRandomJumping ? "w-full" : "flex-1"}
              ${isRandomJumping
                ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-cyan-500/20 text-cyan-400 cursor-wait'
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white hover:from-purple-700 hover:via-pink-700 hover:to-purple-800'
              }
              px-6 sm:px-8 py-3 sm:py-4
            `}
            onClick={isRandomJumping ? undefined : handleRandomLocationJump}
            disabled={isRandomJumping}
          >
            {/* Fondo animado para hover */}
            {!isRandomJumping && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            )}

            {/* Partículas flotantes para estado normal */}
            {!isRandomJumping && (
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
              {isRandomJumping ? (
                <>
                  <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-mono text-cyan-300">{randomJumpText}</span>
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
            {!isRandomJumping && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
                              bg-gradient-to-r from-white via-transparent to-white blur-sm"></div>
            )}
          </button>
        </div>

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

    </>
  );
};

export default CoordinateSelector;
