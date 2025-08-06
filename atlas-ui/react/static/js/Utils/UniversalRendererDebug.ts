/**
 * Universal Renderer Debug Utilities
 * Para diagnosticar problemas con el renderizado de planetas
 */

export interface DebugInfo {
  timestamp: string;
  planetName: string;
  apiEndpoint: string;
  apiResponse?: any;
  apiError?: string;
  rendererState: string;
  browserInfo: {
    userAgent: string;
    webGL: boolean;
    webGL2: boolean;
  };
  networkError?: string;
}

export class UniversalRendererDebugger {
  private static logs: DebugInfo[] = [];
  
  /**
   * Test API connectivity for a specific planet
   */
  static async testAPI(planetName: string): Promise<DebugInfo> {
    console.log(`🔍 Testing API for planet: ${planetName}`);
    
    const debugInfo: DebugInfo = {
      timestamp: new Date().toISOString(),
      planetName,
      apiEndpoint: `/api/planet/${encodeURIComponent(planetName)}/rendering-data`,
      rendererState: 'testing',
      browserInfo: {
        userAgent: navigator.userAgent,
        webGL: this.checkWebGLSupport(),
        webGL2: this.checkWebGL2Support()
      }
    };
    
    try {
      console.log(`📡 Fetching: ${debugInfo.apiEndpoint}`);
      const response = await fetch(debugInfo.apiEndpoint);
      
      if (!response.ok) {
        debugInfo.apiError = `HTTP ${response.status}: ${response.statusText}`;
        debugInfo.rendererState = 'api_error';
      } else {
        const data = await response.json();
        debugInfo.apiResponse = data;
        
        if (data.error) {
          debugInfo.apiError = data.error;
          debugInfo.rendererState = 'api_error';
        } else if (data.success) {
          debugInfo.rendererState = 'api_success';
        } else {
          debugInfo.apiError = 'Unexpected API response format';
          debugInfo.rendererState = 'api_error';
        }
      }
    } catch (error) {
      debugInfo.networkError = error instanceof Error ? error.message : 'Unknown network error';
      debugInfo.rendererState = 'network_error';
    }
    
    this.logs.push(debugInfo);
    this.logDebugInfo(debugInfo);
    
    return debugInfo;
  }
  
  /**
   * Check WebGL support
   */
  private static checkWebGLSupport(): boolean {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  }
  
  /**
   * Check WebGL2 support
   */
  private static checkWebGL2Support(): boolean {
    try {
      const canvas = document.createElement('canvas');
      return !!canvas.getContext('webgl2');
    } catch (e) {
      return false;
    }
  }
  
  /**
   * Log debug information to console
   */
  private static logDebugInfo(info: DebugInfo) {
    console.group(`🌍 Universal Renderer Debug - ${info.planetName}`);
    
    console.log(`⏰ Timestamp: ${info.timestamp}`);
    console.log(`🌍 Planet: ${info.planetName}`);
    console.log(`📡 API Endpoint: ${info.apiEndpoint}`);
    console.log(`🎮 Renderer State: ${info.rendererState}`);
    
    // Browser info
    console.group('🖥️ Browser Support');
    console.log(`WebGL: ${info.browserInfo.webGL ? '✅' : '❌'}`);
    console.log(`WebGL2: ${info.browserInfo.webGL2 ? '✅' : '❌'}`);
    console.groupEnd();
    
    // API Response
    if (info.apiResponse) {
      console.group('📊 API Response');
      console.log('Success:', info.apiResponse.success);
      if (info.apiResponse.rendering_data) {
        console.log('Planet Type:', info.apiResponse.rendering_data.planet_info?.type);
        console.log('Has Rings:', info.apiResponse.rendering_data.rings?.has_rings);
        console.log('Has Atmosphere:', !!info.apiResponse.rendering_data.atmosphere);
        console.log('Surface Elements:', info.apiResponse.rendering_data.surface_elements?.type);
      }
      console.groupEnd();
    }
    
    // Errors
    if (info.apiError) {
      console.error('❌ API Error:', info.apiError);
    }
    
    if (info.networkError) {
      console.error('🌐 Network Error:', info.networkError);
    }
    
    console.groupEnd();
  }
  
  /**
   * Get current page planet name
   */
  static getCurrentPlanetName(): string | null {
    const path = window.location.pathname;
    const match = path.match(/\/planet\/([^\/]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }
  
  /**
   * Test current planet
   */
  static async testCurrentPlanet(): Promise<DebugInfo | null> {
    const planetName = this.getCurrentPlanetName();
    if (!planetName) {
      console.error('❌ No planet found in current URL');
      return null;
    }
    
    return await this.testAPI(planetName);
  }
  
  /**
   * Get session info from the page
   */
  static getSessionInfo(): any {
    try {
      const planetData = document.getElementById('planet-data');
      const systemData = document.getElementById('system-data');
      const galaxyData = document.getElementById('galaxy-data');
      
      return {
        planet: planetData ? JSON.parse(planetData.textContent || '{}') : null,
        system: systemData ? JSON.parse(systemData.textContent || '{}') : null,
        galaxy: galaxyData ? JSON.parse(galaxyData.textContent || '{}') : null
      };
    } catch (error) {
      console.error('❌ Error getting session info:', error);
      return null;
    }
  }
  
  /**
   * Full diagnostic
   */
  static async runFullDiagnostic(): Promise<void> {
    console.log('🚀 Running Full Universal Renderer Diagnostic...');
    console.log('=' .repeat(60));
    
    // 1. Check current planet
    const planetName = this.getCurrentPlanetName();
    console.log(`🌍 Current Planet: ${planetName || 'Not found'}`);
    
    // 2. Check session data
    const sessionInfo = this.getSessionInfo();
    console.log('📊 Session Data:', sessionInfo);
    
    // 3. Test API if planet found
    if (planetName) {
      await this.testCurrentPlanet();
    }
    
    // 4. Check browser support
    console.group('🖥️ Browser Capabilities');
    console.log(`WebGL: ${this.checkWebGLSupport() ? '✅' : '❌'}`);
    console.log(`WebGL2: ${this.checkWebGL2Support() ? '✅' : '❌'}`);
    console.log(`Local Storage: ${typeof Storage !== 'undefined' ? '✅' : '❌'}`);
    console.log(`Fetch API: ${typeof fetch !== 'undefined' ? '✅' : '❌'}`);
    console.groupEnd();
    
    console.log('✅ Diagnostic complete. Check logs above for issues.');
  }
  
  /**
   * Get all debug logs
   */
  static getLogs(): DebugInfo[] {
    return [...this.logs];
  }
  
  /**
   * Clear debug logs
   */
  static clearLogs(): void {
    this.logs = [];
    console.log('🗑️ Debug logs cleared');
  }
}

// Export for global access
if (typeof window !== 'undefined') {
  (window as any).UniversalRendererDebugger = UniversalRendererDebugger;
  
  // Add convenient global functions
  (window as any).debugUniversalRenderer = () => UniversalRendererDebugger.runFullDiagnostic();
  (window as any).testCurrentPlanet = () => UniversalRendererDebugger.testCurrentPlanet();
}

export default UniversalRendererDebugger;