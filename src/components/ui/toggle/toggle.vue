<script setup lang="ts">
import { clsx } from 'clsx';
import { noop, useToggle } from '@vueuse/core';

import { Common } from '~/models/common';
import type { UiToggle } from '~/models/ui/toggle';

/* Define props */
const {
	size = 'md',
	theme = undefined,
	color = undefined,
	label = undefined,
	iconOn = undefined, // TODO: add after ui icon
	iconOff = undefined, // TODO: add after ui icon
	square,
	reverse,
	disabled,
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

/* Toggle theme classes */
const toggleTheme: UiToggle.Theme = {
	base: baseClass.value,
	rounded: `${baseClass.value}--rounded`,
	theme: themeObjectConstructor(Common.Themes, `${baseClass.value}--theme-`),
	color: themeObjectConstructor(Common.Color, `${baseClass.value}--color-`),
	size: themeObjectConstructor(Common.Size, `${baseClass.value}--size-`),
};

const toggleClass = computed(() =>
	clsx(
		toggleTheme.base,
		toggleTheme.size[size] || toggleTheme.size.md,
		!square && toggleTheme.rounded,
		theme && toggleTheme.theme[theme],
		color && toggleTheme.color[color],
		reverse && !modelValue.value && `${baseClass.value}--active`,
		!reverse && modelValue.value && `${baseClass.value}--active`
	)
);

/* Toggle theme attributes */
const isDisabled = computed(() => (disabled ? 'disabled' : undefined));
const isTabindex = computed(() => (disabled ? undefined : 1));
</script>

<template lang="pug">
label(
	:class='toggleClass',
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
		template(v-if='label') {{ label }} {{ switcherClass }}
</template>
