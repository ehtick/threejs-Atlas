// atlas-ui/react/static/js/Components/StargateAnimation.tsx
import React, { useState, useEffect, useRef } from "react";

const StargateAnimation = ({ stargateUrl }) => {
  const [displayText, setDisplayText] = useState("Aligning Stargate...");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const animationShownRef = useRef(false);

  const getRandomBinary = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 2)).join("");
  };

  const getRandomDecimal = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
  };

  const getRandomHexadecimal = (length) => {
    const hexChars = "0123456789ABCDEF";
    return Array.from({ length }, () => hexChars[Math.floor(Math.random() * 16)]).join("");
  };

  const getRandomAlphanumericSymbols = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.?/`~";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runAnimation = async () => {
    setIsAnimating(true);

    for (let i = 0; i < 20; i++) {
      setDisplayText(getRandomBinary(32));
      await sleep(40);
    }

    for (let i = 0; i < 30; i++) {
      setDisplayText(getRandomDecimal(32));
      await sleep(25);
    }

    for (let i = 0; i < 40; i++) {
      setDisplayText(getRandomHexadecimal(32));
      await sleep(20);
    }

    for (let i = 0; i < 100; i++) {
      setDisplayText(getRandomAlphanumericSymbols(32));
      await sleep(10);
    }

    const finalMessage = "Stargate system aligned";
    setDisplayText("");

    for (let i = 0; i < finalMessage.length; i++) {
      setDisplayText(finalMessage.substring(0, i + 1));
      await sleep(30);
    }

    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 300);

    setIsAnimating(false);
    sessionStorage.setItem("stargateAnimationShown", "true");
  };

  useEffect(() => {
    const animationShown = sessionStorage.getItem("stargateAnimationShown");

    if (animationShown) {
      setDisplayText("Stargate system aligned");
      animationShownRef.current = true;
    } else {
      runAnimation();
    }
  }, []);

  return (
    <div className="stargate-container">
      <a
        className={`stargate ${isScaled ? "scale-110" : ""}`}
        href={stargateUrl}
        style={{
          transition: "transform 0.3s ease",
          transform: isScaled ? "scale(1.1)" : "scale(1)",
          display: "inline-block",
        }}
      >
        <span id="stargate-text">{displayText}</span>
      </a>
    </div>
  );
};

export default StargateAnimation;
