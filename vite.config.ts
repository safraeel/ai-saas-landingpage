import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use root base for custom domains like launchglow.tech
  return {
    base: '/', 
    plugins: [react()],
  };
});
