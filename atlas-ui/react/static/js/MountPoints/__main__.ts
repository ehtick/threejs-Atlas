import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import MainLayout from '../Layouts/__main__.tsx';

interface AtlasData {
  error: string | null;
  version: string;
}

// Get Flask template variables from meta tags
const errorMeta = document.querySelector('meta[name="atlas-error"]');
const versionMeta = document.querySelector('meta[name="atlas-version"]');

const atlasData: AtlasData = {
  error: errorMeta ? errorMeta.getAttribute('content') : null,
  version: versionMeta ? versionMeta.getAttribute('content') || '1.0.0' : '1.0.0'
};

const container = document.getElementById('atlas-react-root');

if (container) {
  const root = createRoot(container);
  root.render(createElement(MainLayout, atlasData));
} else {
  console.error('Container atlas-react-root not found!');
}