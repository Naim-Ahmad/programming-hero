// 1. 
let a;
// console.log(a);

// 2. 
function sum(a, b) {
    const result = a + b;
}
// console.log(sum(5, 5));

// 3.
function print(a, b, c, d) {
    console.log(a, b, c, d);
}
// print(5, 6)
// 4.
function negative(x, y) {
    if (x < 0 || y < 0) {
        return
    }
    return x + y
}
// console.log(negative(5, -5));
// 5. 
const obj = {
    name: 'naim'
}
// console.log(obj.age);
// 6
const arr = ['apple', 'banana']
// console.log(arr[3]);
// 7
const u = undefined;
// console.log(u);
// 8
const arr1 = [34, 2, 5, 6]
// delete arr1[0]
// arr1.splice(0, 1)
// console.log(arr1[0]);