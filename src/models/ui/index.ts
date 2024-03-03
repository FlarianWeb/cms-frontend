import type { UiTheme } from './theme';
import { UiToggle } from './toggle';

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
	export type Label = string;

	export type Icon = string;

	export type Disabled = boolean;

	export type Reverse = boolean;

	export type Rounded = boolean;

	export type Skeleton = boolean;
}

export { type UiTheme, UiToggle };
