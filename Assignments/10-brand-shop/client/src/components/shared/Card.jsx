import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Card({ data }) {
    const {company, image } = data;
    
    return (
        <Link to={`/products/${company}`}>
            <div className="card card-compact bg-base-300 shadow-xl">
                <figure>
                    <img className='w-full h-72' src={image} alt={company} />
                </figure>
                <div className="card-body">
                    <h2 className=" text-4xl text-center font-bold">{company}</h2>
                </div>
            </div>
      </Link>
  )
}

Card.propTypes = {
    data: PropTypes.object
}

export default Card
