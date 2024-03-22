import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    open: false,
    port: 3000,
    proxy: {
      '/translate': {
        target: 'https://openapi.youdao.com/api', // 远程服务
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/translate/, ''),
      },

    },
  },
})
