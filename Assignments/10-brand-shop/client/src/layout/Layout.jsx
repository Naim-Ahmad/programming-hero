import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

Aos.init();

export default function Layout() {
  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
