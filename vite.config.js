import { defineConfig } from 'vite';
import plugInReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    plugInReact({
      jsxRuntime: 'automatic',
    }),
  ],
});
