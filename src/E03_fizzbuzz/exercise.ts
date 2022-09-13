export function fizzBuzz(): string[] {
	const aux = [];
	for (let i = 1; i <= 100; i++) {
		if (!(i % 3) && !(i % 5)) {
			aux.push('FizzBuzz');
		} else if (!(i % 3)) {
			aux.push('Fizz');
		} else if (!(i % 5)) {
			aux.push('Buzz');
		} else {
			aux.push(i.toString());
		}
	}
	return aux;
}
