/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/joinwrite-enduser',
  server: {
    port: 4200,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: path.resolve(__dirname, './src/assets/'),
    },
  },
  assetsInclude: ['**/*.ttf'],
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [svgr(), react()],
  build: {
    outDir: '../../dist/apps/joinwrite-enduser',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/joinwrite-enduser',
      provider: 'v8',
    },
  },
});
