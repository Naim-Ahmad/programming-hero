// my solution
function isInteger(n) {
    const nToStr = String(n)
    if (nToStr.includes('.')) {
        return false
    }
    return true
}

console.log(isInteger(29));

// others solution
function isInteger2(n) {
    if (typeof n !== 'number') {
        return 'Please provide valid number'
    }
    if (n % 1 != 0) {
        return false
    } else {
        return true
    }
}
console.log(isInteger(29.10));
