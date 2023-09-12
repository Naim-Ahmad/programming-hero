import PropTypes from 'prop-types'

export default function Bookmark({ book }) {
    const { title } = book
    // console.log(book)
  return (
      <div className='bg-white rounded-lg px-4 py-2 my-3'>{ title }</div>
  )
}

Bookmark.propTypes = {
    book: PropTypes.object.isRequired
}
