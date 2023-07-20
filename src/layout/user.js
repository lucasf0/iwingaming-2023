import React from "react";
import Navbar from "../components/topNav";
import Sidebar from "../components/sidebar.js";
import Footer from "../components/footer";
import Layer from "../components/layer.js";
import { Container } from "react-bootstrap";
import { useUser } from "../lib/auth_hook";

const Layout = ({ children }) => {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return (
      <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Dashboard</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>
    );
  }

  return (
    <>
      <Layer />
      <Sidebar />
      <Navbar />
      <Container fluid>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
