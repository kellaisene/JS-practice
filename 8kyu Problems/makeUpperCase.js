//Take string and make it all uppercase

const makeUpperCase = (str) => str.toUpperCase();

//Long way
function makeUpperCase(str) {
	let output = '';

	for (let i = 0; i < str.length; i++) {
		const charCode = str[i].charCodeAt(0);
		const chr = charCode >= 97 && charCode <= 122 ? String.fromCharCode(charCode - 32) : str[i];

		output += chr;
	}
	return output;
}
