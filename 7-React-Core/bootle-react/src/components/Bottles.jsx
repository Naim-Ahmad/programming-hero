import { useEffect, useState } from "react"
import { getItem, removeItem, setItem } from "../utilities/localstorage"
import Bottle from "./Bottle"
import Cart from "./Cart"
import './bottles.css'

export default function Bottles() {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => {
                setBottles(data)
                const cart = getItem('cart')
                const newCart = []
                cart.forEach(id => {
                    const finedCart = data.find(bottle => bottle.id === id)
                    newCart.push(finedCart)
                })
                setCart(newCart)
                console.log(newCart)
            })
    }, [])
    // console.log(cart)
    const addToCartHandler = (id, img, price) => {
        setCart([...cart, { id, img, price }])
        setItem('cart', id)
    }
    const removeHandler = (id) => {
        setCart(cart.filter(item => item.id !== id))
        removeItem('cart', id)
    }
  return (
      <div>
          <div>
              <h3>Cart List</h3>
              <h4>Cart Items: { cart.length }</h4>
              <div className="container">
                  {cart.map((cartItem, index) => <Cart key={index} {...cartItem} removeHandler={removeHandler}/>)}
              </div>
          </div>
          <hr />
          <h3>All Bottles</h3>
            <h4>Bottles: { bottles.length}</h4>
          <div className="container">
              {bottles.map(bottle => <Bottle
                  key={bottle.id}
                  name={bottle.name}
                  image={bottle.img}
                  price={bottle.price}
                  id={bottle.id}
                  addToCartHandler={addToCartHandler}
                      />)}
          </div>
    </div>
  )
}
