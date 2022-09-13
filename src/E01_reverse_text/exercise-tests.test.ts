import { reverseText } from './exercise';

describe('E02. Volteando el texto', () => {
	test('Dado un texto sin contenido, la función devuelve un texto sin contenido', () => {
		expect(reverseText('')).toBe('');
	});
	test('Dado un texto válido, la función devuelve el texto con las palabras invertidas', () => {
		expect(reverseText('hello world!')).toBe('world! hello');
		expect(reverseText('hello  world!')).toBe('world!  hello');
		expect(reverseText("yoda doesn't speak like this")).toBe("this like speak doesn't yoda");
		expect(reverseText('foobar')).toBe('foobar');
		expect(reverseText('kata editor')).toBe('editor kata');
		expect(reverseText('row row row your boat')).toBe('boat your row row row');
	});
});
