import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		lib: {
			entry: 'src/lib/index.ts',
			name: 'SvelteSVGSpinners',
			fileName: (format) => `svelte-svg-spinners.${format}.js`,
		}
	}
})
