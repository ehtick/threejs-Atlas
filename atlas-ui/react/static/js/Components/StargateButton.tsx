// atlas-ui/react/static/js/Components/StargateButton.tsx
import React, { useState, useEffect, useRef } from "react";

interface StargateButtonProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

const StargateButton: React.FC<StargateButtonProps> = ({ href, className = "", style = {} }) => {
  const [displayText, setDisplayText] = useState("Aligning Stargate...");
  const [isScaled, setIsScaled] = useState(false);
  const animationShownRef = useRef(false);

  const getRandomString = (chars: string, length: number) => {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runAnimation = async () => {
    const phases = [
      { chars: "01", duration: 20, iterations: 30, length: 24 },
      { chars: "0123456789", duration: 15, iterations: 40, length: 24 },
      { chars: "0123456789ABCDEF", duration: 10, iterations: 50, length: 24 },
      { chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~", duration: 5, iterations: 100, length: 24 },
    ];

    for (const phase of phases) {
      for (let i = 0; i < phase.iterations; i++) {
        setDisplayText(getRandomString(phase.chars, phase.length));
        await sleep(phase.duration);
      }
    }

    const finalMessage = "Stargate Aligned";
    setDisplayText("");

    for (let i = 0; i < finalMessage.length; i++) {
      setDisplayText(finalMessage.substring(0, i + 1));
      await sleep(30);
    }

    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 300);

    sessionStorage.setItem("stargateAnimationShown", "true");
  };

  useEffect(() => {
    const animationShown = sessionStorage.getItem("stargateAnimationShown");

    if (animationShown) {
      setDisplayText("Stargate Aligned");
      animationShownRef.current = true;
    } else {
      runAnimation();
    }
  }, []);

  return (
    <a
      className={`stargate ${className} ${isScaled ? "scale-110" : ""}`}
      href={href}
      style={{
        transition: "transform 0.3s ease",
        transform: isScaled ? "scale(1.1)" : "scale(1)",
        display: "inline-block",
        ...style,
      }}
    >
      <span id="stargate-text" className="relative z-10 font-mono flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
            <path d="M14 12a6 6 0 1 1-6-6"></path>
            <path d="M10 12a6 6 0 1 1 6 6" opacity={0.5}></path>
          </g>
        </svg>
        {displayText}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

export default StargateButton;
