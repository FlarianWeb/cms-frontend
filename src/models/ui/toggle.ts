import { Common } from '~/models/common';

export namespace UiToggle {
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
			switcher: string;
			slider: string;
		};
	};

	export type Props = Partial<Common.Disabled & Common.Reverse & Classes> & {
		theme?: keyof typeof Common.Themes;
		color?: keyof typeof Common.Color;
		size?: keyof typeof Common.Size;
		label?: string;
		iconOn?: string;
		iconOff?: string;
		square?: boolean;
	};
}
