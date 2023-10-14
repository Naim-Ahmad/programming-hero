import PropTypes from 'prop-types'
import { BsBookmark, BsShare } from 'react-icons/bs'

function Author({ author }) {
  return (
      <div className='flex justify-between bg-dark-07 p-5 border mt-6'>
          <div className='flex gap-3'>
              <figure>
                  <img className='w-10 rounded-full' src={author.img} alt="" />
              </figure>
              <div className=''>
                  <h3 className='text-dark-02 font-semibold'>{author.name}</h3>
                  <p className='text-dark-03 text-sm'>{ author.published_date}</p>
              </div>
          </div>
          <div className='flex gap-3'>
              <BsBookmark />
              <BsShare/>
          </div>
    </div>
  )
}

Author.propTypes = {
    author: PropTypes.object.isRequired
}

export default Author
