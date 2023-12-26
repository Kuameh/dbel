import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div id="layout" className="px-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
