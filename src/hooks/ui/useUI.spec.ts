import { useUI } from './useUI';

const { themeObjectConstructor } = useUI();

enum ColorEnumMock {
	danger,
	alert,
	done,
	info,
}

describe('hooks/ui/useUI', () => {
	describe('themeObjectConstructor with prefix and suffix', () => {
		it('themeObjectConstructor', () => {
			const result = themeObjectConstructor(ColorEnumMock, 'color-', '-theme');
			expect(result).toEqual({
				danger: 'color-danger-theme',
				alert: 'color-alert-theme',
				done: 'color-done-theme',
				info: 'color-info-theme',
			});
		});

		it('themeObjectConstructor with prefix only', () => {
			const result = themeObjectConstructor(ColorEnumMock, 'color-');
			expect(result).toEqual({
				danger: 'color-danger',
				alert: 'color-alert',
				done: 'color-done',
				info: 'color-info',
			});
		});

		it('themeObjectConstructor with suffix only', () => {
			const result = themeObjectConstructor(ColorEnumMock, null, '-theme');
			expect(result).toEqual({
				danger: 'danger-theme',
				alert: 'alert-theme',
				done: 'done-theme',
				info: 'info-theme',
			});
		});

		it('themeObjectConstructor without prefix and suffix', () => {
			const result = themeObjectConstructor(ColorEnumMock);
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});

		it('themeObjectConstructor with empty prefix and suffix values', () => {
			const result = themeObjectConstructor(ColorEnumMock, '', '');
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});

		test('themeObjectConstructor with null prefix and suffix values', () => {
			const result = themeObjectConstructor(ColorEnumMock, null, null);
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});
	});
});
