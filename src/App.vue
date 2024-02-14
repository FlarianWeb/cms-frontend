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
UiToggle
</template>
