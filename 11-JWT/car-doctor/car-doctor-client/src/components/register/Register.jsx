import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../shared/SocialLogin";
import LoginRegister from "../shared/form/LoginRegister";

export default function Register() {
  const { register, profileUpdate } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  // console.log(state);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then(() => {
        profileUpdate(name)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Registration Successful!",
            });

            state ? navigate(state) : navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginRegister handler={handleRegister}>
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
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
          placeholder="Your Password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-error btn-block">Register</button>
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
