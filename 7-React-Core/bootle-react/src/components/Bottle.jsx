import propTypes from 'prop-types'
import './bottles.css'
export default function Bottle({image, id,  price, name, addToCartHandler}) {
  return (
      <div className="box">
          <h4>{ name }</h4>
          <figure>
              <img src={image} alt="" />
          </figure>
          <p>{price}$</p>
          <button onClick={()=> addToCartHandler(id, image, price)}>Add To Cart</button>
    </div>
  )
}

Bottle.propTypes = {
    id: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    addToCartHandler: propTypes.func.isRequired
}
