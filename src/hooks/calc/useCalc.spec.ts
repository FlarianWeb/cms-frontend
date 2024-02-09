import { describe, it, test, expect } from 'vitest';
import { useCalc } from './useCalc';

const { plus, minus } = useCalc();

describe('useCalc', () => {
	describe('plus', () => {
		test('plus() to throw error', () => {
			expect(() => plus()).toThrowError(/^Parameter «A» is undefined!$/);
		});

		test('plus(1) to throw error', () => {
			expect(() => plus(1)).toThrowError(/^Parameter «B» is undefined!$/);
		});

		test('plus(1, 2) to equal 3', () => {
			expect(plus(1, 2)).toEqual(3);
		});
	});

	describe('minus', () => {
		test('minus() to throw error', () => {
			expect(() => minus()).toThrowError(/^Parameter «A» is undefined!$/);
		});

		test('minus(1) to throw error', () => {
			expect(() => minus(1)).toThrowError(/^Parameter «B» is undefined!$/);
		});

		test('minus(3, 1) to equal 2', () => {
			expect(minus(3, 1)).toEqual(2);
		});
	});
});
