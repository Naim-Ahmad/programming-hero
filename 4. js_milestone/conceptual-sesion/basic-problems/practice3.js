function mindGame(number) {
    if (number < 0) {
        return "please provide me positive number"
    }
    return ((number * 3 + 10) / 2) - 5
}

console.log(mindGame(5));
