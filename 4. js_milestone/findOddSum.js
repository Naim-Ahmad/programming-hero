function sumOfArr(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
       sum += numbers[i]
    }
    return sum
}
function getOddNumbersArr(numbers) {
    const oddArr = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 !== 0) {
            oddArr.push(numbers[i])
        }
    }
    return oddArr
}
const prices = [101, 234, 532, 33, 15]
const oddNumbers = getOddNumbersArr(prices);
const sumOffOddNumbers = sumOfArr(oddNumbers)
console.log('Sum off Odd number: ' + sumOffOddNumbers)