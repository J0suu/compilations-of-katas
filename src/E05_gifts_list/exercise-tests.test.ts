import { getGiftList, GifList } from './exercise';

describe('E05. Lista de regalos', () => {
	test('Una carta sin regalos debe de devolver una lista vacía', () => {
		expect(getGiftList('')).toEqual({});
	});
	test('Una carta con todos los regalos tachados debe de devolver una lista vacía', () => {
		const carta = '_playstation _playstation _iphone';
		expect(getGiftList(carta)).toEqual({});
	});
	test('Una carta con regalos debe devolver una lista de regalos válida', () => {
		let carta = '_playstation playstation playstation iphone balón _balon';
		let resultado: GifList = {
			playstation: 2,
			iphone: 1,
			balón: 1,
		};
		expect(getGiftList(carta)).toEqual(resultado);

		carta = 'playstation playstation playstation _iphone balón _balon';
		resultado = {
			playstation: 3,
			balón: 1,
		};
		expect(getGiftList(carta)).toEqual(resultado);

		carta = '_playstation      playstation       playstation  iphone    balón _balon    ';
		resultado = {
			playstation: 2,
			iphone: 1,
			balón: 1,
		};
		expect(getGiftList(carta)).toEqual(resultado);

		carta = '_playstation      PlayStation       PLAYSTATION  iphone    balón _balon    ';
		resultado = {
			playstation: 2,
			iphone: 1,
			balón: 1,
		};
		expect(getGiftList(carta)).toEqual(resultado);
	});
});
