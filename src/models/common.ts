export namespace Common {
	export enum Themes {
		primary,
		secondary,
	}

	export enum Modes {
		light,
		dark,
	}

	export enum ColorTypes {
		bg,
		text,
		base,
	}

	export enum ColorTones {
		main,
		soft,
		hard,
	}

	export enum Color {
		danger,
		alert,
		done,
		info,
	}

	export enum Size {
		xs,
		sm,
		md,
		lg,
		xl,
	}

	export type Disabled = {
		disabled: boolean;
	};

	export type Reverse = {
		reverse: boolean;
	};
}

export type ThemeBasicConfig = {
	color?: Record<keyof typeof Common.Color, string>;
	variables?: Record<string, string>;
};

export type ThemeConfig = Record<
	keyof typeof Common.Themes,
	Record<
		keyof typeof Common.Modes,
		Record<keyof typeof Common.ColorTypes, Record<keyof typeof Common.ColorTones, string>>
	>
>;

export type ThemeGlobalVars = {
	globalThemes: [keyof typeof Common.Themes];
	globalModes: [keyof typeof Common.Modes];
	globalColorTypes: [keyof typeof Common.ColorTypes];
	globalColorTones: [keyof typeof Common.ColorTones];
	globalColor: [keyof typeof Common.Color];
	globalSizes: [keyof typeof Common.Size];
} & Record<string, string>;
