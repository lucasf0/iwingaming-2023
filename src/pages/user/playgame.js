import React from "react";
import Layout from "../../layout/user";
import { Col, Row } from "react-bootstrap";
import MenuBar from "../../components/menubar";
import BottomNav from "../../components/bottomNav";
import ShowGuide from "../../components/modal";

export default function Game() {
  const url = "https://eigix.net/vmh/ugames/TikiMatch3/index.html";

  return (
    <Layout>
      <div className="d-flex w-100 pt-1">
        <h5>Practice</h5>
        <ShowGuide
          buttonClass="help-btn mb-2 ms-auto"
          className="help-modal"
          buttonText="How to play"
          modalTitle="How to play"
          modalBody="This is the body of my modal."
          closeButtonLabel="Close"
          understoodButtonLabel="Got it!"
        />
      </div>
      <Row>
        <Col md={9}>
          <iframe
            className="w-100 h-100 p-1"
            title="gamer"
            width={300}
            height={200}
            frameBorder={0}
            scrolling="no"
            src={url}
          />
        </Col>
        <Col md={3}>
          <MenuBar />
        </Col>
      </Row>
      <BottomNav />
    </Layout>
  );
}
