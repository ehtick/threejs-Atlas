// Example of how to integrate the new confirmation dialog system
// This file shows how UI components should call the new LocationBookmarks methods

import { LocationBookmarks } from './LocationBookmarks';

/**
 * Example: Save button click handler with proper state management
 */
export async function handleSaveLocationClick(
  locationName: string,
  locationType: 'galaxy' | 'system' | 'planet',
  stargateUrl: string,
  saveButton?: HTMLElement
) {
  try {
    // Step 1: Check availability (no visual state change yet)
    const stats = LocationBookmarks.getLocationStats();
    
    if (stats.available === 0) {
      console.log(`No slots available. Using ${stats.total}/${stats.maxAllowed} slots.`);
    }
    
    // Step 2: Show the dialog if needed (still no "saving" state)
    // The saveLocation method will handle the dialog internally
    const location = { name: locationName, type: locationType, stargateUrl };
    
    // Step 3: Only show "saving" state after user confirms (if they do)
    const saved = await LocationBookmarks.saveLocation(location);
    
    if (saved) {
      // Step 4: Now show "saving" and then "saved" states
      if (saveButton) {
        saveButton.textContent = 'Saving...';
        saveButton.className = saveButton.className.replace('bg-blue-600', 'bg-yellow-600');
      }
      
      // Simulate brief saving delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (saveButton) {
        saveButton.textContent = 'Saved!';
        saveButton.className = saveButton.className.replace('bg-yellow-600', 'bg-green-600');
        
        // Reset button after delay
        setTimeout(() => {
          saveButton.textContent = 'Save Location';
          saveButton.className = saveButton.className.replace('bg-green-600', 'bg-blue-600');
        }, 2000);
      }
      
      showNotification(`Location "${locationName}" saved successfully!`, 'success');
      
    } else {
      // Step 5: User cancelled - no visual state change needed
      showNotification('Save operation cancelled by user.', 'info');
    }
    
    // Step 6: Always refresh UI to show updated slot count
    updateSlotCountDisplay();
    
  } catch (error) {
    console.error('Error saving location:', error);
    
    // Reset button state on error
    if (saveButton) {
      saveButton.textContent = 'Save Location';
      saveButton.className = saveButton.className.replace('bg-yellow-600', 'bg-blue-600');
      saveButton.className = saveButton.className.replace('bg-green-600', 'bg-blue-600');
    }
    
    showNotification('Failed to save location. Please try again.', 'error');
  }
}

/**
 * Example: Check slot availability before showing save button
 */
export function shouldShowSaveButton(): boolean {
  const stats = LocationBookmarks.getLocationStats();
  
  // Always show save button, but the dialog will handle full slots
  return true;
  
  // Alternative: Hide save button when slots are full
  // return stats.available > 0;
}

/**
 * Example: Display slot information in UI
 */
export function getSlotDisplayText(): string {
  const stats = LocationBookmarks.getLocationStats();
  
  if (stats.available > 0) {
    return `${stats.total}/${stats.maxAllowed} slots used (${stats.available} available)`;
  } else {
    return `${stats.total}/${stats.maxAllowed} slots used (Full - complete daily challenges for more slots)`;
  }
}

/**
 * Example: Show notification (replace with your notification system)
 */
function showNotification(message: string, type: 'success' | 'error' | 'info') {
  console.log(`[${type.toUpperCase()}] ${message}`);
  
  // Example with toast notification
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white ${
    type === 'success' ? 'bg-green-600' : 
    type === 'error' ? 'bg-red-600' : 'bg-blue-600'
  }`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/**
 * Example: Update UI slot count display
 */
function updateSlotCountDisplay() {
  const slotElement = document.getElementById('slot-count-display');
  if (slotElement) {
    slotElement.textContent = getSlotDisplayText();
  }
}

/**
 * Example: React/State-based component integration
 */
export async function handleSaveLocationWithState(
  locationName: string,
  locationType: 'galaxy' | 'system' | 'planet',
  stargateUrl: string,
  setButtonState: (state: 'idle' | 'saving' | 'saved' | 'error') => void
) {
  try {
    // Step 1: Keep button in idle state during dialog
    // Don't change state until user makes decision
    
    const location = { name: locationName, type: locationType, stargateUrl };
    const saved = await LocationBookmarks.saveLocation(location);
    
    if (saved) {
      // Step 2: User confirmed - now show saving state
      setButtonState('saving');
      
      // Brief delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 3: Show saved state
      setButtonState('saved');
      
      // Step 4: Reset to idle after 2 seconds
      setTimeout(() => {
        setButtonState('idle');
      }, 2000);
      
      showNotification(`Location "${locationName}" saved successfully!`, 'success');
      
    } else {
      // User cancelled - keep button in idle state
      showNotification('Save operation cancelled by user.', 'info');
    }
    
    updateSlotCountDisplay();
    
  } catch (error) {
    console.error('Error saving location:', error);
    setButtonState('error');
    
    // Reset to idle after showing error
    setTimeout(() => {
      setButtonState('idle');
    }, 3000);
    
    showNotification('Failed to save location. Please try again.', 'error');
  }
}

/**
 * Example: Button state styling helper
 */
export function getButtonStyles(state: 'idle' | 'saving' | 'saved' | 'error'): { text: string; className: string } {
  switch (state) {
    case 'saving':
      return {
        text: 'Saving...',
        className: 'bg-yellow-600 hover:bg-yellow-500 cursor-not-allowed'
      };
    case 'saved':
      return {
        text: 'Saved!',
        className: 'bg-green-600 hover:bg-green-500 cursor-not-allowed'
      };
    case 'error':
      return {
        text: 'Error - Retry',
        className: 'bg-red-600 hover:bg-red-500'
      };
    case 'idle':
    default:
      return {
        text: 'Save Location',
        className: 'bg-blue-600 hover:bg-blue-500'
      };
  }
}

/**
 * Example: Backward compatibility wrapper for existing code
 */
export function saveLocationLegacy(
  locationName: string,
  locationType: 'galaxy' | 'system' | 'planet',
  stargateUrl: string
) {
  // Use synchronous version for old code that can't handle async
  LocationBookmarks.saveLocationSync({
    name: locationName,
    type: locationType,
    stargateUrl
  });
  
  console.warn('Using legacy saveLocationSync - consider upgrading to async version with confirmation dialog');
}