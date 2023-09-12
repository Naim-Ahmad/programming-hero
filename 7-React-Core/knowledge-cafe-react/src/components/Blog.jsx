import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

export default function Blog({ blog, addBookMarkHandler, addReadingTimeHandler }) {
    const { cover_img, author_img, author_name, published_date, reading_time, tags, title } = blog;
    // console.log(reading_time)
    const [isBookMarked, setIsBookMarked] = useState(false)

  return (
      <div className='mb-8'>
          <figure>
              <img className='w-full' src={cover_img} alt="" />
          </figure>
          <div className='flex justify-between my-4'>
              <div className='flex gap-4'>
                  <figure>
                      <img src={author_img} alt="" />
                  </figure>
                  <div>
                      <h4 className='text-xl font-bold'>{author_name}</h4>
                      <p className='text'>{ published_date }</p>
                  </div>
              </div>
              <div>
                  <span className='me-4'>{reading_time}</span>
                  <button onClick={() => { addBookMarkHandler(blog);  setIsBookMarked(!isBookMarked)}}>{isBookMarked ? <BsFillBookmarkFill/> : <BsBookmark/>}</button>
              </div>
          </div>
          <div>
              <h2 className='text-4xl font-extrabold'>{title}</h2>
              <div className='my-4'>
                  {tags.map((tag, index) => <span className='me-2 text-gray text-xl' key={index}>#{tag}</span>)}
              </div>
              <button className='underline text-[#6047EC]' onClick={() => { addReadingTimeHandler(blog); setIsBookMarked(false)}}>Mark As Read</button>

          </div>
    </div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookMarkHandler: PropTypes.func.isRequired,
    addReadingTimeHandler: PropTypes.func.isRequired,
    isBookMarked: PropTypes.bool
}
