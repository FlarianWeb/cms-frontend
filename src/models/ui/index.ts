import type { UiTheme } from './theme';
import type { UiToggle } from './toggle';

export namespace UiConfig {
	export const Themes = {
		PRIMARY: 'primary',
		SECONDARY: 'secondary',
	} as const;

	export const Modes = {
		DARK: 'dark',
		LIGHT: 'light',
	} as const;

	export const ColorTypes = {
		BG: 'bg',
		TEXT: 'text',
		BASE: 'base',
	} as const;

	export const ColorTones = {
		MAIN: 'main',
		SOFT: 'soft',
		HARD: 'hard',
	} as const;

	export const Colors = {
		DANGER: 'danger',
		ALERT: 'alert',
		INFO: 'info',
		DONE: 'done',
	} as const;

	export const Sizes = {
		XS: 'xs',
		SM: 'sm',
		MD: 'md',
		LG: 'lg',
		XL: 'xl',
	} as const;
}

export namespace UiCommon {
	export type Disabled = boolean;

	export type Reverse = boolean;

	export type Icon = string;

	export type Label = string;
}

export type { UiTheme, UiToggle };
