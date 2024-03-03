import { UiConfig, type UiCommon } from './';
// import type { RouteLocationRaw } from 'vue-router/auto'; // TODO: Проблема при сборка

export namespace UiButton {
	export type Target = '_blank' | '_parent' | '_self' | '_top';

	export enum Variant {
		link,
		solid,
		outline,
		soft,
		ghost,
	}

	export type RouterLink = {
		to?: any; // FIXME: need RouteLocationRaw
		target?: Target;
		replace?: boolean;
		activeClass?: string;
		exactActiveClass?: string;
	};

	export type Theme = {
		base: string;
		theme: Record<(typeof UiConfig.Themes)[keyof typeof UiConfig.Themes], string>;
		color: Record<(typeof UiConfig.Colors)[keyof typeof UiConfig.Colors], string>;
		size: Record<(typeof UiConfig.Sizes)[keyof typeof UiConfig.Sizes], string>;
		rounded: string;
	};

	export type Classes = {
		classes: {
			base: string;
			icon: string;
			label: string;
			loading: string;
		};
	};

	export type Props = Partial<RouterLink & Classes> & {
		theme?: (typeof UiConfig.Themes)[keyof typeof UiConfig.Themes];
		color?: (typeof UiConfig.Colors)[keyof typeof UiConfig.Colors];
		size?: (typeof UiConfig.Sizes)[keyof typeof UiConfig.Sizes];
		variant?: keyof typeof Variant;
		as?: string;
		label?: string;
		icon?: string;
		trailing?: boolean;
		truncate?: boolean;
		rounded?: boolean;
		loading?: boolean;
		padded?: boolean;
		block?: boolean;
		disabled?: UiCommon.Disabled;
	};
}
