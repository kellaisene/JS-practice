// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue(values) {
	let sorted = values.sort();
	let lowestNums = [];

	for (let i = 0; i < sorted.length; i++) {
		if (lowestNums.indexOf(sorted[i]) === -1) {
			lowestNums.push(sorted[i]);
		}
	}

	return Number(lowestNums.join(''));
}
