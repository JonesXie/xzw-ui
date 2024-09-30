import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./packages/play/vite.config.ts",
  "./packages/hooks/vite.config.ts",
  "./packages/components/vitest.config.ts",
  "./libs/vite-plugins/vite.config.ts"
])
