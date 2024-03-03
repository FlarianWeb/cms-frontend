<script setup lang="ts" name="UiToggle">
import { clsx } from 'clsx';
import { noop, useToggle } from '@vueuse/core';

import { UiConfig, UiToggle } from '~/models/ui';

defineOptions({
	name: 'UiToggle',
});

/* Define props */

const props = withDefaults(defineProps<UiToggle.Props>(), UiToggle.DefaultsProps);

/* Define model */
const modelValue = defineModel({ default: false });
const toggleModelValue = () => {
	if (!props.disabled) {
		useToggle(modelValue)();
	}
};

/* Hooks */
const { themeObjectConstructor } = useUI();

/* Classes */
const baseClass = computed(() => props.classes.base || 'UiToggle');
const switcherClass = computed(() => `${baseClass.value}-${props.classes.switcher || 'switcher'}`);
const sliderClass = computed(() => `${baseClass.value}-${props.classes.slider || 'slider'}`);

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
		props.rounded && toggleTheme.rounded,
		props.reverse && !modelValue.value && `${baseClass.value}--active`,
		!props.reverse && modelValue.value && `${baseClass.value}--active`
	)
);

/* Toggle theme attributes */
const isDisabled = computed(() => (props.disabled ? 'disabled' : undefined));
const isTabindex = computed(() => (props.disabled ? undefined : 1));

/* Data attributes */
const dataTheme = computed(() => (props.theme ? toggleTheme.theme[props.theme] : undefined));
const dataColor = computed(() => (props.color ? toggleTheme.color[props.color] : undefined));
const dataSize = computed(() => (props.size ? toggleTheme.size[props.size] : undefined));
</script>

<template lang="pug">
Transition(name='fade')
	label(v-if='skeleton', :class='toggleClass', :data-size='dataSize', data-skeleton)
		div(:class='switcherClass')
			div(:class='sliderClass')
	label(
		v-else,
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
