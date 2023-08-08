/*
এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
*/

const numbers = [82, 34, 65, 332, 0, -1, 23, 654]

function givePositiveNum(arrOfNum) {
    const positiveValue = []
    for (let i = 0; i < arrOfNum.length; i++){
        if (arrOfNum[i] > 0) {
            positiveValue.push(arrOfNum[i])
        } else {
            break;
        }
    }
    return positiveValue;
}

const positiveValue = givePositiveNum(numbers)
console.log(positiveValue);
// return array without 0 or negative numbers
function giveWithoutNegative(numbers) {
    const positiveNumbers = []
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i]
        if (number > 0) {
            positiveNumbers.push(number)
        } else {
            continue
        }
    }
    return positiveNumbers
}

const positiveNumbers = giveWithoutNegative(numbers)
console.log(positiveNumbers);