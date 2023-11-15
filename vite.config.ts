import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/rest-api-country-viewer/",
  plugins: [react()],
})
