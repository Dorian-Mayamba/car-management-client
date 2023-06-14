import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:process.env.SERVER_URL,
        changeOrigin:true
      },
    },
  },
})
