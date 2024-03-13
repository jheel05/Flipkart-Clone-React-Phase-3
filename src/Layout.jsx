import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
