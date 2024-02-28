export const useUI = () => {
	const themeObjectConstructor = <
		T extends Record<string, string | number>,
		E extends T[keyof T],
	>(
		obj: T,
		prepend: string | null = null,
		append: string | null = null
	) =>
		(Object.values(obj) as E[]).reduce(
			(res, item) => ({
				...res,
				[item]: `${prepend ?? ''}${item}${append ?? ''}`,
			}),
			{} as Record<E, string>
		);

	return {
		themeObjectConstructor,
	};
};
