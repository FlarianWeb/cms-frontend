import { useDark, useColorMode } from '@vueuse/core';
import { UiConfig } from '~/models/ui';

export const useTheme = () => {
	const themes = Object.values(UiConfig.Themes);
	const themeModes = themes.reduce((a, v) => ({ ...a, [v]: v }), {});
	const themeDefault = ref<(typeof UiConfig.Themes)[keyof typeof UiConfig.Themes]>(themes[0]);

	const colorTheme = useColorMode({
		selector: 'html',
		attribute: 'theme',
		initialValue: themeDefault,
		modes: themeModes,
		storageKey: 'flarian-cms-theme',
	});

	const darkMode = useDark({
		selector: 'html',
		attribute: 'mode',
		valueDark: 'dark',
		valueLight: 'light',
		storageKey: 'flarian-cms-mode',
	});

	return { colorTheme, darkMode };
};
