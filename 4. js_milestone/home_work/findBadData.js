function findBadData(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i]
        if (number < 0) {
            count++
        }
    }
    return count
}

console.log(findBadData([-1, 3, 5, -23, 4, -39]));