import PropTypes from 'prop-types'

function Input({label, type, placeholder, name, defaultValue, required}) {
    return (
        <div className='mb-3'>
           <label className="label">
                <span className="label-text">{ label }</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="input input-bordered input-accent w-full"
                required={required}
            />
      </div>
     
  )
}

Input.defaultPropTypes = {
    type: 'text',
    defaultValue: null
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
}

export default Input
