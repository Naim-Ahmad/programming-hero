const pcParts = [
    { productName: 'Processor', price: 20000, quantity: 2 },
    { productName: 'Ram', price: 3000, quantity: 2 },
    { productName: 'Mother board', price: 20000, quantity: 2 },
    { productName: 'SSD', price: 4000, quantity: 2 },
    { productName: 'case', price: 4000, quantity: 2 },
    { productName: 'build', price: 500, quantity: 2 }
]

function getTotalPrice(arrOfObj) {
    let total = 0
    for (let i = 0; i < arrOfObj.length; i++){
        const product = arrOfObj[i]
        total += product.price * product.quantity

    }
    return total
}

const totalAmount = getTotalPrice(pcParts)
console.log(totalAmount);