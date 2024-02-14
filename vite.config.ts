import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import AutoComponents from 'unplugin-vue-components/vite';
import Pages from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts';
import { VueRouterAutoImports } from 'unplugin-vue-router';

import { globalVars } from './vite.themes';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Pages({
			routesFolder: 'src/pages',
			extensions: ['.vue'],
			dts: './src/models/auto-router.d.ts',
		}),

		vue(),

		Layouts({
			layoutsDirs: 'src/layouts',
			defaultLayout: 'main',
		}),

		AutoImport({
			imports: [
				'vue',
				VueRouterAutoImports,
				{ 'vue-router/auto': ['useLink'] },
				{ '@vuelidate/core': ['useVuelidate'] },
				{ '@vueuse/core': ['useAsyncState'] },
			],
			// defaultExportByFilename: true,
			dirs: ['./src/hooks/**'],
			// vueTemplate: true,
			dts: './src/models/auto-imports.d.ts',
		}),

		AutoComponents({
			dirs: ['./src/components'],
			extensions: ['vue'],
			deep: true,
			dts: './src/models/auto-components.d.ts',
			directoryAsNamespace: true,
			collapseSamePrefixes: true,
		}),
	],

	css: {
		preprocessorOptions: {
			less: {
				globalVars,
			},
		},
	},

	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
			'@': fileURLToPath(new URL('./src/assets', import.meta.url)),
		},
	},

	build: {
		cssMinify: 'lightningcss',
	},
});
