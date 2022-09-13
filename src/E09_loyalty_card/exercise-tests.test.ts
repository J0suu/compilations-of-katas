import { shouldBuyLoyaltyCard } from './exercise';

describe('E09. La tarjeta de fidelidad', () => {
	test('La compra de un número de tickets no válido (números negativos o 0) debe de devolver falso', () => {
		expect(shouldBuyLoyaltyCard(0)).toBe(false);
		expect(shouldBuyLoyaltyCard(-1)).toBe(false);
		expect(shouldBuyLoyaltyCard(-100)).toBe(false);
	});
	test('La compra de 1 ticket debe de devolver falso', () => {
		expect(shouldBuyLoyaltyCard(1)).toBe(false);
	});
	test('La compra de 2 tickets debe de devolver falso', () => {
		expect(shouldBuyLoyaltyCard(2)).toBe(false);
	});
	test('La compra de 7 tickets debe de devolver falso', () => {
		expect(shouldBuyLoyaltyCard(7)).toBe(false);
	});
	test('La compra de 10 tickets debe de devolver falso', () => {
		expect(shouldBuyLoyaltyCard(10)).toBe(false);
	});
	test('La compra de 25 tickets debe de devolver verdadero', () => {
		expect(shouldBuyLoyaltyCard(25)).toBe(true);
	});
	test('La compra de 50 tickets debe de devolver verdadero', () => {
		expect(shouldBuyLoyaltyCard(50)).toBe(true);
	});
	test('La compra de 100 tickets debe de devolver verdadero', () => {
		expect(shouldBuyLoyaltyCard(100)).toBe(true);
	});
});
