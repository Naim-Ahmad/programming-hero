// by if else get the smallest number in three number
function getMinNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1
    } else if (num2 < num1 && num2 < num3) {
        return num2
    } else {
        return num3
    }
}

console.log(getMinNum(123, 52, 435));
// by Math.min()
function getMinNumByMin(num1, num2, num3) {
    return Math.min(num1, num2, num3)
}
console.log(getMinNumByMin(123, 52, 435));