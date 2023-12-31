import React, { useEffect, useState } from "react";
import Layout from "../../layout/user";
import { Col, Row } from "react-bootstrap";
import MenuBar from "../../components/menubar";
import BottomNav from "../../components/bottomNav";
import PageTitle from "../../components/pageTitle";

export default function Game() {
  const [url, seturl] = useState();
  const [name, setname] = useState();
  useEffect(() => {
    const { url, name } = JSON.parse(localStorage.getItem("selected_game"));

    setname(name);
    seturl(url);
  }, []);

  return (
    <Layout>
      <PageTitle title={name} />
      <Row>
        <Col md={9} className="px-1">
          <iframe
            className="w-100 h-100"
            title="gamer"
            width={300}
            height={200}
            frameBorder={0}
            scrolling="no"
            src={url}
          />
        </Col>
        <Col md={3} className="px-1">
          <MenuBar />
        </Col>
      </Row>
      <BottomNav />
    </Layout>
  );
}
