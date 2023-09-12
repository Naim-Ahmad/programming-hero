import PropTypes from 'prop-types'

export default function Cart({ id,  img, price, removeHandler }) {
  return (
      <div className="box">
          <figure>
              <img src={img} alt="" />
          </figure>
          <p>{price}$</p>
          <button onClick={()=>removeHandler(id, img, price)}>Remove</button>
    </div>
  )
}

Cart.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    removeHandler: PropTypes.func.isRequired
}