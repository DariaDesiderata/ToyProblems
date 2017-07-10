
// Using the JavaScript language, have the function ABCheck(str) take the str          *
// parameter being passed and return the string true if the characters a and b are     *
// separated by exactly 3 places anywhere in the string at least once                  *
// (ie. "lane borrowed" would result in true because there is exactly three characters *
// between a and b). Otherwise return the string false.
// Big O

function ABCheck(str) {

	let x = str.indexOf('a')
  let y = str.indexOf('b')
  let z = y - x
	return z === 4 ? "true" : "false"

}

console.log(ABCheck("fafg bc"));
