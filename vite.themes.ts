import { Common, type ThemeGlobalVars } from './src/models/common';
import { enumKeys } from './src/utils/common';
import { basic, themes } from './themes.config';

const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const buildGlobalVars = (): ThemeGlobalVars => {
	const globalThemes = enumKeys(Common.Themes);
	const globalModes = enumKeys(Common.Modes);
	const globalColorTypes = enumKeys(Common.ColorTypes);
	const globalColorTones = enumKeys(Common.ColorTones);
	const globalSizes = enumKeys(Common.Size);

	const globalVariablesList: Record<string, string> = {};

	/** Insert basic colors */
	if (basic.color) {
		for (const color of <[keyof typeof Common.Color]>Object.keys(basic.color)) {
			globalVariablesList[`color-${capitalizeFirstLetter(color)}`] = basic.color[color];
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
					globalVariablesList[`${theme}-${mode}-${colorType}-${colorTone}`] =
						themes[theme][mode][colorType][colorTone];
				}
			}
		}
	}

	/** Create base theme variables */
	for (const colorType of globalColorTypes) {
		for (const colorTone of globalColorTones) {
			globalVariablesList[
				colorTone === Common.ColorTones[0]
					? `color${capitalizeFirstLetter(colorType)}`
					: `color${capitalizeFirstLetter(colorType)}${capitalizeFirstLetter(colorTone)}`
			] = `var(--color-${colorType}-${colorTone})`;
		}
	}

	return <ThemeGlobalVars>{
		globalThemes,
		globalModes,
		globalColorTypes,
		globalColorTones,
		globalSizes,
		...globalVariablesList,
	};
};

export const globalVars = buildGlobalVars();
