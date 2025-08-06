/**
 * Debug Planet Data Utility
 * =========================
 * Componente React para debuggear qué datos recibe el frontend y cómo los interpreta.
 * Muestra tanto los datos crudos de Python como los efectos que se aplican.
 * 
 * Uso: Agregar <DebugPlanetData planetData={data} /> en cualquier componente que reciba datos de planeta
 */

import React, { useEffect, useState } from 'react';
import { EffectRegistry } from '../3DEffects/EffectRegistry';

interface DebugPlanetDataProps {
  planetData: any;
  showInConsole?: boolean;
  showInPage?: boolean;
}

export const DebugPlanetData: React.FC<DebugPlanetDataProps> = ({ 
  planetData, 
  showInConsole = true,
  showInPage = false 
}) => {
  const [effectsApplied, setEffectsApplied] = useState<string[]>([]);
  const [dataAnalysis, setDataAnalysis] = useState<any>({});

  useEffect(() => {
    if (!planetData) return;

    // Analizar datos
    const analysis = analyzePlanetData(planetData);
    setDataAnalysis(analysis);

    // Mostrar en consola si está habilitado
    if (showInConsole) {
      console.group(`🔍 DEBUG: DATOS DEL PLANETA ${planetData.planet_info?.name || 'Unknown'}`);
      
      console.log('1️⃣ INFORMACIÓN BÁSICA:', {
        name: planetData.planet_info?.name,
        type: planetData.planet_info?.type,
        base_color: planetData.planet_info?.base_color,
        radius: planetData.planet_info?.radius
      });

      console.log('2️⃣ SEMILLAS:', planetData.seeds);

      console.log('3️⃣ ELEMENTOS DE SUPERFICIE:', planetData.surface_elements);

      if (planetData.surface_elements?.type === 'oceanic') {
        console.group('🌊 DATOS OCEÁNICOS ESPECÍFICOS:');
        console.log('Abstract Lands:', planetData.surface_elements.abstract_lands);
        console.log('Green Patches:', planetData.surface_elements.green_patches);
        console.log('Clouds:', planetData.surface_elements.clouds);
        console.log('Depths:', planetData.surface_elements.depths);
        console.groupEnd();
      }

      console.log('4️⃣ ATMÓSFERA:', planetData.atmosphere);
      console.log('5️⃣ ANILLOS:', planetData.rings);
      console.log('6️⃣ VIDA:', planetData.life_forms);

      // Mostrar qué efectos se aplicarían
      const registry = EffectRegistry.getInstance();
      console.group('🎨 EFECTOS QUE SE APLICARÍAN:');
      const effects = determineEffects(planetData);
      effects.forEach(effect => {
        console.log(`- ${effect}`);
      });
      console.groupEnd();

      console.log('📊 ANÁLISIS:', analysis);
      
      console.groupEnd();
    }

    // Guardar efectos que se aplicarían
    setEffectsApplied(determineEffects(planetData));

    // También guardar en window para acceso global
    if (typeof window !== 'undefined') {
      (window as any).__DEBUG_PLANET_DATA = planetData;
      (window as any).__DEBUG_PLANET_ANALYSIS = analysis;
      console.log('💡 Tip: Accede a los datos con window.__DEBUG_PLANET_DATA y window.__DEBUG_PLANET_ANALYSIS');
    }

  }, [planetData, showInConsole]);

  // Función para analizar los datos
  function analyzePlanetData(data: any) {
    const analysis: any = {
      hasValidStructure: false,
      missingFields: [],
      dataIntegrity: 'unknown',
      renderingIssues: [],
      colorConsistency: 'unknown'
    };

    // Verificar estructura
    if (data.planet_info && data.surface_elements) {
      analysis.hasValidStructure = true;
    } else {
      if (!data.planet_info) analysis.missingFields.push('planet_info');
      if (!data.surface_elements) analysis.missingFields.push('surface_elements');
    }

    // Para planetas oceánicos, verificar datos específicos
    if (data.surface_elements?.type === 'oceanic') {
      analysis.oceanicData = {
        hasAbstractLands: !!data.surface_elements.abstract_lands?.length,
        numGreenPatches: data.surface_elements.green_patches?.length || 0,
        numClouds: data.surface_elements.clouds?.length || 0,
        hasDepths: data.surface_elements.depths?.enabled || false,
        
        // Verificar colores
        baseColorIsBlue: data.planet_info?.base_color === '#0000FF',
        greenPatchColor: data.surface_elements.green_patches?.[0]?.color,
        
        // Detectar problemas potenciales
        issues: []
      };

      // Detectar si los parches verdes dominarán visualmente
      if (analysis.oceanicData.numGreenPatches > 15) {
        analysis.oceanicData.issues.push('Muchos parches verdes pueden ocultar el océano azul');
      }

      // Verificar si el color base se está usando
      if (!analysis.oceanicData.baseColorIsBlue) {
        analysis.oceanicData.issues.push(`Color base no es azul puro: ${data.planet_info?.base_color}`);
      }

      analysis.renderingIssues = analysis.oceanicData.issues;
    }

    // Verificar consistencia de color
    if (data.planet_info?.base_color && data.planet_info?.type) {
      const expectedColors: Record<string, string> = {
        'Oceanic': '#0000FF',
        'Rocky': '#808080',
        'Icy': '#ADD8E6',
        'Desert': '#FFD700',
        'Lava': '#FF0000'
      };

      const expected = expectedColors[data.planet_info.type];
      if (expected && data.planet_info.base_color !== expected) {
        analysis.colorConsistency = `Inconsistente: esperado ${expected}, recibido ${data.planet_info.base_color}`;
      } else {
        analysis.colorConsistency = 'Correcto';
      }
    }

    return analysis;
  }

  // Función para determinar qué efectos se aplicarían
  function determineEffects(data: any): string[] {
    const effects: string[] = [];
    
    if (!data.surface_elements?.type) return ['No surface type defined'];

    const planetType = data.surface_elements.type.toLowerCase();

    switch (planetType) {
      case 'oceanic':
        effects.push('OceanWavesEffect (PROBLEMA: ignora green_patches de Python)');
        break;
      case 'rocky':
        effects.push('RockyTerrainEffect');
        break;
      case 'icy':
        effects.push('IcyTerrainEffect');
        break;
      case 'gas giant':
        effects.push('GasGiantBandsEffect');
        break;
      default:
        effects.push(`Generic effect for type: ${planetType}`);
    }

    // Efectos adicionales
    if (data.atmosphere?.density > 0) {
      effects.push('AtmosphericEffect');
    }
    if (data.rings) {
      effects.push('RingSystemEffect');
    }

    return effects;
  }

  // Si no mostrar en página, no renderizar nada
  if (!showInPage) return null;

  // Renderizar panel de debug en la página
  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 10,
      background: 'rgba(0, 0, 0, 0.9)',
      color: '#00ff00',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: 'monospace',
      fontSize: '12px',
      maxWidth: '400px',
      maxHeight: '600px',
      overflow: 'auto',
      zIndex: 10000,
      border: '1px solid #00ff00'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#00ff00' }}>
        🔍 Planet Debug: {planetData.planet_info?.name}
      </h3>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Type:</strong> {planetData.planet_info?.type}<br/>
        <strong>Base Color:</strong> {planetData.planet_info?.base_color}<br/>
        <strong>Radius:</strong> {planetData.planet_info?.radius}
      </div>

      {planetData.surface_elements?.type === 'oceanic' && (
        <div style={{ marginBottom: '10px', borderTop: '1px solid #00ff00', paddingTop: '10px' }}>
          <strong>🌊 Oceanic Data:</strong><br/>
          <span style={{ color: dataAnalysis.oceanicData?.baseColorIsBlue ? '#00ff00' : '#ff0000' }}>
            Base Color: {dataAnalysis.oceanicData?.baseColorIsBlue ? '✓ Blue' : '✗ Not Blue'}
          </span><br/>
          Green Patches: {dataAnalysis.oceanicData?.numGreenPatches}<br/>
          Clouds: {dataAnalysis.oceanicData?.numClouds}<br/>
          Has Depths: {dataAnalysis.oceanicData?.hasDepths ? 'Yes' : 'No'}<br/>
          
          {dataAnalysis.oceanicData?.issues?.length > 0 && (
            <div style={{ color: '#ffaa00', marginTop: '5px' }}>
              ⚠️ Issues:<br/>
              {dataAnalysis.oceanicData.issues.map((issue: string, i: number) => (
                <div key={i}>- {issue}</div>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ borderTop: '1px solid #00ff00', paddingTop: '10px' }}>
        <strong>🎨 Effects Applied:</strong><br/>
        {effectsApplied.map((effect, i) => (
          <div key={i} style={{ 
            color: effect.includes('PROBLEMA') ? '#ff0000' : '#00ff00' 
          }}>
            - {effect}
          </div>
        ))}
      </div>

      <button 
        onClick={() => {
          console.log('Full Planet Data:', planetData);
          console.log('Analysis:', dataAnalysis);
        }}
        style={{
          marginTop: '10px',
          background: '#00ff00',
          color: '#000',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '3px'
        }}
      >
        Log to Console
      </button>
    </div>
  );
};

// Hook personalizado para debugging
export function useDebugPlanetData(planetData: any) {
  useEffect(() => {
    if (!planetData) return;

    console.group(`🔍 HOOK DEBUG: ${planetData.planet_info?.name}`);
    console.log('Planet Data:', planetData);
    
    // Detectar problemas específicos
    if (planetData.surface_elements?.type === 'oceanic') {
      const hasGreenPatches = planetData.surface_elements.green_patches?.length > 0;
      const baseColor = planetData.planet_info?.base_color;
      
      if (baseColor !== '#0000FF') {
        console.warn('⚠️ Planeta oceánico sin color azul base!', baseColor);
      }
      
      if (hasGreenPatches) {
        console.log(`📍 ${planetData.surface_elements.green_patches.length} parches verdes detectados`);
        console.log('Primer parche:', planetData.surface_elements.green_patches[0]);
      }
    }
    
    console.groupEnd();
  }, [planetData]);
}

// Función helper para logging rápido
export function logPlanetData(planetData: any, prefix = '') {
  const name = planetData?.planet_info?.name || 'Unknown';
  const type = planetData?.planet_info?.type || 'Unknown';
  
  console.log(`${prefix}[${name}/${type}]`, {
    baseColor: planetData?.planet_info?.base_color,
    surfaceType: planetData?.surface_elements?.type,
    elements: planetData?.surface_elements
  });
}