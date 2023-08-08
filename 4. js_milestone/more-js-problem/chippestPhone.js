const phones = [
    {name: 'Samsung', camera: '100mp', color: 'gray', price: 50000},
    {name: 'iphone', camera: '100mp', color: 'white', price: 150000},
    {name: 'symphony', camera: '20mp', color: 'gray', price: 15000},
    {name: 'xioami', camera: '100mp', color: 'blue', price: 30000},
    {name: 'Nokia', camera: '50mp', color: 'gray', price: 60000},
    {name: 'HTC', camera: '110mp', color: 'red', price: 70000},
    {name: 'Oppo', camera: '50mp', color: 'gray', price: 20000}
]

function findCheapestPhone(phonesArr) {
    let cheapest = phonesArr[0]
    for (let i = 0; i < phonesArr.length; i++){
        if (phonesArr[i].price < cheapest.price) {
            cheapest = phonesArr[i]
        }
    }
    return cheapest
}

const cheapestPhone = findCheapestPhone(phones)
console.log(cheapestPhone);