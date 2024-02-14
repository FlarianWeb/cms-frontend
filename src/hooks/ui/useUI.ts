import { enumKeys } from '~/utils/common';

export const useUI = () => {
	const themeObjectConstructor = <T extends Record<string, unknown>, E extends keyof T>(
		obj: T,
		prepend: string | null = null,
		append: string | null = null
	) =>
		(enumKeys(obj) as E[]).reduce(
			(res, item) => ({
				...res,
				[item]: `${prepend ?? ''}${String(item)}${append ?? ''}`,
			}),
			{} as Record<E, string>
		);

	return {
		themeObjectConstructor,
	};
};
