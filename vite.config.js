import {
  fileURLToPath,
  URL
} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      // '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    ElementPlus({
      // useSource: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src',
  //       import.meta.url))
  //   }
  // }
})