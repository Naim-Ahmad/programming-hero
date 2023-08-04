/** Example 1 */
function isLeapYear(year) {
    var leap = (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
    return leap
}
// result true
console.log('Yes');
console.log(isLeapYear(2400));
console.log(isLeapYear(2000));

// result false
console.log('No')
console.log(isLeapYear(1800));
console.log(isLeapYear(1900));
console.log(isLeapYear(2100));
console.log(isLeapYear(2200))
console.log(isLeapYear(2300))
console.log(isLeapYear(2500))