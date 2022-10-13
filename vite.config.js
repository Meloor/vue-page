import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 官方配置说明： https://cn.vitejs.dev/config/
//配置选项说明: https://cn.vitejs.dev/config/shared-options.html#publicdir
export default defineConfig({
  // publicDir: './public',
  // base:'./',
  base:'/vue-page/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
