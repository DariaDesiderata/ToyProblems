//Have the function AlphabetSoup(str) take the str string parameter being passed
//and return the string with the letters in alphabetical order
//(ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be
//included in the string.

function AlphabetSoup(str) {

	function compare(a, b) {
		return a > b ? 1 : -1
	}

	let newStr = str.split('').sort(compare).join('')
	return newStr
};

console.log(AlphabetSoup("magnanimous"))
