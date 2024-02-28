import { UiConfig } from './';

export namespace UiTheme {
	export type BasicConfig = {
		color?: Record<(typeof UiConfig.Colors)[keyof typeof UiConfig.Colors], string>;
		variables?: Record<string, string>;
	};

	export type ThemeConfig = Record<
		(typeof UiConfig.Themes)[keyof typeof UiConfig.Themes],
		Record<
			(typeof UiConfig.Modes)[keyof typeof UiConfig.Modes],
			Record<
				(typeof UiConfig.ColorTypes)[keyof typeof UiConfig.ColorTypes],
				Record<(typeof UiConfig.ColorTones)[keyof typeof UiConfig.ColorTones], string>
			>
		>
	>;

	export type GlobalVars = {
		globalThemes: (typeof UiConfig.Themes)[keyof typeof UiConfig.Themes][];
		globalModes: (typeof UiConfig.Modes)[keyof typeof UiConfig.Modes][];
		globalColorTypes: (typeof UiConfig.ColorTypes)[keyof typeof UiConfig.ColorTypes][];
		globalColorTones: (typeof UiConfig.ColorTones)[keyof typeof UiConfig.ColorTones][];
		globalColors: (typeof UiConfig.Colors)[keyof typeof UiConfig.Colors][];
		globalSizes: (typeof UiConfig.Sizes)[keyof typeof UiConfig.Sizes][];
	} & Record<string, string>;
}
