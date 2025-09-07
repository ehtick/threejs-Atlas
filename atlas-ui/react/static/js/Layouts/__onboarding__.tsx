// atlas-ui/react/static/js/Layouts/__onboarding__.tsx

import React, { useState } from "react";
import VersionFooter from "../Components/VersionFooter.tsx";
import UniverseAnimationCanvas from "../Components/UniverseAnimationCanvas.tsx";

interface OnboardingLayoutProps {
  version: string;
  versionHash: string;
}

interface UniverseOption {
  value: string;
  title: string;
  description: string;
}

type AnimationState = "selection" | "animating" | "processing" | "redirecting";
type AnimationType = "core" | "multiverse" | "processing" | null;

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ version }) => {
  const [selectedUniverse, setSelectedUniverse] = useState<string>("");
  const [animationState, setAnimationState] = useState<AnimationState>("selection");
  const [animationType, setAnimationType] = useState<AnimationType>(null);

  const universeOptions: UniverseOption[] = [
    {
      value: "default",
      title: "The Core Continuum",
      description: "Venture into the primordial universe where time and space converge for you, exploring the vast cosmos we all traverse as a single entity.",
    },
    {
      value: "custom",
      title: "Design the Multiverse",
      description: "Generate a personal universe with its own seed and cosmic origin time, a completely unique creation entirely shaped by your decision.",
    },
  ];

  const handleCardClick = (value: string) => {
    setSelectedUniverse(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUniverse || animationState !== "selection") return;

    setAnimationState("animating");
    setAnimationType(selectedUniverse === "default" ? "core" : "multiverse");
  };

  const handleAnimationComplete = async () => {
    const formData = new FormData();
    formData.append("universe_type", selectedUniverse);

    try {
      const createResponse = await fetch("/onboarding", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error creating universe:", error);
      window.location.href = "/";
    }
  };

  return (
    <>
      {animationType && (
        <div className="fixed inset-0 bg-black z-50 opacity-0 animate-fade-in">
          <UniverseAnimationCanvas animationType={animationType} onAnimationComplete={handleAnimationComplete} />
        </div>
      )}

      <div className={`w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto transition-opacity duration-500 ${animationState !== "selection" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10">
          <header className="bg-black/20 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-6">
            <div className="w-full flex flex-col items-center space-y-4">
              <img src="/static/atlas-logo.jpg" alt="Atlas Logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-cyan-400 shadow-lg animate-pulse" />
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Atlas Initialization Protocol</h1>
                <p className="text-sm sm:text-base text-gray-300 mt-2">Quantum Navigation System Startup Sequence</p>
              </div>
            </div>
          </header>

          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-12">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Will you journey through a shared universe or forge a new one of your own?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                  {universeOptions.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleCardClick(option.value)}
                      className={`
                        relative group cursor-pointer transition-all duration-500 transform hover:scale-105
                        ${selectedUniverse === option.value ? "shadow-2xl shadow-cyan-400/25 scale-105" : "hover:shadow-xl hover:shadow-blue-500/20"}
                      `}
                    >
                      <div className="bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 h-full">
                        <div className="absolute top-4 right-4">
                          <div
                            className={`
                            w-6 h-6 rounded-full border-2 transition-all duration-300
                            ${selectedUniverse === option.value ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50" : "border-gray-400 group-hover:border-cyan-400"}
                          `}
                          >
                            {selectedUniverse === option.value && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">{option.title}</h2>
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{option.description}</p>
                        </div>

                        <div
                          className={`
                          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10
                          ${selectedUniverse === option.value ? "opacity-20" : ""}
                        `}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!selectedUniverse || animationState !== "selection"}
                    className={`
                      relative overflow-hidden group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform
                      ${selectedUniverse && animationState === "selection" ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 active:scale-95" : "bg-gray-600 text-gray-400 cursor-not-allowed"}
                    `}
                  >
                    {selectedUniverse && animationState === "selection" && <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>}

                    <span className="relative z-10">
                      <span>{selectedUniverse ? "Initialize Protocol" : "Select Universe Type"}</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <VersionFooter version={version} />
        </div>
      </div>
    </>
  );
};

export default OnboardingLayout;
