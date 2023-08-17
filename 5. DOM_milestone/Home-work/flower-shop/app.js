const productsContainer = document.querySelector('.products-container');
const productInfo = document.querySelector('.d-none');

const productsListContainer = document.getElementById('product-list-container');
const couponInput = document.getElementById('coupon');
const applyBtn = document.getElementById('apply-btn');

let productsOfCard = [];
let total = 0;

productsContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.innerText === 'Add to card') {
        if (!productsOfCard.length) {
          document.getElementById('no-item').remove();
        }
        const cloneOfProducts = productInfo.cloneNode(true);
        cloneOfProducts.classList.remove('d-none')
        const productNameElm = cloneOfProducts.children.namedItem('product-name');
        // create name of products
        const productName = target.parentNode.children.namedItem('product-name').innerText;
        productNameElm.innerText = productName;

        // create Quantity
        if (!productsOfCard.includes(productName)) {
            productsOfCard.push(productName);
        } else {
            alert('The product is already Added!');
            return;
        }
       
        // create price
        const priceElement = cloneOfProducts.children.namedItem('product-price');
        const priceString = target.parentNode.children.namedItem('product-price').innerText;
        const price = Number(priceString.split('$')[1]) + Number(priceElement.innerText);
        priceElement.innerText = price
        total += price
        const totalElement = document.getElementById('total');
        totalElement.innerText  = total 
        productsListContainer.appendChild(cloneOfProducts)
        
    }
})

let isDiscounted = false;

applyBtn.addEventListener('click', function (event) {
    if (couponInput.value === 'DISC30' && !isDiscounted) {
        total = (total / 100) * 70;
        const totalElement = document.getElementById('total');
        totalElement.innerText = total;
        isDiscounted = true;
    } else {
        alert('Invalid Coupon')
    }
})
