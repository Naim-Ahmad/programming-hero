function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Please give me valid number'
    } else if (number < 0) {
        return 'Please give me positive number'
    }
    return number * number * number
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please give me string type of text'
    }
    return string1.includes(string2)
}
console.log(matchFinder('John Doe', 'ohn')); // true
console.log(matchFinder('JavaScript', 'Code')); // false
console.log(matchFinder('Peter Parker', 'Pen')); // false
console.log(matchFinder('Peter Parker','pet')); // false

function sortMaker(arr) {
   
}
console.log([2, 3]); // [3, 2]
console.log([4, 2]);// [4, 2]
console.log([4, 4]);// equal
console.log([1, 2]); // [2, 1]
console.log([4, -2]); // Invalid Input
