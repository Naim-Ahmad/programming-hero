import PropTypes from 'prop-types'

function Card({title, image}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
        <figure>
            <img src={image} alt={title} className="rounded-xl d-image" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
        </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
}

export default Card
