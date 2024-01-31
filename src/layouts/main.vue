<script setup lang="ts"></script>

<template lang="pug">
RouterView(v-slot='{ Component }')
	template(v-if='Component')
		Transition(mode='out-in')
			KeepAlive
				Suspense
					component(:is='Component')

					template(#fallback)
						div Loading...
</template>
