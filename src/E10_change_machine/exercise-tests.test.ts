import { getChangeInCoins } from './exercise';

describe('E10. La máquina de cambio', () => {
	test('Un cambio de 0 no devolverá ninguna moneda', () => {
		expect(getChangeInCoins(0)).toEqual([0, 0, 0, 0, 0, 0]);
	});

	test('Un cambio negativo no devolverá ninguna moneda', () => {
		expect(getChangeInCoins(-1)).toEqual([0, 0, 0, 0, 0, 0]);
		expect(getChangeInCoins(-10)).toEqual([0, 0, 0, 0, 0, 0]);
		expect(getChangeInCoins(-100)).toEqual([0, 0, 0, 0, 0, 0]);
	});

	test('Un cambio de 1 devolverá [1, 0, 0, 0, 0, 0]', () => {
		expect(getChangeInCoins(1)).toEqual([1, 0, 0, 0, 0, 0]);
	});

	test('Un cambio de 2 devolverá [0, 1, 0, 0, 0, 0]', () => {
		expect(getChangeInCoins(2)).toEqual([0, 1, 0, 0, 0, 0]);
	});

	test('Un cambio de 5 devolverá [0, 0, 1, 0, 0, 0]', () => {
		expect(getChangeInCoins(5)).toEqual([0, 0, 1, 0, 0, 0]);
	});

	test('Un cambio de 10 devolverá [0, 0, 0, 1, 0, 0]', () => {
		expect(getChangeInCoins(10)).toEqual([0, 0, 0, 1, 0, 0]);
	});

	test('Un cambio de 20 devolverá [0, 0, 0, 0, 1, 0]', () => {
		expect(getChangeInCoins(20)).toEqual([0, 0, 0, 0, 1, 0]);
	});

	test('Un cambio de 50 devolverá [0, 0, 0, 0, 0, 1]', () => {
		expect(getChangeInCoins(50)).toEqual([0, 0, 0, 0, 0, 1]);
	});

	test('Un cambio de 101 devolverá [1, 0, 0, 0, 0, 2]', () => {
		expect(getChangeInCoins(101)).toEqual([1, 0, 0, 0, 0, 2]);
	});

	test('Un cambio de 122 devolverá [1, 1, 0, 0, 1, 2]', () => {
		expect(getChangeInCoins(122)).toEqual([0, 1, 0, 0, 1, 2]);
	});
});
