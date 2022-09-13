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
	if (attack <= 0 || defense <= 0 || attack > 100 || defense > 100) {
		return -1;
	}

	const efectivity = getEffectivity(attackerType, defenderType);

	let damage = 50 * (attack / defense) * efectivity;
	return parseFloat(damage.toFixed(2));
}
function getEffectivity(attackerType: string, defenderType: string) {
	const isVeryEffective =
		(attackerType == 'water' && defenderType == 'fire') ||
		(attackerType == 'fire' && defenderType == 'grass') ||
		(attackerType == 'grass' && defenderType == 'water') ||
		(attackerType == 'electric' && defenderType == 'water');

	const isNormalEffective =
		(attackerType == 'water' && defenderType == 'electric') ||
		(attackerType == 'fire' && defenderType == 'electric') ||
		(attackerType == 'grass' && defenderType == 'electric') ||
		(attackerType == 'electric' && defenderType == 'fire');

	if (isVeryEffective) {
		return 2;
	} else if (isNormalEffective) {
		return 1;
	}
	return 0.5;
}
