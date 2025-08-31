// atlas-ui/react/static/js/Utils/SpaceshipTravelCosts.tsx

import React from "react";
import { SpaceshipResourceManager, TravelCost } from "./SpaceshipResources.tsx";

export class SpaceshipTravelManager {
  static getTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): TravelCost {
    return SpaceshipResourceManager.calculateTravelCost(locationType, distance);
  }

  static canAffordTravel(locationType: "galaxy" | "system" | "planet", distance: number = 0): boolean {
    return true;
  }

  static executeTravel(locationType: "galaxy" | "system" | "planet", distance: number = 0): "success" | "partial" | "emergency" {
    const cost = this.getTravelCost(locationType, distance);
    const resources = SpaceshipResourceManager.getResources();
    const upgrade = SpaceshipResourceManager.getUpgrade();

    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    console.log("[DEBUG executeTravel] Distance:", distance, "Base cost:", cost, "Efficiency:", upgrade.efficiency, "Actual cost:", actualCost, "Resources:", resources);

    const resourcePercentages = [resources.antimatter / actualCost.antimatter, resources.element115 / actualCost.element115, resources.deuterium / actualCost.deuterium];

    const minPercentage = Math.min(...resourcePercentages);

    if (minPercentage >= 1.0) {
      SpaceshipResourceManager.consumeResources(actualCost);
      return "success";
    } else if (minPercentage >= 0.5) {
      SpaceshipResourceManager.consumeResources({
        antimatter: Math.min(resources.antimatter, actualCost.antimatter),
        element115: Math.min(resources.element115, actualCost.element115),
        deuterium: Math.min(resources.deuterium, actualCost.deuterium),
      });
      return "partial";
    } else {
      return "emergency";
    }
  }

  static previewTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): string {
    const cost = this.getTravelCost(locationType, distance);
    const upgrade = SpaceshipResourceManager.getUpgrade();

    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    return `${actualCost.antimatter}AM | ${actualCost.element115}E115 | ${actualCost.deuterium}D`;
  }

  static getActualTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): { antimatter: number; element115: number; deuterium: number } {
    const cost = this.getTravelCost(locationType, distance);
    const resources = SpaceshipResourceManager.getResources();
    const upgrade = SpaceshipResourceManager.getUpgrade();

    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    const resourcePercentages = [resources.antimatter / actualCost.antimatter, resources.element115 / actualCost.element115, resources.deuterium / actualCost.deuterium];

    const minPercentage = Math.min(...resourcePercentages);

    if (minPercentage >= 1.0) {
      return actualCost;
    } else if (minPercentage >= 0.5) {
      return {
        antimatter: Math.min(resources.antimatter, actualCost.antimatter),
        element115: Math.min(resources.element115, actualCost.element115),
        deuterium: Math.min(resources.deuterium, actualCost.deuterium),
      };
    } else {
      return { antimatter: 0, element115: 0, deuterium: 0 };
    }
  }

  static getTravelEfficiency(): number {
    const upgrade = SpaceshipResourceManager.getUpgrade();
    return upgrade.efficiency;
  }

  static getMaxTravelRange(): number {
    const upgrade = SpaceshipResourceManager.getUpgrade();
    return upgrade.range;
  }
}
