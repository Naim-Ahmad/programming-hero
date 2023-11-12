import PropTypes from 'prop-types'


function Radio({label, name, defaultChecked}) {
    return (
      
        <div className="form-control">
            <label className="label cursor-pointer gap-2">
                <input type="radio" name={name} value={label} className="radio checked:bg-blue-500" defaultChecked={defaultChecked} />
                <span className="label-text">{ label }</span> 
            </label>
        </div>
  )
}

Radio.defaultProps = {
    checked: null,
    defaultChecked: null
}

Radio.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
}

export default Radio
