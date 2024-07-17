import react from '@vitejs/plugin-react'
import { keycloakify } from 'keycloakify/vite-plugin'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      keycloakVersionTargets: {
        hasAccountTheme: true,
        '21-and-below': false,
        '23': false,
        '24': false,
        '25-and-above': 'keycloak-theme.jar',
      },
    }),
  ],
})
