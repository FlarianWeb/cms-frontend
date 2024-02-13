/**
 * Возвращает массив ключей enum с соответствующим типом.
 *
 * @template T - Тип enum.
 * @param {T} obj - Объект enum.
 */
export const enumKeys = <T extends Record<string, unknown>>(obj: T) =>
	Object.keys(obj).filter(v => isNaN(Number(v))) as Array<keyof typeof obj>;

/**
 * Возвращает массив значений enum с соответствующим типом.
 *
 * @template T - Тип enum.
 * @param {T} obj - Объект enum.
 */
export const enumValues = <T extends Record<string, unknown>>(obj: T) => {
	return Object.values(obj).filter(v => isNaN(Number(v))) as Array<T[keyof T]>;
};
