import { Common } from '~/models/common';
import type { RouteLocationRaw } from 'vue-router/auto';

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
		to?: RouteLocationRaw;
		target?: Target;
		replace?: boolean;
		activeClass?: string;
		exactActiveClass?: string;
	};

	export type Theme = {
		base: string;
		theme: Record<keyof typeof Common.Themes, string>;
		color: Record<keyof typeof Common.Color, string>;
		size: Record<keyof typeof Common.Size, string>;
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

	export type Props = Partial<Common.Disabled & RouterLink & Classes> & {
		theme?: keyof typeof Common.Themes;
		color?: keyof typeof Common.Color;
		size?: keyof typeof Common.Size;
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
	};
}
