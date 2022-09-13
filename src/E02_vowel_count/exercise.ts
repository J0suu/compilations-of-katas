export function getVowelCount(text: string): number {
	let count = 0;
	const vowelsRegex = /[aeiouáéíóú]/i;
	for (let i = 0; i < text.length; i++) {
		const hasVowel = vowelsRegex.test(text[i]);
		if (hasVowel) count++;
	}
	return count;
}
