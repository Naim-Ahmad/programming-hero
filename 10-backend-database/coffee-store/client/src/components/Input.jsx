import PropTypes from 'prop-types'
function Input({label, type, placeholder, classes, defaultValue}) {
  return (
    <div className={`form-control w-full ${classes}`}>
        <label className="label">
              <span className="label-text">{ label }</span>
        </label>
          <input defaultValue={defaultValue} type={type} name={label.toLowerCase()} placeholder={placeholder} className={`input input-bordered w-full`}/>
    </div>
  )
}

Input.defaultProps = {
    type: 'text',
    defaultValue: null
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
    handler: PropTypes.func,
    defaultValue: PropTypes.string
}

export default Input
