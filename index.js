function sumOfStringNumbers(string) {
	return (string.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0);
}

module.exports = sumOfStringNumbers;
