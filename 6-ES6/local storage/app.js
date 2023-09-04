document.getElementById('add_cart').addEventListener('click', function () {
    getAndShowCartValue()
})

function getAndShowCartValue() {
  const productElement = document.getElementById('product');
  const productName = productElement.value;
  const quantityElement = document.getElementById('quantity');
  const quantity = quantityElement.value;
  productElement.value= '';
    quantityElement.value = '';

    displayProduct(productName, quantity)
    updateLocalStorage(productName, quantity)
}

function updateLocalStorage(productName, quantity) {
    const products = getProductsFromLocalStorage()
    products[productName] = quantity;
    const productsString = JSON.stringify(products)
    localStorage.setItem('products', productsString);
}

function displayProduct(product, quantity) {
    const li = document.createElement('li');
    li.innerHTML = `Product: ${product}, Quantity: ${quantity}`
    document.getElementById('product_list').appendChild(li)
}

function getProductsFromLocalStorage() {
    let products = {}
    const data = localStorage.getItem('products')
    if (data) {
        products = JSON.parse(data)
    }
    return products;
}

function showProductsFromLocalStorage() {
    const products = getProductsFromLocalStorage()
    for (const product in products) {
        const quantity = products[product];
        displayProduct(product, quantity)
    }
}
showProductsFromLocalStorage()