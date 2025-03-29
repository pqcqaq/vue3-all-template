import createPlugins from './presets'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [createPlugins()],
})
