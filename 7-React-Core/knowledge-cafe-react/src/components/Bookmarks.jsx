import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

export default function Bookmarks({ bookmarks, reading_time }) {
    // console.log(bookmarks)
  return (
    <aside className="my-6 w-1/3">
        <div className="rounded-lg border border-[#6047EC] custom-bg-blue text-[#6047EC] px-6 py-3">
              {`Spent time on read : ${reading_time} min`} 
        </div>
          <div className='custom-bg-light-yellow mt-4 rounded-lg p-3'>
              <h3 className='text-xl font-bold'>Bookmarked Blogs: { bookmarks.length }</h3>
              {bookmarks.map((book, index) =><Bookmark key={index}  book={book}/>)}
        </div>
    </aside>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    reading_time: PropTypes.number.isRequired
}
