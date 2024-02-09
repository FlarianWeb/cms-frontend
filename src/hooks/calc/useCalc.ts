export const useCalc = () => {
	const plus = (a?: number, b?: number) => {
		if (!a) {
			throw new Error('Parameter «A» is undefined!');
		}

		if (!b) {
			throw new Error('Parameter «B» is undefined!');
		}

		return a + b;
	};

	const minus = (a?: number, b?: number) => {
		if (!a) {
			throw new Error('Parameter «A» is undefined!');
		}

		if (!b) {
			throw new Error('Parameter «B» is undefined!');
		}

		if (!Number.isFinite(a)) {
			throw new Error('Parameter «A» is not number!');
		}

		if (!Number.isFinite(b)) {
			throw new Error('Parameter «B» is not number!');
		}

		return a - b;
	};

	return {
		plus,
		minus,
	};
};
