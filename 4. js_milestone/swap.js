// value odolbodol kora ortha num1 er value num2 te num2 er value num1 e 
let num1 = 30;
let num2 = 20;

// wrong approach
// num1 = num2
// num2 = num1
// console.log(num1, num2);

// approach one
const temp = num1
num1 = num2
num2 = temp
console.log(num1, num2);