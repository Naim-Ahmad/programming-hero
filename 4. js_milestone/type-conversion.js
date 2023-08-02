console.log(true + false); // eta pari nai 
console.log(12 / '6') // output: 2 peresi
console.log("number" + 15 + 3) // Output: number153 perechi
console.log(15 + 3 + 'number'); // output: 18number perechi
console.log([1] > null); // output: true perechi
console.log('foo' + + 'bar'); // output: fooNaN hoi nai
console.log('true' == true); // output: false pari nai 
console.log(false == 'false'); // output: false pari nai 
console.log(null == ''); // output: false pari nai 
console.log(!!'false' == !!'true'); // output: true pari nai 
console.log(['x'] == 'x'); // output: true perechi
console.log([] + null + 1); // output: null1 pari nai
console.log([] + null + 1); // output: null1 pari nai
console.log([1, 2, 3] === [1, 2, 3]); // output: false pari nai

console.log({} + [] + {} + [1]); // output: [object Object][object Object]1 pari nai    
console.log({} + [] + {} + [1]); // output: [object Object][object Object]1 pari nai