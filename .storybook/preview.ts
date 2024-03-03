/* Import fonts */
import '@/fonts/inter/style.css';

/* Import icons */
import '@/icons/flarian/style.css';

/* Import styles */
import '@/less/storybook.less';

import type { Preview } from '@storybook/vue3';
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher';

import { UiConfig } from '../src/models/ui';
import { themes } from '../themes.config.ts';

const themesList = Object.values(UiConfig.Themes).reduce(
	(acc, theme) => {
		acc.push({
			name: `${theme.charAt(0).toUpperCase()}${theme.slice(1)}`,
			dataTheme: theme,
			color: themes[theme].color,
		});
		return acc;
	},
	[] as {
		name: string;
		dataTheme: string;
		color?: string;
		default?: boolean;
	}[]
);

export const globalTypes = {
	dataThemes: {
		defaultValue: {
			list: themesList,
			dataAttribute: 'theme',
			clearable: true,
		} satisfies ThemeConfig,
	},
};

const preview: Preview = {
	parameters: {
		backgrounds: {
			disable: true,
		},
		theme: {
			selector: 'html',
			dataAttr: 'mode',
			nameLightTheme: 'light',
			nameDarkTheme: 'dark',
		},
	},
};

export default preview;
