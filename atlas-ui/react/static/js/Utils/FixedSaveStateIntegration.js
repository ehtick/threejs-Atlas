// Integration fix for the current frontend save state timing issue
// Replace existing save button handlers with this corrected version

/**
 * FIXED: Proper save button handler that shows states at the right time
 * Use this instead of the current handler that shows "saving" before dialog
 */
async function handleSaveButtonClick(event, locationData) {
  const button = event.target;
  const originalText = button.textContent;
  const originalClass = button.className;
  
  try {
    // Step 1: Button stays normal during dialog decision
    // Don't show "saving" yet - user hasn't decided!
    
    const saved = await LocationBookmarks.saveLocation({
      name: locationData.name,
      type: locationData.type,
      stargateUrl: locationData.url
    });
    
    if (saved) {
      // Step 2: NOW show saving state (user confirmed)
      button.textContent = 'Saving...';
      button.className = button.className.replace('save-btn', 'save-btn saving');
      button.disabled = true;
      
      // Brief delay for visual feedback
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Step 3: Show saved state
      button.textContent = 'Saved!';
      button.className = button.className.replace('saving', 'saved');
      
      // Step 4: Reset button after success
      setTimeout(() => {
        button.textContent = originalText;
        button.className = originalClass;
        button.disabled = false;
      }, 2000);
      
    } else {
      // User cancelled - button stays in original state
      console.log('User cancelled save operation');
    }
    
  } catch (error) {
    console.error('Save error:', error);
    
    // Reset button on error
    button.textContent = 'Error - Retry';
    button.className = originalClass + ' error';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.className = originalClass;
      button.disabled = false;
    }, 3000);
  }
}

/**
 * Quick fix for existing code - just change the event handler
 */
function fixExistingSaveButtons() {
  // Find all save buttons in the current page
  const saveButtons = document.querySelectorAll('.save-location-btn, [data-action="save-location"]');
  
  saveButtons.forEach(button => {
    // Remove existing event listeners (if any)
    button.removeEventListener('click', button._oldHandler);
    
    // Add corrected handler
    const newHandler = async (event) => {
      const locationData = {
        name: button.dataset.locationName || 'Unknown Location',
        type: button.dataset.locationType || 'planet',
        url: button.dataset.stargateUrl || window.location.href
      };
      
      await handleSaveButtonClick(event, locationData);
    };
    
    button.addEventListener('click', newHandler);
    button._oldHandler = newHandler; // Store reference for future removal
  });
}

/**
 * CSS classes for different button states
 */
const saveButtonStyles = `
  .save-btn.saving {
    background-color: #d97706 !important; /* Yellow-600 */
    cursor: not-allowed !important;
  }
  
  .save-btn.saved {
    background-color: #059669 !important; /* Green-600 */
    cursor: not-allowed !important;
  }
  
  .save-btn.error {
    background-color: #dc2626 !important; /* Red-600 */
  }
`;

// Inject styles
if (!document.getElementById('save-button-styles')) {
  const style = document.createElement('style');
  style.id = 'save-button-styles';
  style.textContent = saveButtonStyles;
  document.head.appendChild(style);
}

// Auto-fix existing buttons when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixExistingSaveButtons);
} else {
  fixExistingSaveButtons();
}

// Export for manual usage
window.fixSaveButtonStates = {
  handleSaveButtonClick,
  fixExistingSaveButtons
};