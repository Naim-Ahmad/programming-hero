import PropTypes from 'prop-types'

export default function Avatar({img, style}) {
  return (
    <div className={`avatar ${style}`}>
        <div className="w-16 rounded-full">
            <img src={img || 'https://i.ibb.co/fMhTpQd/no-User.jpg'} />
        </div>
    </div>
  )
}

Avatar.propTypes = {
  img: PropTypes.string,
  style: PropTypes.string
}
