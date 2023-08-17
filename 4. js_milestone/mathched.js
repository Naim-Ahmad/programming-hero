const products = [
    {id:1, name: "xiami phone", price: 12000},
    {id:2, name: "HP Laptop", price: 12000},
    {id:3, name: "Lenovo Laptop", price: 12000},
    {id:4, name: "Symphony z- phone", price: 12000},
    {id:5, name: "Oppo phone", price: 12000},
    {id:6, name: "Mac Book laptop", price: 12000},
    {id:7, name: "Walton x phone", price: 12000},
    {id:8, name: "Symphony z60 plus phone", price: 12000},
    {id:9, name: "Realmi phone", price: 12000},
]

function matchedProducts(products, search) {
    const matched = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched;
}

console.log(matchedProducts(products, 'symphony'));