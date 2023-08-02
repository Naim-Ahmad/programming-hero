
/** Task one */
function foo() {
    console.log('foo')
    bar()
}
function bar() {
    console.log('bar')
}
foo()
/** Task two */
function average_three_num(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}

const averageAssignmentMarks = average_three_num(50, 55, 60)
console.log(averageAssignmentMarks)
/** Task three */
function make_average(arr) {
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++){
        sumOfArray+=arr[i]
    }
    const average = sumOfArray / arr.length;
    return average
}

const assignmentMarks = [20, 40, 50, 43, 33];
const averageMarks = make_average(assignmentMarks)
console.log(averageMarks)
/** Task four */
function odd_even(num) {
    if (num % 2 === 0) {
        return "This is even number"
    } else {
        return "This is odd number"
    }
}

console.log(odd_even(3))
console.log(odd_even(2))
/** Task five */
let signal = 'red'
switch (signal) {
    case 'red':
        console.log('If you try to cross the rode, You may be in danger.')
        break;
    case 'yellow':
        console.log('You should stop')
        break;
    case 'green':
        console.log('You should cross the rode')
}