<script setup lang="ts">
import { clsx } from 'clsx';
import { noop, useToggle } from '@vueuse/core';

import { UiConfig, type UiToggle } from '~/models/ui';

/* Define props */
const {
	size = undefined,
	theme = undefined,
	color = undefined,
	label = undefined,
	iconOn = undefined, // TODO: add after ui icon
	iconOff = undefined, // TODO: add after ui icon
	square = false,
	reverse = false,
	disabled = false,
	classes = { base: 'UiToggle', switcher: 'switcher', slider: 'slider' },
} = defineProps<UiToggle.Props>();

/* Define model */
const modelValue = defineModel({ default: false });
const toggleModelValue = () => {
	if (!disabled) {
		useToggle(modelValue)();
	}
};

/* Hooks */
const { themeObjectConstructor } = useUI();

/* Classes */
const baseClass = computed(() => classes.base || 'UiToggle');
const switcherClass = computed(() => `${baseClass.value}-${classes.switcher || 'switcher'}`);
const sliderClass = computed(() => `${baseClass.value}-${classes.slider || 'slider'}`);

/* Toggle theme  */
const toggleTheme: UiToggle.Theme = {
	base: baseClass.value,
	rounded: `${baseClass.value}--rounded`,
	theme: themeObjectConstructor(UiConfig.Themes),
	color: themeObjectConstructor(UiConfig.Colors),
	size: themeObjectConstructor(UiConfig.Sizes),
};

/* Toggle classes */
const toggleClass = computed(() =>
	clsx(
		toggleTheme.base,
		!square && toggleTheme.rounded,
		reverse && !modelValue.value && `${baseClass.value}--active`,
		!reverse && modelValue.value && `${baseClass.value}--active`
	)
);

/* Toggle theme attributes */
const isDisabled = computed(() => (disabled ? 'disabled' : undefined));
const isTabindex = computed(() => (disabled ? undefined : 1));

/* Data attributes */
const dataTheme = computed(() => (theme ? toggleTheme.theme[theme] : undefined));
const dataColor = computed(() => (color ? toggleTheme.color[color] : undefined));
const dataSize = computed(() => (size ? toggleTheme.size[size] : undefined));
</script>

<template lang="pug">
label(
	:class='toggleClass',
	:data-theme='dataTheme',
	:data-color='dataColor',
	:data-size='dataSize',
	v-bind='{ disabled: isDisabled, tabindex: isTabindex }',
	@click='toggleModelValue',
	@keyup.space='toggleModelValue',
	@keyup.enter='toggleModelValue',
	@keypress.prevent='noop'
)
	div(:class='switcherClass')
		div(:class='sliderClass')
			//- TODO: UI Icon
	slot
		template(v-if='label') {{ label }}
</template>
