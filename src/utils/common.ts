/**
 * Возвращает массив ключей enum с соответствующим типом.
 *
 * @template T - Тип enum.
 * @param {T} obj - Объект enum.
 */
export const enumKeys = <T extends Record<string, unknown>>(obj: T): Array<keyof typeof obj> =>
	Object.keys(obj).filter(v => isNaN(Number(v)));

/**
 * Возвращает массив значений enum с соответствующим типом.
 *
 * @template T - Тип enum.
 * @param {T} obj - Объект enum.
 */
export const enumValues = <T extends Record<string, unknown>>(obj: T): Array<unknown> =>
	Object.values(obj).filter(v => isNaN(Number(v)));
