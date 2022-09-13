import { getAttackDamage } from './exercise';

describe('E07. Batalla Pokémon', () => {
	test('Valores de entrada no válidos deben de devolver -1', () => {
		expect(getAttackDamage('fire', 'grass', 102, 100)).toBe(-1);
		expect(getAttackDamage('fire', 'grass', 102, 102)).toBe(-1);
		expect(getAttackDamage('fire', 'grass', 100, 102)).toBe(-1);
		expect(getAttackDamage('fire', 'grass', 100, 0)).toBe(-1);
		expect(getAttackDamage('fire', 'grass', 0, 100)).toBe(-1);
		expect(getAttackDamage('fire', 'grass', -10, 100)).toBe(-1);
	});
	test('Valores de entrada válidos deben de devolver el daño correcto', () => {
		expect(getAttackDamage('water', 'fire', 100, 100)).toBe(100);
		expect(getAttackDamage('water', 'fire', 100, 50)).toBe(200);
		expect(getAttackDamage('water', 'electric', 100, 100)).toBe(50);
		expect(getAttackDamage('water', 'electric', 100, 50)).toBe(100);
		expect(getAttackDamage('water', 'grass', 100, 100)).toBe(25);
		expect(getAttackDamage('water', 'grass', 100, 50)).toBe(50);
		expect(getAttackDamage('water', 'water', 100, 100)).toBe(25);
		expect(getAttackDamage('water', 'water', 100, 50)).toBe(50);
		expect(getAttackDamage('fire', 'fire', 100, 100)).toBe(25);
		expect(getAttackDamage('fire', 'fire', 100, 50)).toBe(50);
		expect(getAttackDamage('fire', 'water', 100, 100)).toBe(25);
		expect(getAttackDamage('fire', 'water', 100, 50)).toBe(50);
		expect(getAttackDamage('fire', 'grass', 100, 100)).toBe(100);
		expect(getAttackDamage('water', 'fire', 92, 74)).toBe(124.32);
		expect(getAttackDamage('water', 'electric', 92, 74)).toBe(62.16);
		expect(getAttackDamage('water', 'grass', 92, 74)).toBe(31.08);
		expect(getAttackDamage('water', 'water', 92, 74)).toBe(31.08);
		expect(getAttackDamage('fire', 'fire', 74, 92)).toBe(20.11);
	});
});
