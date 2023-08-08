// ex: 1
function reverseString(str) {
    const word = str.split('').reverse()
    let reverseString = ''
    for (let v of word) {
        reverseString += v
    }
    return reverseString
}
// console.log(reverseString('Maliha'));

function reverseStringFunc(str) {
    let reverseWord = ''
    for (let i = str.length - 1; i >= 0; i--){
        reverseWord += str[i]
    }
    return reverseWord
}
console.log(reverseStringFunc('I am Maliha'));


