import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: "react-micro-frontend",
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote: 'http://localhost:3001/assets/remoteEntry.js',
      },
      exposes: {
        "./SharedButton": "./src/SharedButton.tsx",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext', // <-- add this line!
  },
  server: { port: 3000 }
})
