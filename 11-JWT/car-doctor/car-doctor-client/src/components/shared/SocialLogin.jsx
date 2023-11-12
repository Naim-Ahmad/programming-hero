import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

export default function SocialLogin() {
  const { loginWithGoogle } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSocialLogin = (loginFunc) => {
    loginFunc()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Login Successful!",
        });
        state ? navigate(state) : navigate("/");
      })
      .catch();
  };
  return (
    <div className="flex justify-center gap-2">
      <div className="w-10 flex items-center justify-center h-10 p-2 rounded-full bg-[#F5F5F8]">
        <FaFacebookF />
      </div>
      <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-[#F5F5F8]">
        <FaLinkedinIn />
      </div>
      <FcGoogle
        onClick={() => handleSocialLogin(loginWithGoogle)}
        className="w-10 h-10 p-2 rounded-full bg-[#F5F5F8] cursor-pointer"
      />
    </div>
  );
}
