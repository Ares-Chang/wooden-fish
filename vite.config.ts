import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    /** @see https://github.com/antfu/unplugin-auto-import */
    AutoImport({
      imports: ['solid-js'],
      dts: true,
      dirs: ['./src/components'],
    }),
    /**
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss()
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
