// atlas-ui/react/static/js/Components/ResourceStatusBar.tsx
import React, { useState, useEffect } from "react";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources.tsx";
import { SpaceshipTravelManager } from "../Utils/SpaceshipTravelCosts.tsx";
import { ResourceEventManager } from "../Utils/ResourceEventManager.tsx";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";

interface ResourceStatusBarProps {
  currentLocation?: {
    type: "galaxy" | "system" | "planet";
    name?: string;
  };
}

const ResourceStatusBar: React.FC<ResourceStatusBarProps> = ({ currentLocation }) => {
  const [resources, setResources] = useState({ antimatter: 0, element115: 0, deuterium: 0 });
  const [efficiency, setEfficiency] = useState(1.0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateResources = () => {
      setResources(SpaceshipResourceManager.getResources());
      setEfficiency(SpaceshipTravelManager.getTravelEfficiency());
    };

    updateResources();

    const interval = setInterval(updateResources, 5000);

    const unsubscribe = ResourceEventManager.subscribe("resources_updated", updateResources);

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, []);

  const formatResource = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const getTravelCostPreview = () => {
    if (!currentLocation) return "N/A";

    const cost = SpaceshipTravelManager.previewTravelCost(currentLocation.type, 1);
    return cost;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-purple-300 flex items-center gap-1">
              <AntimatterIcon size={12} color="currentColor" />
              {formatResource(resources.antimatter)} AM
            </span>
            <span className="text-cyan-300 flex items-center gap-1">
              <Element115Icon size={12} color="currentColor" />
              {formatResource(resources.element115)} E115
            </span>
            <span className="text-orange-300 flex items-center gap-1">
              <DeuteriumIcon size={12} color="currentColor" />
              {formatResource(resources.deuterium)} D
            </span>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ResourceStatusBar;
