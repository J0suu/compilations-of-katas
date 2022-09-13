import { getVowelCount } from './exercise';

describe('E02. Contador de vocales', () => {
	test('Debería de contar 0 para ""', () => {
		expect(getVowelCount('')).toBe(0);
	});
	test('Debería de contar 5 para "abracadabra"', () => {
		expect(getVowelCount('abracadabra')).toBe(5);
		expect(getVowelCount('ABRACADABRA')).toBe(5);
	});
	test('Debería de contar 9 para "Esfuerzo y superación"', () => {
		expect(getVowelCount('Esfuerzo y superación')).toBe(9);
	});
});
