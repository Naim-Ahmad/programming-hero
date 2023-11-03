import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const getReview = num => {
  const stars = []
  const round = Math.round(Number(num))
  for (let i = 0; i < round; i++){
    stars.push(<BsFillStarFill key={i} className='text-green-500'/>)
  }
  while (stars.length < 5) {
    stars.push(<BsFillStarFill key={stars.length} className='text-gray-300'/>)
  }
  return stars;
}

export default function Card({ data }) {
  const { _id, name, brandName, type, rating, price, image } = data;
 
  return (
    <div className="card group bg-base-200 shadow-xl">
          <figure className='relative group-hover:bg-gray-400 transition'>
              <img src={image} alt={name} className="w-full h-72" />
              <div className="absolute bg opacity-0 flex items-center gap-2 group-hover:opacity-100 transition">
                  <div data-aos="fade-right">  
            <Link to={`/viewDetails/${_id}`} className='btn btn-accent'>
            <AiFillEye title='View Details'  className='text-4xl -translate-x-10 group-hover:translate-x-0 p-2 transition rounded-md' />
            </Link>
                  </div>
                  <div data-aos="fade-left">
                    <Link to={`/updateProducts/${_id}`} className='btn btn-accent'>
                      <FaPencilAlt title='Update Product' className='text-4xl p-2 transition translate-x-10 group-hover:translate-x-0 rounded-md' />
                    </Link>
                  </div>
              </div>
          </figure>
        <div className="card-body">
            <h2 className="card-title">
            {name}
                <div className="badge badge-secondary">{brandName }</div>
            </h2>
              
              <div className="flex items-center gap-2 my-2">
                <div className="flex gap-1">
                    {getReview(rating)}
                  </div>
                  <span className="btn btn-accent btn-xs max-w-fit px-2 py-1 rounded-lg font-medium"> 
                  {rating}</span>
              </div>
              <div className="card-actions items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">${price}</span>
                  </div>
                <div className="badge badge-outline">{ type }</div> 
            </div>
             
        </div>
    </div>
  )
}

Card.propTypes = {
    data: PropTypes.object
}

