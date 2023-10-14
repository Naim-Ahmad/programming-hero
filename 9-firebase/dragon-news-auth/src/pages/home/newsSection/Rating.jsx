import PropTypes from 'prop-types'

import { AiOutlineEye } from 'react-icons/ai'

function Rating({total_view, number}) {
  return (
    <div className='flex justify-between pb-6'>
              <div className='flex items-center gap-3'>
              <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  {number}
                </div>
                <div className='flex items-center gap-3'>
                    <AiOutlineEye className='text-2xl'/>
                    {total_view}
                </div>
          </div>
  )
}

Rating.propTypes = {
    total_view: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default Rating
