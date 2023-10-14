import PropTypes from 'prop-types'

export default function Category({name}) {
  return (
      <div className='pl-10 text-dark-04 text-lg font-medium py-2'>{name}</div>
  )
}

Category.propTypes = {
    name: PropTypes.string.isRequired
}
