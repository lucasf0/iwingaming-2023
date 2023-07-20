import React from "react";
import { Link } from "react-router-dom";
import { Image, Nav, Navbar, Dropdown } from "react-bootstrap";

const mapdata = [
  {
    text: "Tournaments",
    link: "/tournament",
    class: "",
  },
  {
    text: "Practice",
    link: "/practice",
    class: "",
  },
  {
    link: "",
    class: "",
    icon: <i className="bi bi-bell"></i>,
  },
  {
    text: "welcome ",
    avatar: "../assets/img/icons/avatar.png",
    link: "/profile",
    class: "",
  },
];

const Topnav = ({ page }) => {
  return (
    <Navbar expand="lg" className="topnav">
      <Navbar.Brand className="ms-5" as={Link} to="/">
        <Image src="../assets/img/logo.png" alt="logo" width={70} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="top-nav" />
      <Navbar.Collapse id="top-nav">
        {page !== "auth" ? (
          <Nav className="ms-auto mb-5 mb-lg-0 me-3">
            {mapdata.map((ele, i) => (
              <Nav.Item key={i} className="ps-3">
                {ele.avatar ? (
                  <Dropdown>
                    <Dropdown.Toggle>
                      {ele.text} <span className="color-acitve">TIM</span>
                      <Image src={ele.avatar} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item href="/admin">Dashboard</Dropdown.Item>
                      <Dropdown.Item href="/logout">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : ele.icon ? (
                  <Nav.Link as={Link} to={ele.link} className={ele.class}>
                    {ele.icon}
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to={ele.link} className="rounded-btn">
                    {ele.text}
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topnav;
