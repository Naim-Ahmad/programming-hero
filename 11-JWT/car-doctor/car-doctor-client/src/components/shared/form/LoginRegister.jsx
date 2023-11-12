/* eslint-disable react/prop-types */
import img from "../../../assets/images/login/login.svg";

export default function LoginRegister({ children, handler }) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row space-x-10">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handler} className="card-body">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
