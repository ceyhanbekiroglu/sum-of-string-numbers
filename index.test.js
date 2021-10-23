const sumFromString = require("./index");

it("Test 1: Should calculate the sum of the numbers inside the string", () => {
	const sum = sumFromString("i was born in 10/10/1989");
	expect(sum).toEqual(2009);
});

it("Test 2: Should calculate the sum of the numbers inside the string", () => {
	const sum2 = sumFromString(
		`Samsung s21 ultra has 3 cameras which are 108MP main camera with 24 mm-equivalent, 12MP ultra-wide with 13 mm-equivalent, 
        10MP telephoto1 with 72 mm-equivalent, 10MP telephoto2 with 240 mm-equivalent  `
	);
	expect(sum2).toEqual(516);
});