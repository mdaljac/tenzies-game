<template>
	<button
		class="bg-white hover:bg-green-300 transition-colors aspect-square rounded-md font-bold text-4xl flex items-center justify-center"
		:class="{ 'bg-green-300': freezed }">
		<slot></slot>
	</button>
</template>

<script setup>
defineProps({
	freezed: Boolean,
});
</script>

<style lang="scss" scoped></style>
