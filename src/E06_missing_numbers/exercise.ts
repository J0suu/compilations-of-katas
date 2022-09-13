export function getMissingNumbers(numbers: number[]): number[] {
	let missingNumbers: number[] = [];
	let minValue: number = Math.min(...numbers);
	let maxValue: number = Math.max(...numbers);

	for (let i = minValue; i < maxValue; i++) {
		if (!numbers.includes(i)) {
			missingNumbers.push(i);
		}
	}

	return missingNumbers;
}
// SOLUCION DE ORLANDO

// export function getMissingNumbers(numbers: number[]): number[] {
//     const sorted = numbers.sort((a, b) => a - b);
//     const min = sorted[0];
//     const max = sorted[sorted.length - 1];
//     const missingNumbers: number[] = [];

//     for (let number = min; number <= max; number += 1) {
//         if (!sorted.includes(number)) {
//             missingNumbers.push(number);
//         }
//     }

//     return missingNumbers;
// }
