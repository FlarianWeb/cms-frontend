<script setup lang="ts">
const { darkMode, colorTheme } = useTheme();
</script>

<template lang="pug">
//- FIXME: For Example. Remove me
div(@click='colorTheme = "primary"', style='color: var(--color-base-soft); cursor: pointer') Theme primary
div(@click='colorTheme = "secondary"', style='color: var(--color-base-soft); cursor: pointer') Theme secondary
div(@click='darkMode = true', style='color: var(--color-base-soft); cursor: pointer') dark mode
div(@click='darkMode = false', style='color: var(--color-base-soft); cursor: pointer') light mode

//- FIXME: For Example. Remove me
pre {{ darkMode ? 'colorMode: dark' : 'colorMode: light' }}
pre colorTheme: {{ colorTheme }}

br
br
div skeleton
UiToggle(theme='secondary', size='xs', skeleton)
UiToggle(theme='primary', size='sm', skeleton)
UiToggle(theme='primary', size='md', skeleton)
UiToggle(theme='primary', size='lg', skeleton)
UiToggle(theme='primary', size='xl', skeleton)
br
div theme
UiToggle(theme='secondary')
UiToggle(theme='primary')
br
div color
UiToggle(color='done')
UiToggle(color='danger')
UiToggle(color='alert')
UiToggle(color='info')
br
div size
UiToggle(size='xs')
UiToggle(size='sm', theme='secondary')
UiToggle(size='md', theme='secondary', color='alert')
UiToggle(size='lg', color='danger')
UiToggle(size='xl')
br
div size
UiToggle(size='xs', label='label text')
br
UiToggle(size='sm', theme='secondary', disabled, label='label text')
br
UiToggle(size='md', theme='secondary', color='alert', disabled, label='label text')
br
UiToggle(size='lg', color='danger', rounded, reverse, label='label text')
	span Slot text
br
UiToggle(size='xl', disabled, label='label text')
</template>
