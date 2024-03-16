<script setup lang="ts">
import LayoutMain from '~/layouts/main.vue';

import { useQuery } from '@tanstack/vue-query';

const result = useQuery({ queryKey: ['todos'], queryFn: fetchTodoList });

async function fetchTodoList() {
	const response = await fetch('http://localhost:3030/api/auth/auth-status');
	return response.json();
}
</script>

<template>
	{{ result.data }}
	<LayoutMain></LayoutMain>
</template>
