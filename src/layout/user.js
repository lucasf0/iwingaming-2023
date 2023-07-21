import React, { useEffect } from "react";
import Navbar from "../components/topNav";
import Sidebar from "../components/linksBar.js";
import Footer from "../components/footer";
import Layer from "../components/layer.js";
import { Container } from "react-bootstrap";
import { getAuthenticatedUser } from "../lib/auth_hook";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../utils/constants";

const Layout = ({ children }) => {
  const naviagor = useNavigate();
  useEffect(() => {
    getAuthenticatedUser((res) => {
      const { authenticated, user } = res;

      if (!authenticated) {
        naviagor(APP_ROUTES.SIGN_IN);
        return;
      }
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
