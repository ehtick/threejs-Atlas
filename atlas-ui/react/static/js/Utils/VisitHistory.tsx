import React from 'react';
// Utility functions for managing visit history
import { OptimizedAtlasStorage } from './OptimizedStorage.tsx';

export interface VisitedData {
  [coordinates: string]: {
    [systemIndex: string]: string[]; // Array of planet names (lowercase)
  };
}

export const markGalaxyAsVisited = (coordinates: string): void => {
  OptimizedAtlasStorage.markGalaxyVisited(coordinates);
};

export const markPlanetAsVisited = (coordinates: string, systemIndex: number, planetName: string, systemPlanets: any[]): void => {
  OptimizedAtlasStorage.markPlanetVisited(coordinates, systemIndex, planetName, systemPlanets);
};

export const markSystemAsVisited = (coordinates: string, systemIndex: number): void => {
  OptimizedAtlasStorage.markSystemVisited(coordinates, systemIndex);
};

export const getVisitedPlanets = (coordinates: string, systemIndex: number, systemPlanets: any[]): string[] => {
  return OptimizedAtlasStorage.getVisitedPlanets(coordinates, systemIndex, systemPlanets);
};

export const isSystemFullyVisited = (coordinates: string, systemIndex: number, totalPlanets: number, systemPlanets: any[]): boolean => {
  const visitedPlanets = getVisitedPlanets(coordinates, systemIndex, systemPlanets);
  return visitedPlanets.length >= totalPlanets && totalPlanets > 0;
};

export const isSystemPartiallyVisited = (coordinates: string, systemIndex: number, systemPlanets: any[]): boolean => {
  const visitedPlanets = getVisitedPlanets(coordinates, systemIndex, systemPlanets);
  return visitedPlanets.length > 0;
};

export const isGalaxyVisited = (coordinates: string): boolean => {
  return OptimizedAtlasStorage.isGalaxyVisited(coordinates);
};

export const isSystemVisited = (coordinates: string, systemIndex: number): boolean => {
  return OptimizedAtlasStorage.isSystemVisited(coordinates, systemIndex);
};

export const getSystemVisitStatus = (coordinates: string, systemIndex: number, totalPlanets: number, systemPlanets?: any[]): 'none' | 'partial' | 'complete' => {
  if (!isSystemVisited(coordinates, systemIndex)) {
    return 'none';
  }
  
  // If we have systemPlanets data, use the full function
  if (systemPlanets) {
    if (isSystemFullyVisited(coordinates, systemIndex, totalPlanets, systemPlanets)) {
      return 'complete';
    } else {
      return 'partial';
    }
  } else {
    // Fallback: use the optimized count method
    const visitedCount = OptimizedAtlasStorage.getVisitedPlanetCount(coordinates, systemIndex);
    if (visitedCount >= totalPlanets && totalPlanets > 0) {
      return 'complete';
    } else if (visitedCount > 0) {
      return 'partial';
    } else {
      return 'partial'; // System is visited but no specific planets tracked
    }
  }
};

// Storage statistics utility
export const getStorageStats = () => {
  return OptimizedAtlasStorage.getStorageStats();
};