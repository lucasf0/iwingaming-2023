import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";

import Contact from "./pages/user/contact";
import Profile from "./pages/user/profile";
import Referrals from "./pages/user/referrals";

import Practice from "./pages/user/practice";
import Tournament from "./pages/user/tournament.js";
import Playgame from "./pages/user/playgame";
import Dashboard from "./pages/user/dashboard";
import Aboutus from "./pages/user/aboutus.js";

// admin page
import Admin from "./pages/admin/";

import Notfound from "./pages/error/404.js";
import Error from "./pages/error/500.js";

import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "popper.js";
import "jquery";

import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route
            exact
            path="/invite/:id"
            element={<Signup invitedBy={true} />}
          />

          <Route exact path="/practice" element={<Practice />} />
          <Route exact path="/tournament" element={<Tournament />} />
          <Route exact path="/gameplay" element={<Playgame />} />

          <Route exact path="/referrals" element={<Referrals />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/aboutus" element={<Aboutus />} />

          <Route exact path="/admin" element={<Admin />} />

          <Route exact path="/error" element={<Error />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </>
  );
};

export default App;
