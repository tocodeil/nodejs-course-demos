// find the n-th element in a fibonacci series
function fib(n) {
  let x = 1,
      y = 1;

  for (let i=0; i < n; i++) {
    [x, y] = [y, x + y];
  }

  return x;
}

console.log(fib(10));
