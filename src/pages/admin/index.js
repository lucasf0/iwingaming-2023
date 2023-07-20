import React from "react";
import { useSelector } from "react-redux";
// import Nav from "../user/sections/navbar";
import Sidebar from "./sections/sidebar";
import Modal from "../../components/modal";

import Conf from "./pages/conf";
import User from "./pages/user/";
import Game from "./pages/game/";
import Tour from "./pages/tour/";
import Prize from "./pages/prize/";

export default function Admin() {
  const selectedItem = useSelector((state) => state.admin.selectedItem);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {selectedItem === "config" && <Conf />}
                {selectedItem === "users" && <User />}
                {selectedItem === "games" && <Game />}
                {selectedItem === "tours" && <Tour />}
                {selectedItem === "prizes" && <Prize />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
