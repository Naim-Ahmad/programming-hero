const numbers = [23, 56, 67, 10, 500, 1000];
const filtered = numbers.filter(num => num >= 500);
// console.log(filtered);
const find = numbers.find(n => n >= 500)
// console.log(typeof find);
const products = [
    {id: 1, name: 'lenovo', price: 40000},
    {id: 2, name: 'Dell', price: 55000},
    {id: 3, name: 'hp', price: 65000},
    {id: 4, name: 'mac', price: 140000},
]
const plus50thousand = products.filter(obj => obj.price >= 50000);
// console.log(plus50thousand);
const plus70thousand = products.filter(obj => obj.price >= 70000);
// console.log(plus70thousand);
const under20k = products.filter(obj => obj.price < 20000)
// console.log(under20k);
const plus50thousand1 = products.find(obj=>obj.price > 50000)
// console.log(plus50thousand1);
const under20k1 = products.find(obj => obj.price < 20000)
console.log(under20k1);