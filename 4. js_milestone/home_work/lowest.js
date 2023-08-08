function getLowest(numbers) {
    let lowest = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (lowest > numbers[i]) {
            lowest = numbers[i]
        }
    }
    return lowest
}

console.log(getLowest([213, 2, 54, 35, 3, 65, 34]));

function getLowestByMin(numbers) {
    return Math.min(...numbers)
}
console.log(getLowestByMin([213, 2, 54, 35, 3, 65, 34]));
