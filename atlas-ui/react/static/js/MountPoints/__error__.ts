import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import ErrorLayout from '../Layouts/__error__.tsx';

// Get Atlas metadata from HTML meta tags
const versionMeta = document.querySelector('meta[name="atlas-version"]');
const versionHashMeta = document.querySelector('meta[name="atlas-version-hash"]');
const messageMeta = document.querySelector('meta[name="error-message"]');

const atlasConfig = {
  version: versionMeta && versionMeta.getAttribute('content') || '1.0.0',
  versionHash: versionHashMeta && versionHashMeta.getAttribute('content') || '',
  message: messageMeta && messageMeta.getAttribute('content') || 'An unexpected error occurred'
};

// Mount React component
const container = document.getElementById('atlas-react-root');
if (container) {
  createRoot(container).render(createElement(ErrorLayout, atlasConfig));
} else {
  console.error('Container atlas-react-root not found!');
}