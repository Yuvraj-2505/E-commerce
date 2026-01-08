import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
      },
      backgroundcolor: {
        primary: '#ff5252',
      },
    },
  },
})