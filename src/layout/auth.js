import React from "react";
import Navbar from "../components/topNav";
import Sidebar from "../components/sidebar.js";
import Footer from "../components/footer";
import Layer from "../components/layer.js";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Layer />
      <Sidebar />
      <Navbar page={"auth"} />
      <Container fluid>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
