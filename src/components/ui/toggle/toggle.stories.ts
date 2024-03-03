import type { Meta, StoryObj } from '@storybook/vue3';

import { UiConfig } from '~/models/ui';
import UiToggle from './toggle.vue';

// const Template = (args: UiToggle.Props) => ({
// 	components: { Toggle },
// 	tags: ['autodocs'],
// 	setup() {
// 		return { args };
// 	},
// 	template: '<UiToggle v-bind="args" />',
// });

// export const Primary = Template.bind({});
// Primary.args = { primary: true };

// export const Secondary = Template.bind({});
// Secondary.args = { primary: false };

// export default {
// 	title: 'Example/Button',
// 	component: Toggle,
// 	args: { label: 'Button' },
// 	argTypes: {
// 		backgroundColor: { control: 'color' },
// 		size: {
// 			options: ['small', 'medium', 'large'],
// 			control: 'select',
// 		},
// 	},
// };

const meta = {
	title: 'Ui/Toggle',
	component: UiToggle,
	tags: ['autodocs'],
	argTypes: {
		theme: { control: 'select', options: Object.values(UiConfig.Themes) },
		color: { control: 'select', options: Object.values(UiConfig.Colors) },
	},
	// argTypes: {
	// 	// size: { control: 'select', options: ['small', 'medium', 'large'] },
	// 	// backgroundColor: { control: 'color' },
	// 	// onClick: { action: 'clicked' },
	// },
	// args: { theme: UiConfig.Themes.PRIMARY }, // default value
} satisfies Meta<typeof UiToggle>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		// primary: true,
		// theme: UiConfig.Themes.PRIMARY,
		label: 'Togglesss',
	},
};
