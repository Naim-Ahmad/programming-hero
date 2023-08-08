const participant = ['naim', 'abdullah', 'oli', 'mustakim', 'abdullah', 'naim', 'oli', 'mustakim']

function removeDuplicateElement(arr) {
    const unique = []
    for (let i = 0; i < arr.length; i++){
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(removeDuplicateElement(participant));