// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacciSequence(n) {
    let sequence = '0, 1';
    let init0 = 0
    let init1 = 1
    let result = 0
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
           result = init0 + init1
        }
    }
}
function add(a, b) {
  return a + b;
}
console.log(add('adam' + 'eve'));

fibonacciSequence(10)