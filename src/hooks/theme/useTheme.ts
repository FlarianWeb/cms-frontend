import { useDark, useColorMode } from '@vueuse/core';
import { Common } from '~/models/common';
import { enumKeys } from '~/utils/common';

export const useTheme = () => {
	const themes = enumKeys(Common.Themes);
	const themeModes = themes.reduce((a, v) => ({ ...a, [v]: v }), {});
	const themeDefault = ref<keyof typeof Common.Themes>(themes[0]);

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
