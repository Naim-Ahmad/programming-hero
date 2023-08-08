// Problem 1: FizzBuzz

function fizzBuzz(n) {
    const arrOfStr = []
    for (let i = 1; arrOfStr.length <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            arrOfStr.push('FizzBuzz')
        } else if (i % 5 === 0) {
            arrOfStr.push('Buzz');
        } else if (i % 3 === 0) {
            arrOfStr.push('Fizz');
        }
    }
    return arrOfStr
}

console.log(fizzBuzz(5));

// Problem 2: Palindrome Check

function isPalindrome(str) {
    const reversedArr = str.split('').reverse()
    const decorateString = reversedArr.join('')
    return decorateString.toLowerCase() === str.toLowerCase();
}

console.log(isPalindrome('madam'));

// chat gpt solution recommend for optimize
function isPalindrome2(str) {
    let len = str.length
    for (let i = 0; i < len / 2; i++) { 
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome2('madam'));

// Problem 3: Array Maximal Adjacent Difference
function maximalArray(arr) {
    return arr.sort((a,b)=> a < b ? 1: -1)
}
console.log(maximalArray([1, 2,3,5,6,7,8]));

// Problem 4: Reverse Words in a String
function reverseWords(str) {
    const words = str.split(' ')
    let reverseWord = ''
    for (let i = 0; i < words.length; i++){
        let len = words[i].length
        for (let j = len - 1; j >= 0; j--){
            reverseWord += words[i][j]
        }
        reverseWord += ' '
    }
    return reverseWord.trimEnd()

}
console.log(reverseWords('Hello World'));

// chat gpt solution
function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = words.map((word) => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}

console.log(reverseWords('Hello World'));

// Problem 5: Duplicate Count

function countDupChar(str) {
    let checkedArr = []
    let count = 0;
    for (let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase()
        if (char != ' ') {
            if (checkedArr.includes(char)) {
                count++
            } else {
                checkedArr.push(char)
            }
        } 
    }
    return count
}
console.log(countDupChar('I Love Allah'));

// chat gpt solution
function characterCount(str) {
  const charCount = {};
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char != ' ') {
        if (charCount[char]) {
            count++
        } else {
            charCount[char] = char;
        }
    }
  }

  return count;
}

console.log(characterCount('I Love Allah'));

// Problem 7: Fibonacci Sequence

function fibonacci(n) {
    const fibonacci = [0, 1]
    for (let i = 2; i <= n; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    return fibonacci
}
console.log(fibonacci(10));

// Problem 9: Title Case

function capitalize(str) {
    const words = str.split(' ')
    let decorateStr = ''
    for (let i = 0; i < words.length; i++){
        const word = words[i]
        const firstChar = word.charAt(0)
        const capitalChar = firstChar.toUpperCase()
        const capitalWord = word.replace(firstChar, capitalChar)
        decorateStr += capitalWord + ' '
    }
    return decorateStr.trimEnd()
}

console.log(capitalize('i love allah'));
console.log(capitalize('hello world!'));