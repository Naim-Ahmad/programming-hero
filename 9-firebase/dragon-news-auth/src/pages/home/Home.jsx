import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aside from "./Aside";
import Header from './header/Header';


export default function Home() {

  return (
    <>
      <Header />
      <Navbar/>
      <div className="grid grid-cols-1 lg:grid-cols-4">
            <Outlet></Outlet>
          <Aside/>
      </div>
    </>
  )
}
