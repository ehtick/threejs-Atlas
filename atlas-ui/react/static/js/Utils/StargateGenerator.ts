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

  // Get current page from URL parameters or default to 1
  public static getCurrentPage(): number {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      return page ? parseInt(page, 10) : 1;
    } catch (error) {
      return 1;
    }
  }
}