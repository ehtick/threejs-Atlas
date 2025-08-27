// Shared types for spaceship system
export interface ShipResource {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface ShipUpgrade {
  level: number;
  efficiency: number; // Reduces travel costs
  range: number; // Maximum travel distance
  storage: number; // Maximum resource capacity
  passiveGeneration: number; // Passive resource generation rate
}

export interface TravelCost {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface ResourceReward {
  antimatter: number;
  element115: number;
  deuterium: number;
}