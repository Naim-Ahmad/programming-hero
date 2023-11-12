import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../shared/SocialLogin";
import LoginRegister from "../shared/form/LoginRegister";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        Swal.fire("Login Successful!");
        state
          ? navigate(state, { replace: true })
          : navigate("/", { replace: true });
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <LoginRegister handler={handleLogin}>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-error btn-block">Login</button>
      </div>
      <div className="space-y-6 text-center">
        <p>Or sign in with </p>
        <SocialLogin />
        <div>
          Do not Have an account?{" "}
          <Link to="/register">
            <span className="text-orange-500">Register</span>
          </Link>
        </div>
      </div>
    </LoginRegister>
  );
}
