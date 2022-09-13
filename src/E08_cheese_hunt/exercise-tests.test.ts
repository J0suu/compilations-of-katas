import { canMouseEat } from './exercise';

describe('E08. El ratón y el queso', () => {
	test('Una habitación sin comida debe de devolver falso', () => {
		const room = [[' ', ' ', ' ']];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(false);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);
	});
	test('Una habitación con comida pero sin ratón, debe de devolver falso', () => {
		const room = [[' ', ' ', '*']];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(false);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);
	});
	test('Una habitación con comida y ratón, devolverá verdadero si la dirección es válida y el ratón encuentra comida', () => {
		let room = [
			[' ', ' ', ' '],
			[' ', ' ', 'm'],
			[' ', ' ', '*'],
		];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(true);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);

		room = [
			[' ', ' ', ' '],
			[' ', ' ', 'm'],
			[' ', '*', ' '],
		];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(false);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);

		room = [
			[' ', ' ', ' '],
			[' ', ' ', 'm'],
			['*', ' ', ' '],
		];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(false);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);
	});
	test('Una habitación puede tener más de una posición con comida', () => {
		let room = [
			[' ', ' ', ' '],
			[' ', ' ', 'm'],
			['*', ' ', '*'],
		];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(true);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);

		room = [
			[' ', ' ', '*'],
			[' ', '*', 'm'],
			[' ', '*', '*'],
		];
		expect(canMouseEat('up', room)).toBe(true);
		expect(canMouseEat('down', room)).toBe(true);
		expect(canMouseEat('left', room)).toBe(true);
		expect(canMouseEat('right', room)).toBe(false);
	});
	test('Direcciones que salgan de la habitación devolverán falso', () => {
		const room = [['m', '*', ' ']];
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('down', room)).toBe(false);
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(true);
	});
});
