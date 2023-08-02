let likeObj = {
    length: 2, 
    0: 'a',
    1: 'b',
}
console.log(Array.prototype.slice.call(likeObj, 0)) // ['a', 'b'] without length property

const arr = ['a', ,'b']
console.log(arr.slice(0)); // [ 'a', <1 empty item>, 'b' ]

const slice = Function.prototype.call.bind(Array.prototype.slice)

function list() {
    return slice(arguments)
}

console.log(list(1, 2, 3)) // [1, 2, 3]
// syntax 3
const fruits = ['orange', 'banana', 'Apple']
const copyFruits1 = fruits.slice()
console.log(copyFruits1) // ['orange', 'banana', 'Apple']
const copyFruits2 = fruits.splice(2)