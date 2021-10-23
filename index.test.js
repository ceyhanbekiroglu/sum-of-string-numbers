const sumFromString = require("./index");

it("Should calculate the sum of the numbers inside the string", () => {
	const sum = sumFromString("Capt. Jack Sparrow was born in 10/10/1789");
	expect(sum).toEqual(1809);
});

it("Should calculate the sum of the numbers inside the string", () => {
	const sum2 = sumFromString(
		`Samsung s21 ultra has 4 cameras which are 108MP main camera with 24 mm-equivalent, 12MP ultra-wide with 13 mm-equivalent, 
        10MP telephoto1 with 72 mm-equivalent, 10MP telephoto2 with 240 mm-equivalent  `
	);
	expect(sum2).toEqual(517);
});

it("Should calculate the sum of the numbers inside the string", () => {
	const sum3 = sumFromString(
		`xKT CmZ__ YouOY8Uqu-ETtz" and "x1KT-8&*@"CmZ__ YouO __Y8Uqu-ETtz`
	);
	expect(sum3).toEqual(25);
});
