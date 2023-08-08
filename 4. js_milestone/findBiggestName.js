function biggestName(arr) {
    let biggestName = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (biggestName.length < arr[i].length) {
            biggestName = arr[i]
        }
    }
    console.log(biggestName)
}

const friends = ['naim', 'ammar', 'redwan', 'sanaullah'];
biggestName(friends)