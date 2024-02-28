import { useUI } from './useUI';

const { themeObjectConstructor } = useUI();

const ColorMock = {
	DANGER: 'danger',
	ALERT: 'alert',
	INFO: 'info',
	DONE: 'done',
} as const;

describe('hooks/ui/useUI', () => {
	describe('themeObjectConstructor with prefix and suffix', () => {
		it('themeObjectConstructor', () => {
			const result = themeObjectConstructor(ColorMock, 'color-', '-theme');
			expect(result).toEqual({
				danger: 'color-danger-theme',
				alert: 'color-alert-theme',
				done: 'color-done-theme',
				info: 'color-info-theme',
			});
		});

		it('themeObjectConstructor with prefix only', () => {
			const result = themeObjectConstructor(ColorMock, 'color-');
			expect(result).toEqual({
				danger: 'color-danger',
				alert: 'color-alert',
				done: 'color-done',
				info: 'color-info',
			});
		});

		it('themeObjectConstructor with suffix only', () => {
			const result = themeObjectConstructor(ColorMock, null, '-theme');
			expect(result).toEqual({
				danger: 'danger-theme',
				alert: 'alert-theme',
				done: 'done-theme',
				info: 'info-theme',
			});
		});

		it('themeObjectConstructor without prefix and suffix', () => {
			const result = themeObjectConstructor(ColorMock);
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});

		it('themeObjectConstructor with empty prefix and suffix values', () => {
			const result = themeObjectConstructor(ColorMock, '', '');
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});

		test('themeObjectConstructor with null prefix and suffix values', () => {
			const result = themeObjectConstructor(ColorMock, null, null);
			expect(result).toEqual({
				danger: 'danger',
				alert: 'alert',
				done: 'done',
				info: 'info',
			});
		});
	});
});
