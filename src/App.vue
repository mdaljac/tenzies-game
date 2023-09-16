<template>
	<div class="min-h-screen bg-gray-200 grid place-items-center">
		<div class="max-w-3xl px-10 mx-auto py-10 sm:py-0">
			<div class="text-center">
				<h1 class="text-6xl font-semibold">Tenzies</h1>
				<p class="text-xl sm:text-2xl text-gray-500 mt-6">
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</p>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-5 mt-10">
				<Die
					v-for="(num, id) in numbers"
					:key="id"
					@click="freezeDie(id)"
					:freezed="num.freezed"
					>{{ num.value }}</Die
				>
			</div>
			<div class="grid place-items-center mt-10">
				<template v-if="completed">
					<button
						class="bg-indigo-700 rounded-md text-white py-4 text-xl sm:text-2xl w-1/2 sm:w-1/4"
						@click="reset">
						Reset Game
					</button>
				</template>
				<template v-else>
					<button
						class="bg-indigo-700 rounded-md text-white py-4 text-xl sm:text-2xl w-1/2 sm:w-1/4"
						@click="shuffleNumbers">
						Roll
					</button>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup>
// import { ref } from "vue";
import Die from "./components/Die.vue";
import { useDices } from "./composables/useDices";

const dices = useDices();
const { numbers, shuffleNumbers, freezeDie, completed, reset } = dices;
</script>

<style lang="scss" scoped></style>
