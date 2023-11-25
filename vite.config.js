import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => ({
  plugins: [vue()],
  // base: command === 'build' ? '/vue3-twitter-clone/' : '/'
}));
