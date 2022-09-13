enum DirectionEnum {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

type DirectionType = keyof typeof DirectionEnum;

export function canMouseEat(direction: DirectionType, game: string[][]): boolean {
	// Escribe tu código aquí
	return false;
}
