// atlas-ui/react/static/js/Components/StargateButton.tsx
import React, { useState, useEffect, useRef } from "react";
import ShareModal from "./ShareModal";

interface StargateButtonProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

const StargateButton: React.FC<StargateButtonProps> = ({ href, className = "", style = {} }) => {
  const [displayText, setDisplayText] = useState("Aligning Stargate...");
  const [isScaled, setIsScaled] = useState(false);
  const [showShareButton, setShowShareButton] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
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

    setShowShareButton(true);

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
      setShowShareButton(true);
      animationShownRef.current = true;
    } else {
      runAnimation();
    }
  }, []);

  return (
    <>
      <div
        className={`stargate ${className} relative inline-flex items-center group inline-block bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-full border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${isScaled ? "scale-110" : ""}`}
        style={{
          transition: "transform 0.3s ease",
          transform: isScaled ? "scale(1.1)" : "scale(1)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          ...style,
        }}
      >
        <div className="flex-1 flex items-stretch">
          <a href={href} className="px-4 py-2 font-mono flex items-center gap-1 text-inherit no-underline w-full h-full rounded-lg hover:bg-slate-700 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
                <path d="M14 12a6 6 0 1 1-6-6"></path>
                <path d="M10 12a6 6 0 1 1 6 6" opacity={0.5}></path>
              </g>
            </svg>
            {displayText}
          </a>
        </div>

        {showShareButton && (
          <>
            <span className="text-slate-500 self-stretch flex items-center mx-0.5">|</span>

            <button onClick={() => setShowShareModal(true)} className="px-4 py-3 flex items-center justify-center hover:bg-slate-700 rounded-lg transition-all duration-200 text-gray-400 hover:text-white self-stretch" title="Share this Stargate link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} url={href.startsWith("/") ? `${window.location.origin}${href}` : href} title="Check out this Stargate destination on The Atlas!" />
    </>
  );
};

export default StargateButton;
