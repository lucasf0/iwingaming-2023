import React, { useEffect } from "react";
import Navbar from "../components/topNav";
import Sidebar from "../components/linksBar.js";
import Footer from "../components/footer";
import Layer from "../components/layer.js";
import { getAuthenticatedUser } from "../lib/auth_hook";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../utils/constants";
import Cookies from "universal-cookie";

const Layout = ({ children }) => {
  const naviagor = useNavigate();
  useEffect(() => {
    getAuthenticatedUser((res) => {
      const { authenticated, user } = res;

      if (!authenticated) {
        naviagor(APP_ROUTES.SIGN_IN);
        return;
      }
      
      const cookies = new Cookies();
      cookies.set("iwin-info", user, { path: "/" });
    });
  }, []);

  return (
    <>
      <Layer />
      <Sidebar />
      <Navbar page={"user-page"} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
