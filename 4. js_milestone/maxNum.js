// get max by condition
function getMaxByCondition(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}
console.log(getMaxByCondition(12, 324, 45));
// get max num by Math.max()

function getMaxNumByMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
console.log(getMaxNumByMax(23,14,125));