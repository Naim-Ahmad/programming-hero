import PropTypes from 'prop-types'

function InputText({label, type, name, placeholder, defaultValue}) {
  return (
    <div className="form-control w-full">
    <label className="label">
        <span className="label-text">{ label }</span>
    </label>
    <input defaultValue={defaultValue} type={type} name={name} placeholder={placeholder} className="input input-bordered w-full" />
    </div>
  )
}

InputText.defaultProps = {
    type: 'text',
    defaultValue: null
}

InputText.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
}

export default InputText
