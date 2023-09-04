const data = [{ id: 1, name: 'naim', password: 'fjoafjao' }]
// console.log(data[0].name);

const products = {
    count: 5000,
    data: [
        {id: 1, product: 'lenovo laptop', price: 50000},
        {id: 2, product: 'mac book', price: 150000}
    ]
}
// console.log(products.data[1].price);
const user = {
    name: 'Soriful islam',
    country: {
        region: {
            street1: '43/1 uttora',
            street2: 'islamabad'
        },
        country: 'bangladesh'
    }
}
console.log(user.address?.street?.street1);
