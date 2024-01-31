import { type App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

export const install = (app: App) => {
	const router = createRouter({
		history: createWebHistory(),
		extendRoutes: routes => setupLayouts(routes),
	});

	app.use(router);
};
