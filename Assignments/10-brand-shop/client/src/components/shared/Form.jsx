
import PropTypes from 'prop-types'
import SocialAuth from './SocialLogin'

function Form({children, handleSubmit, submitValue, title, avatar, socialAuth,style }) {
  return (
    <div className="min-h-[90vh] flex px-6 items-center bg-base-300 justify-center">
      <div className={`shadow-2xl my-16 px-6 py-8 relative bg-base-100 rounded-2xl ${style}`}>
        {avatar && avatar}
              <h1 className="text-2xl tra font-bold text-center my-5">{ title }</h1>
        <form onSubmit={handleSubmit}>
          {children}
          <input className="mt-6 btn w-full block btn-accent" type="submit" value={submitValue} />
        </form>
        {socialAuth && <> <div className="divider">OR</div>
        <SocialAuth/></>}
      </div>
    </div>
  )
}

Form.propTypes = {
    children: PropTypes.node,
    handleSubmit: PropTypes.func,
    submitValue: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.string,
    avatar: PropTypes.node,
    socialAuth: PropTypes.bool
}

export default Form
