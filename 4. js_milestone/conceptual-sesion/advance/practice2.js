/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

function givePrimeNumbers(numbers) {
    const primeNumbers = [];
    for (const number of numbers) {
      if (number / number == 1 && number / 1 == number ) {
        for (let i = 2; i < number; i++){
          if ((number / i) % 1 == 0) {
            primeNumbers.push(number)
          }
        }
      }
    }
    
    return primeNumbers;
}
console.log(givePrimeNumbers([4, 8, 5, 10, 19]));
// console.log(givePrimeNumbers(primeNumbers));