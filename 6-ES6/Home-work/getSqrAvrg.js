const getAverage = arr => {
    const squared = [];
    let sum = 0;
    for (const element of arr) {
        squared.push(element * element);
    }
    for (const square of squared) {
        sum += square;  
    }
    return {squared, sum}
    return (sum / arr.length).toFixed(2);
}
const numbers = [4, 5, 6, 2, 1, 9];
console.log(getAverage(numbers));