import { UiConfig, type UiCommon } from './';

export namespace UiToggle {
	export type Theme = {
		base: string;
		theme: Record<(typeof UiConfig.Themes)[keyof typeof UiConfig.Themes], string>;
		color: Record<(typeof UiConfig.Colors)[keyof typeof UiConfig.Colors], string>;
		size: Record<(typeof UiConfig.Sizes)[keyof typeof UiConfig.Sizes], string>;
		rounded: string;
	};

	export type Classes = {
		base: string;
		switcher: string;
		slider: string;
	};

	export type Props = {
		theme?: (typeof UiConfig.Themes)[keyof typeof UiConfig.Themes];
		color?: (typeof UiConfig.Colors)[keyof typeof UiConfig.Colors];
		size?: (typeof UiConfig.Sizes)[keyof typeof UiConfig.Sizes];
		label?: UiCommon.Label;
		iconOn?: UiCommon.Icon;
		iconOff?: UiCommon.Icon;
		disabled?: UiCommon.Disabled;
		reverse?: UiCommon.Reverse;
		square?: boolean;
		classes?: Classes;
	};
}
