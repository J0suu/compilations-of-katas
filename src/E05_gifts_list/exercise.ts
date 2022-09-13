export interface GifList {
	[key: string]: number;
}

export function getGiftList(list: string): GifList {
	const wrongValue = '_';
	const gifts = list
		.toLowerCase()
		.split(' ')
		.filter(e => !e.startsWith(wrongValue) && e != '');

	let gifList: GifList = {};

	gifts.forEach(gift => {
		if (gifList.hasOwnProperty(gift)) {
			gifList[gift] += 1;
		} else {
			gifList[gift] = 1;
		}
	});

	return gifList;
}
