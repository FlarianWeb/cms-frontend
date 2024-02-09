import App from '~/App.vue';

/* Import fonts */
import '@/fonts/inter/style.css';

/* Import icons */
import '@/icons/flarian/style.css';

/* Import styles */
import '@/less/main.less';

const setup = async () => {
	const app = createApp(App);

	// AUTO LOAD MODULES
	Object.values(import.meta.glob('~/modules/*.ts', { eager: true })).forEach(
		(module: any) => module?.install?.(app)
	);

	app.mount('#app');
};

setup();
