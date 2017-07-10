// Write a function that returns the nth Fibbonaci number

function fib(num) {
  if (num <= 1) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}



// w/o recursion

function fib2(n) {
  let x = 1, y = 1, z = 0
  for (var i = 0; i < n-1; i++) {
    z = x + y
    x = y
    y = z
  }
  return z
}

console.log(fib2(7));
