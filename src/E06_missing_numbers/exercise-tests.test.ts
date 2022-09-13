import { getMissingNumbers } from './exercise';

describe('E06. Números perdidos', () => {
	test('Pasando un array vacío ([]) debe de retornar un array vacío ([])', () => {
		expect(getMissingNumbers([])).toEqual([]);
	});
	test('Pasando [1, 2, 3, 4, 10] debe de retornar [5, 6, 7, 8, 9]', () => {
		expect(getMissingNumbers([1, 2, 3, 4, 10])).toEqual([5, 6, 7, 8, 9]);
	});
	test('Pasando [2, 1, 4, 3, 10] debe de retornar [5, 6, 7, 8, 9]', () => {
		expect(getMissingNumbers([2, 1, 4, 3, 10])).toEqual([5, 6, 7, 8, 9]);
	});
	test('Pasando [-2, 2, 1, 4, 3, 10] debe de retornar [5, 6, 7, 8, 9]', () => {
		expect(getMissingNumbers([-2, 2, 1, 4, 3, 10])).toEqual([-1, 0, 5, 6, 7, 8, 9]);
	});
	test('Pasando [1, 2, 3, 4, 5] debe de retornar []', () => {
		expect(getMissingNumbers([1, 2, 3, 4, 5])).toEqual([]);
	});
	test('Pasando [1] debe de retornar []', () => {
		expect(getMissingNumbers([1])).toEqual([]);
	});
});
