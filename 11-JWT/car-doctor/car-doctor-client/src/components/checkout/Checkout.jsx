import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../assets/images/services/4.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import Banner from "../shared/banner/Banner";
import CheckoutAddServices from "../shared/form/CheckoutAddServices";

export default function Checkout() {
  const loader = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const number = form.number.value;
    const message = form.message.value;

    const newBook = {
      firstName,
      lastName,
      number,
      message,
      serviceName: loader.title,
      status: "pending",
      price: loader.price,
      date: new Date().toLocaleDateString(),
      email: user.email,
      img: loader.img,
    };

    axios
      .post("http://localhost:5000/booking", newBook, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Booking Successful");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="space-y-10 max-w-7xl mx-auto p-4">
      <Banner img={img} title="Check Out" />
      <CheckoutAddServices handler={handleCheckOut}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input w-full"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input w-full"
        />
        <input
          type="number"
          name="number"
          placeholder="Your Phone"
          className="input w-full"
        />
        <input type="email" placeholder="Your Email" className="input w-full" />
        <textarea
          className="w-full col-span-2 p-4 rounded-xl"
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input
          type="submit"
          value="Order Confirm"
          className="btn btn-error col-span-2 w-full"
        />
      </CheckoutAddServices>
    </div>
  );
}
