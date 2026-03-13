import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './router';
import './styles/index.css';

// Use the project JPG as the favicon by importing it so Vite resolves the hashed URL.
import launchLogo from '../images/launchglow.svg';

function setFaviconToCircularImage(srcUrl: string, size = 64) {
  try {
    const head = document.getElementsByTagName('head')[0];

    // Helper to create or update a link tag
    const upsertLink = (rel: string, href: string, attrs: Record<string, string> = {}) => {
      let link = head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        head.appendChild(link);
      }
      link.href = href;
      Object.entries(attrs).forEach(([k, v]) => link!.setAttribute(k, v));
    };

    // Attempt to draw a circular PNG using canvas for maximum browser compatibility
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('No canvas context');
        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, 0, 0, size, size);
        ctx.restore();

        const pngData = canvas.toDataURL('image/png');

        upsertLink('icon', pngData, { type: 'image/png', sizes: `${size}x${size}` });
        upsertLink('apple-touch-icon', pngData, { sizes: `${size}x${size}` });
      } catch (err) {
        // Fall back to SVG approach if canvas fails
        const svg = `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>\n  <defs>\n    <clipPath id='c'><circle cx='${size / 2}' cy='${size / 2}' r='${size / 2}'/></clipPath>\n  </defs>\n  <image href='${srcUrl}' width='${size}' height='${size}' clip-path='url(#c)' preserveAspectRatio='xMidYMid slice'/>\n</svg>`;
        const dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
        upsertLink('icon', dataUrl);
        upsertLink('apple-touch-icon', dataUrl);
      }
    };
    img.onerror = () => {
      // If image won't load into canvas (CORS or other), fall back to SVG data URL
      const svg = `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>\n  <defs>\n    <clipPath id='c'><circle cx='${size / 2}' cy='${size / 2}' r='${size / 2}'/></clipPath>\n  </defs>\n  <image href='${srcUrl}' width='${size}' height='${size}' clip-path='url(#c)' preserveAspectRatio='xMidYMid slice'/>\n</svg>`;
      const dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      upsertLink('icon', dataUrl);
      upsertLink('apple-touch-icon', dataUrl);
    };

    img.src = srcUrl;
  } catch (e) {
    // ignore in SSR or other environments
  }
}

// Build-time import provides correct hashed URL; use it to set a circular favicon.
setFaviconToCircularImage(launchLogo, 64);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </React.StrictMode>,
);
