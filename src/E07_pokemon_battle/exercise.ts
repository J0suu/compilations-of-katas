/* eslint-disable @typescript-eslint/no-unused-vars */
enum PokemonTypeEnum {
	fire = 'fire',
	water = 'water',
	grass = 'grass',
	electric = 'electric',
}
type PokemonType = keyof typeof PokemonTypeEnum;

export function getAttackDamage(
	attackerType: PokemonType,
	defenderType: PokemonType,
	attack: number,
	defense: number
): number {
	let efectivity = 0;

	if (attack <= 0 || defense <= 0 || attack > 100 || defense > 100) {
		return -1;
	}

	if (
		(attackerType == 'water' && defenderType == 'fire') ||
		(attackerType == 'fire' && defenderType == 'grass') ||
		(attackerType == 'grass' && defenderType == 'water') ||
		(attackerType == 'electric' && defenderType == 'water')
	) {
		efectivity = 2;
	} else if (
		(attackerType == 'water' && defenderType == 'electric') ||
		(attackerType == 'fire' && defenderType == 'electric') ||
		(attackerType == 'grass' && defenderType == 'electric') ||
		(attackerType == 'electric' && defenderType == 'fire')
	) {
		efectivity = 1;
	} else {
		efectivity = 0.5;
	}

	let damage = 50 * (attack / defense) * efectivity;
	return parseFloat(damage.toFixed(2));
}
