import { ref, onMounted } from "vue";
import { randomNumber } from "../utils";

export const useDices = () => {
	// numbers, freeze, shuffle numbers that are not freezed

	const numbers = ref([]);
	const freezedNumbers = ref([]);
	const completed = ref(false);

	const shuffleNumbers = () => {
		// shuffle numbers that are not clicked/freezed
		// no elements inside array, initialization
		if (!numbers.value.length) {
			for (let i = 0; i < 10; i++) {
				numbers.value.push({
					value: randomNumber(),
					freezed: false,
				});
			}
		} else {
			// elements are inside array
			for (let i = 0; i < 10; i++) {
				if (!numbers.value[i].freezed)
					numbers.value.splice(i, 1, {
						...numbers.value[i],
						value: randomNumber(),
					});
			}
		}
	};

	const freezeDie = (id) => {
		numbers.value.splice(id, 1, {
			...numbers.value[id],
			freezed: true,
		});

		freezedNumbers.value.push(numbers.value[id]);
		if (freezedNumbers.value.length === numbers.value.length)
			completed.value = true;
	};

	const reset = () => {
		numbers.value.splice(0, numbers.value.length);
		freezedNumbers.value.splice(0, freezedNumbers.value.length);
		completed.value = false;
		shuffleNumbers();
	};

	onMounted(() => {
		shuffleNumbers();
	});

	return {
		numbers,
		shuffleNumbers,
		freezeDie,
		completed,
		reset,
	};
};
