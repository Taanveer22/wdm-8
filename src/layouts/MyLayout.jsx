import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MyLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-318px)] my-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyLayout;
