import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function NewsBody({news}) {
  return (
      <div className='space-y-6 border p-4'>
            <h1 className='text-lg font-bold'>{ news.title }</h1> 
          <figure>
              <img className='w-full' src={news.image_url} alt="" />
          </figure>
          <div>
              <p>{news.details.length > 170 ? `${news.details.slice(0, 170)}...` : news.details}</p>
              { news.details.length > 170 && <Link to={`/newsDetails/${news._id}`} className='text-orange-500'>See more</Link> }
          </div>
          <div className="divider"></div>
          <Rating
              total_view={news.total_view}
              number={news.rating.number}
          />
    </div>
  )
}

NewsBody.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsBody
