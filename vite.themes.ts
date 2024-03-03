import { UiConfig, type UiTheme } from './src/models/ui';
import { basic, themes } from './themes.config';

const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const hexToRgb = (hex: string) => {
	const hexColor = hex
		.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			(M: string, R: string, G: string, B: string) => `${R}${R}${G}${G}${B}${B}`
		)
		.substring(1);

	if (!hexColor.match(/.{2}.{2}.{2}/g)) {
		return '0, 0, 0';
	} else {
		const hexSplit = hexColor.match(/.{2}/g) as [string, string, string];
		const hexSplitToRGB = hexSplit.map(x => parseInt(x, 16));
		return hexSplitToRGB.join(',');
	}
};

const buildGlobalVars = (): UiTheme.GlobalVars => {
	const globalThemes = Object.values(UiConfig.Themes);
	const globalModes = Object.values(UiConfig.Modes);
	const globalColorTypes = Object.values(UiConfig.ColorTypes);
	const globalColorTones = Object.values(UiConfig.ColorTones);
	const globalColors = Object.values(UiConfig.Colors);
	const globalSizes = Object.values(UiConfig.Sizes);

	const globalVariablesList: Record<string, string> = {};

	/** Insert basic colors */
	if (basic.color) {
		for (const color of <[(typeof UiConfig.Colors)[keyof typeof UiConfig.Colors]]>(
			Object.keys(basic.color)
		)) {
			globalVariablesList[`color-${color}`] = hexToRgb(basic.color[color]);
		}
	}

	/** Insert basic variables */
	if (basic.variables) {
		for (const variable of Object.keys(basic.variables)) {
			globalVariablesList[variable] = basic.variables[variable];
		}
	}

	/** Insert themes variables */
	for (const theme of globalThemes) {
		for (const mode of globalModes) {
			for (const colorType of globalColorTypes) {
				for (const colorTone of globalColorTones) {
					globalVariablesList[`${theme}-${mode}-${colorType}-${colorTone}`] = hexToRgb(
						themes[theme][mode][colorType][colorTone]
					);
				}
			}
		}
	}

	/** Create base theme variables */
	for (const colorType of globalColorTypes) {
		for (const colorTone of globalColorTones) {
			globalVariablesList[
				colorTone === UiConfig.ColorTones.MAIN
					? `color${capitalizeFirstLetter(colorType)}`
					: `color${capitalizeFirstLetter(colorType)}${capitalizeFirstLetter(colorTone)}`
			] = `var(--color-${colorType}-${colorTone})`;
		}
	}

	return <UiTheme.GlobalVars>{
		globalThemes,
		globalModes,
		globalColorTypes,
		globalColorTones,
		globalColors,
		globalSizes,
		...globalVariablesList,
	};
};

export const globalVars = buildGlobalVars();
