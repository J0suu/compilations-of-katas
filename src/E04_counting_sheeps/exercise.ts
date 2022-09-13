interface Sheep {
	name: string;
	color: string;
}

export function filterSheeps(sheeps: Sheep[]): Sheep[] {
	return sheeps.filter(
		e => e.color == 'rojo' && e.name.toLowerCase().includes('n') && e.name.toLowerCase().includes('a')
	);
}
