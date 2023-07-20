import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import SearchBox from "./searchBox";
import { Api } from "../utils/api";

function Pagenav({ setType, page }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    Api("/user/getCategories", null, (res) => {
      const { success, data } = res;
      if (success) setTypes(data);
      console.log(data);
    });
  }, []);

  return (
    <Row className="">
      <Col lg={9} md={12} className="pe-0">
        <Navbar className="page-nav" expand="lg">
          <Navbar.Toggle aria-controls="page-nav" />
          <Navbar.Collapse id="page-nav">
            <Nav className="me-auto ">
              {types.map((ele, i) =>
                page === ele.in ? (
                  <li
                    className={
                      "nav-item " + (ele.value === "all" ? "active" : null)
                    }
                    key={i}
                  >
                    <Nav.Link
                      onClick={(e) => {
                        setType(ele.value);
                        const navItems = document.querySelectorAll(".nav-item");
                        navItems.forEach((item) =>
                          item.classList.remove("active")
                        );
                        e.target.parentNode.classList.add("active");
                      }}
                    >
                      {ele.index}
                    </Nav.Link>
                  </li>
                ) : null
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col lg={3} md="12" className="pe-0">
        <SearchBox />
      </Col>
    </Row>
  );
}

export default Pagenav;
