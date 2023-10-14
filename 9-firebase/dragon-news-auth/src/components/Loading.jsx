import PropTypes from 'prop-types'

export default function Loading({className}) {
  return (
      <div className={className}>
          <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

Loading.propTypes = {
    className: PropTypes.string
}
