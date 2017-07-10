 // Arith Geo                                                                            *
//  Using the JavaScript language, have the function ArithGeo(arr) take the array of    *
//  numbers stored in arr and return the string "Arithmetic" if if the sequence follows    *
// an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If   *
//  the sequence doesn't follow either pattern return -1. An arithmetic sequence is     *
//  one where the difference between each of the numbers is consistent, where as in a   *
//  geometric sequence, each term after the first is multiplied by some constant or     *
//  common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                        *
// example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not  *
//  be entered, and no array will contain all the same elements.                        *

//To check for arithmetic pattern, start by getting the difference between the first *
//two number. Then loop thru array starting in position 2 and subtract the previous *
// number. If the difference is equal to the initial difference then you have an *
//arithmetic pattern so return arithmetic. Next repeat by getting initial difference *
//by dividing the first and second numbers. Loop through array starting in position *
//2 and compare the current number divided by previous number. If difference is *
//equal to the initial number then you have a geometric pattern. Else return -1. *

function ArithGeo(arr) {

	let patternArr = [];

	function compare(a, b) {
		return a > b ? 1 : -1
	}
	arr.sort(compare)

	if (arr[1] - arr[0] === arr[2] - arr[1]) {
		return "arithmetic"
	} else if (arr[1]/arr[0] === arr[2]/arr[1]) {
		return "geometric"
	} else {
		return -1
	}


}
console.log(ArithGeo([2, 6, 54, 18]))
