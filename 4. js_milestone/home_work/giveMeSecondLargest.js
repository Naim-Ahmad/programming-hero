/* একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। */

function giveSecondLargest(numbers) {
    let secondLargest = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        if (secondLargest < numbers[i]) {
            secondLargest = numbers[i]
        }
    }
    numbers.splice(numbers.indexOf(secondLargest), 1)
    secondLargest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
      if (secondLargest < numbers[i]) {
        secondLargest = numbers[i];
      }
    }
    return secondLargest
}
const numbers = [102, 100]
const secondLargest = giveSecondLargest(numbers)
console.log(secondLargest);