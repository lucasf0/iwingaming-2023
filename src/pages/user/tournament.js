import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Api } from "../../utils/api";

import Layout from "../../layout/user";
import Pagenav from "../../components/filterNav";
import BottomNav from "../../components/bottomNav";
import MenuBar from "../../components/menubar";
import PaginatedItems from "../../components/paginate";
import ShowGuide from "../../components/modal";
import PageTitle from "../../components/pageTitle";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [dbs, setDbs] = useState([]);

  useEffect(() => {
    setLoading(true);
    Api("/user/getTours", null, (res) => {
      const { success, data } = res;
      if (success) {
        setTours(data);
        setDbs(data);
      }
      setLoading(false);
    });
  }, []);

  const setType = (opt) => {
    if (opt === "all") {
      setTours(dbs);
    } else {
      const filteredGames = dbs.filter((game) => game.type === opt);
      setTours(filteredGames);
    }
  };

  return (
    <Layout>
      <PageTitle title={"Tournament Lobby"} />
      <Row className="">
        <Col md={9}>
          <Pagenav setType={setType} page={"tournament"} />
          <Row className="mt-2 game-list">
            {loading ? <h4>Loading...</h4> : <PaginatedItems items={tours} />}
          </Row>
        </Col>
        <Col md={3}>
          <MenuBar />
        </Col>
      </Row>
      <BottomNav />
    </Layout>
  );
};

export default Home;
