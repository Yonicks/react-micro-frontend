import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      remotes: {
        host: "http://localhost:3000/assets/remoteEntry.js",
      },
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/HelloWorld.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext', // <-- add this line!
  },
  server: { port: 3001 }
})
