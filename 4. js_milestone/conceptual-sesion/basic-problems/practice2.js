function isJavaScriptFile(str) {
    if (typeof str === 'string') {
        return 'Please provide valid string'
    }
    if (str.endsWith('.js')) {
        return true
    } else {
        return false
    }
}
console.log(isJavaScriptFile('emails.js'));