import { useTheme } from './useTheme';

describe('useTheme', () => {
	describe('colorTheme', () => {
		it('Initial color theme', () => {
			const { colorTheme } = useTheme();
			expect(colorTheme.value).toEqual('primary');
		});

		it('Insert secondary color theme', () => {
			const { colorTheme } = useTheme();
			colorTheme.value = 'secondary';
			expect(colorTheme.value).toEqual('secondary');
		});
	});

	describe('colorMode', () => {
		it('Initial color mode', () => {
			const { darkMode } = useTheme();
			expect(darkMode.value).toBeFalsy();
		});

		it('Insert dark theme', () => {
			const { darkMode } = useTheme();
			darkMode.value = true;
			expect(darkMode.value).toBeTruthy();
		});
	});
});
