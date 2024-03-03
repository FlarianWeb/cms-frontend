import type { UiTheme } from './src/models/ui';

export const basic: UiTheme.BasicConfig = {
	color: {
		danger: '#e74c3c',
		alert: '#f39c12',
		done: '#27ae60',
		info: '#2980b9',
	},
	variables: {
		/* Text */
		lineHeight: '1.5em',
		fontSize: '16px',
		fontWeight: '400',
		fontFamily: 'Inter, sans-serif',

		/* Transition */
		duration: '200ms',
		easing: 'sine',

		/* Rounded */
		rounded: '999rem',
	},
};

export const themes: UiTheme.ThemeConfig = {
	primary: {
		color: '#7162ff',
		light: {
			bg: {
				main: '#f3f4f6',
				soft: '#d1d5db',
				hard: '#ffffff',
			},
			text: {
				main: '#374151',
				soft: '#6b7280',
				hard: '#111827',
			},
			base: {
				main: '#7162ff',
				soft: '#7f75ff',
				hard: '#5c4fe8',
			},
		},
		dark: {
			bg: {
				main: '#111827',
				soft: '#374151',
				hard: '#030712',
			},
			text: {
				main: '#d1d5db',
				soft: '#6b7280',
				hard: '#f3f4f6',
			},
			base: {
				main: '#7162ff',
				soft: '#7f75ff',
				hard: '#5c4fe8',
			},
		},
	},

	secondary: {
		color: '#f31260',
		light: {
			bg: {
				main: '#f3f4f6',
				soft: '#d1d5db',
				hard: '#ffffff',
			},
			text: {
				main: '#374151',
				soft: '#6b7280',
				hard: '#111827',
			},
			base: {
				main: '#f31260',
				soft: '#f54180',
				hard: '#c20e4d',
			},
		},
		dark: {
			bg: {
				main: '#111827',
				soft: '#374151',
				hard: '#030712',
			},
			text: {
				main: '#d1d5db',
				soft: '#6b7280',
				hard: '#f3f4f6',
			},
			base: {
				main: '#f31260',
				soft: '#f54180',
				hard: '#c20e4d',
			},
		},
	},
};
