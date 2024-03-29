import {
    defineConfig,
    loadEnv
  } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import Components from 'unplugin-vue-components/vite'
  import AutoImport from 'unplugin-auto-import/vite'
  import {
    ElementPlusResolver
  } from 'unplugin-vue-components/resolvers'
  // https://vitejs.dev/config/
  export default defineConfig({
    base: '/aProject/',
    rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        }
      },
    plugins: [vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  })