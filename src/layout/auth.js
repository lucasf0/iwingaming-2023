import React from "react";
import Navbar from "../components/topNav";
import LinksBar from "../components/linksBar";
import Footer from "../components/footer";
import Layer from "../components/layer.js";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Layer />
      <LinksBar />
      <Navbar page={"auth-page"} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
