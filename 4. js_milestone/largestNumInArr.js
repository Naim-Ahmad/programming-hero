const price = [12, 3, 254, 3, 5, 3, 64, 67, 34];
function getLargestNum(arr) {
    let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (result < arr[i]) {
               result = arr[i]
           }
        }
   console.log(result)
}

getLargestNum(price)