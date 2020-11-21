import * as path from 'path'
import { UserConfig } from 'vite'

export default {
  alias: { '/@/': path.resolve(__dirname, './src') },
  optimizeDeps: {
    include: [
      /* apollo stuff */
    ],
  },
  rollupInputOptions: { external: ['react'] },
} as UserConfig
