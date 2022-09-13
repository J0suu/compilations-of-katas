enum DirectionEnum {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

type DirectionType = keyof typeof DirectionEnum;

let getMousePosition = (room: string[][]): { x: number; y: number } | null => {
	for (let i = 0; i < room.length; i++) {
		for (let j = 0; j < room[i].length; j++) {
			if (room[i][j] === 'm') {
				return { x: i, y: j };
			}
		}
	}
	return null;
};

export function canMouseEat(direction: DirectionType, game: string[][]): boolean {
	let mousePosition = getMousePosition(game);
	if (!mousePosition) {
		return false;
	}
	return true;
}
