<script setup lang="ts">
import { clsx } from 'clsx';
import { noop, useToggle } from '@vueuse/core';

import { UiButton } from '~/models/ui/button';

/* Options */
defineOptions({
	inheritAttrs: true,
});

/* Define props */
const {
	to = undefined,
	target = undefined,
	replace = false,
	activeClass = 'UiButton--active',
	exactActiveClass = 'UiButton--exact-active',

	theme = undefined, // Тема кнопки
	color = undefined, // Цвет кнопки
	size = undefined, // Размер кнопки
	variant = 'solid', // Вариант кнопки
	as = 'button', // Тег кнопки
	label = undefined, // Текст на кнопке
	icon = undefined, // Имя иконки
	trailing = false, // Перемещение иконки в конец
	truncate = false, // Запретить перенос слов
	rounded = false, // Скруглённый
	loading = false, // Состояние загрузки
	padded = true, // Внутренние отступы
	block = false, // Блочный элемент

	disabled = false,
	classes = { base: 'UiButton', icon: 'icon', label: 'label', loading: 'loading' },
} = defineProps<UiButton.Props>();

/* Hooks */
const router = useRouter();

/* Is external link */
const isExternal = computed(() => typeof to === 'string' && to.startsWith('http'));

/* Component */
const component = computed(() => (to ? (isExternal.value ? 'a' : 'router-link') : as));

/* Bind props */
const bindProps = computed(() => ({
	...(to ? (isExternal.value ? { href: to } : { to: router.resolve(to) }) : {}),
	...(to && target && { target }),
	...(to && replace && { replace }),
	...(to && activeClass && { activeClass }),
	...(to && exactActiveClass && { exactActiveClass }),
}));
</script>

<template lang="pug">
component(:is='component', v-bind='bindProps')
	slot
</template>
