import type { Meta, StoryObj } from '@storybook/vue3';
import { UiConfig, UiToggle } from '~/models/ui';
import Toggle from './toggle.vue';

const meta = {
	title: 'Ui/Toggle',
	component: Toggle,
	tags: ['autodocs'],
	argTypes: {
		theme: {
			type: 'string',
			description: 'Тема переключателя',
			defaultValue: UiToggle.DefaultsProps.theme,
			control: 'select',
			options: Object.values(UiConfig.Themes),
		},
		color: {
			type: 'string',
			description: 'Системный цвет переключателя',
			defaultValue: UiToggle.DefaultsProps.color,
			control: 'select',
			options: Object.values(UiConfig.Colors),
		},
		size: {
			type: 'string',
			description: 'Размер переключателя',
			defaultValue: UiToggle.DefaultsProps.size,
			control: 'select',
			options: Object.values(UiConfig.Sizes),
		},
		label: {
			type: 'string',
			description: 'Текст переключателя',
			defaultValue: UiToggle.DefaultsProps.label,
			control: 'text',
		},
		iconOn: {
			type: 'string',
			description: 'Иконка UiIcon в активном состоянии переключателя',
			defaultValue: UiToggle.DefaultsProps.iconOn,
			control: 'text',
		},
		iconOff: {
			type: 'string',
			description: 'Иконка UiIcon в неактивном состоянии переключателя',
			defaultValue: UiToggle.DefaultsProps.iconOff,
			control: 'text',
		},
		rounded: {
			type: 'boolean',
			description: 'Скругленный переключатель',
			defaultValue: UiToggle.DefaultsProps.rounded,
			control: 'boolean',
		},
		reverse: {
			type: 'boolean',
			description: 'Реверсивное поведение переключателя',
			defaultValue: UiToggle.DefaultsProps.reverse,
			control: 'boolean',
		},
		disabled: {
			type: 'boolean',
			description: 'Disabled состояние',
			defaultValue: UiToggle.DefaultsProps.disabled,
			control: 'boolean',
		},
		skeleton: {
			type: 'boolean',
			description: 'Режим скелетона',
			defaultValue: UiToggle.DefaultsProps.skeleton,
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: undefined,
};

export const Theme: Story = {
	args: { theme: UiConfig.Themes.PRIMARY },
};
