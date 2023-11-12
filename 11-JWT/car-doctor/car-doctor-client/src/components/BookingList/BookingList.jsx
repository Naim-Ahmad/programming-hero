import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import img from "../../assets/images/banner/4.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import Banner from "../shared/banner/Banner";
import TableRow from "./TableRow";

export default function BookingList() {
  const [booking, setBooking] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/booking/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount) {
          Swal.fire("Deleted Successful!");
          setBooking(booking.filter((book) => book._id !== id));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleStatus = (id) => {
    const book = booking.find((b) => b._id == id);
    const update = {
      status: book.status === "pending" ? "approved" : "pending",
    };
    console.log(update);
    axios
      .patch(`http://localhost:5000/booking/${id}`, update)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          book.status = update.status;
          const stateData = [...booking];
          stateData.splice(stateData.indexOf(book), 1, book);
          setBooking(stateData);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Banner img={img} title="Booking List" />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Action</th>
                <th>Service</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <TableRow
                  data={book}
                  handler={{ handleDelete, handleStatus }}
                  key={book._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
