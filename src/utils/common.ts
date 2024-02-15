/**
 * Returns an array of enum keys with the corresponding type.
 *
 * @template T - The enum type.
 * @param {T} obj - The enum object.
 */
export const enumKeys = <T extends Record<string, unknown>>(obj: T): Array<keyof typeof obj> =>
	Object.keys(obj).filter(v => isNaN(Number(v)));

/**
 * Returns an array of enum values with the corresponding type.
 *
 * @template T - The enum type.
 * @param {T} obj - The enum object.
 */
export const enumValues = <T extends Record<string, unknown>>(obj: T): Array<unknown> =>
	Object.values(obj).filter(v => isNaN(Number(v)));
