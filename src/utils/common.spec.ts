import { enumKeys, enumValues } from './common';

enum TestEnumMock {
	foo,
	bar,
}

enum TestNamedEnumMock {
	FOO = 'foo',
	BAR = 'bar',
}

describe('utils/common', () => {
	describe('enumKeys', () => {
		it('Enum', () => {
			expect(enumKeys(TestEnumMock)).toEqual(['foo', 'bar']);
		});

		it('Named enum', () => {
			expect(enumKeys(TestNamedEnumMock)).toEqual(['FOO', 'BAR']);
		});
	});

	describe('enumValues', () => {
		it('Enum', () => {
			expect(enumValues(TestEnumMock)).toEqual(['foo', 'bar']);
		});

		it('Named enum', () => {
			expect(enumValues(TestNamedEnumMock)).toEqual(['foo', 'bar']);
		});
	});
});
