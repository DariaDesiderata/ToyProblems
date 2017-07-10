// Write a function that takes a random number as an argument and then
// returns the factorial of that given number.

function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n-1)
}
