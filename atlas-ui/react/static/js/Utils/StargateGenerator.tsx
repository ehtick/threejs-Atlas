import React from 'react';

// Stargate URL generator - matches the Python backend implementation

export class StargateGenerator {
  
  private static encodeUrl(data: string): string {
    // Convert string to base64 (URL-safe) - keeping padding like Python backend
    return btoa(data)
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
      // Don't remove padding (=) to match Python backend exactly
  }

  public static generateGalaxyUrl(galaxyCoordinates: number[], page: number = 1): string {
    const data = `coordinates=${galaxyCoordinates[0]},${galaxyCoordinates[1]},${galaxyCoordinates[2]}&page=${page}`;
    const encodedData = this.encodeUrl(data);
    return `${window.location.origin}/stargate/${encodedData}`;
  }

  public static generateSystemUrl(galaxyCoordinates: number[], systemIndex: number, page: number = 1): string {
    const data = `coordinates=${galaxyCoordinates[0]},${galaxyCoordinates[1]},${galaxyCoordinates[2]}&system=${systemIndex}&page=${page}`;
    const encodedData = this.encodeUrl(data);
    return `${window.location.origin}/stargate/${encodedData}`;
  }

  public static generatePlanetUrl(galaxyCoordinates: number[], systemIndex: number, planetName: string, page: number = 1): string {
    const data = `coordinates=${galaxyCoordinates[0]},${galaxyCoordinates[1]},${galaxyCoordinates[2]}&system=${systemIndex}&planet=${planetName.toLowerCase()}&page=${page}`;
    const encodedData = this.encodeUrl(data);
    return `${window.location.origin}/stargate/${encodedData}`;
  }

  // Get current page from URL path or parameters
  public static getCurrentPage(): number {
    try {
      // First try URL parameters (?page=N)
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
      if (pageParam) {
        return parseInt(pageParam, 10);
      }
      
      // Then try galaxy page from path (/galaxy/N)
      const pathMatch = window.location.pathname.match(/\/galaxy\/(\d+)/);
      if (pathMatch) {
        return parseInt(pathMatch[1], 10);
      }
      
      // Default to page 1
      return 1;
    } catch (error) {
      return 1;
    }
  }
}