function getLargestNum(arr) {
    if (Array.isArray(arr)) {
        let largestNum = arr[0]
        for (let i = 1; i < arr.length; i++){
            if (typeof arr[i - 1] === 'number') {
                if (largestNum < arr[i]) {
                    largestNum = arr[i]
                }
            } else {
                return 'Please give me valid number of an array'
            }
        }
        return largestNum
    } else {
        return 'Please give me an array!'
    }
}
console.log(getLargestNum([2323,3, 3453]));

