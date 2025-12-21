import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use root base by default so the app works when deployed to a custom domain.
  // Keep flexibility to override via `--base` or environment if needed.
  return {
    base: '/',
    plugins: [react()],
  };
});
