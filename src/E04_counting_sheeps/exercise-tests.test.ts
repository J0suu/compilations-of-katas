import { filterSheeps } from './exercise';

describe('E04. Contando ovejas', () => {
	test('Ovejas de color rojo y cuyo nombre contiene las letras "a" y "n"', () => {
		const sheeps = [
			{ name: 'Noa', color: 'azul' },
			{ name: 'Euge', color: 'rojo' },
			{ name: 'Navidad', color: 'rojo' },
			{ name: 'Ki Na Ma', color: 'rojo' },
			{ name: 'AAAAAaaaaa', color: 'rojo' },
			{ name: 'Nnnnnnnn', color: 'rojo' },
		];
		const result = [
			{ name: 'Navidad', color: 'rojo' },
			{ name: 'Ki Na Ma', color: 'rojo' },
		];
		expect(filterSheeps(sheeps).sort()).toEqual(result.sort());
	});
});
