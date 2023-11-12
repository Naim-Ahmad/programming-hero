import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/services/4.jpg";
import Banner from "../shared/banner/Banner";
import CheckoutAddServices from "../shared/form/CheckoutAddServices";

export default function AddService() {
  const loader = useLoaderData();
  console.log(loader);
  const handleCheckOut = () => {
    console.log("check out");
  };
  return (
    <div className="space-y-10 max-w-7xl mx-auto p-4">
      <Banner img={img} title="Add New Service" />
      <CheckoutAddServices handler={handleCheckOut}>
        <input
          type="text"
          placeholder="Service Name"
          className="input w-full"
        />
        <input
          type="number"
          placeholder="Service Price"
          className="input w-full"
        />
        <input
          type="text"
          placeholder="Service Details"
          className="input w-full"
        />
        <input
          type="text"
          placeholder="Service Type"
          className="input w-full"
        />
        <textarea
          className="w-full col-span-2 p-4 rounded-xl"
          name="message"
          cols="30"
          rows="10"
          placeholder="Service Details"
        ></textarea>
        <input
          type="submit"
          value="Add Service"
          className="btn btn-error col-span-2 w-full"
        />
      </CheckoutAddServices>
    </div>
  );
}
