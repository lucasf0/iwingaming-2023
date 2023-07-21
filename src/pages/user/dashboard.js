import React from "react";
import Layout from "../../layout/user";
import { Row, Col, Table } from "react-bootstrap";

export default function Dashboard() {


  
  const data = [
    {
      username: "Tim",
      status: "Active",
      balance: 322.08373792,
      Tournaments: [
        {
          title: " Titok",
          progress: 78,
          win: false,
        },
        {
          title: " Titok",
          progress: 34,
          win: false,
        },
        {
          title: " Titok",
          progress: 100,
          win: false,
        },
      ],
      Players: [
        {
          username: "AAA",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
        {
          username: "BBB",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
        {
          username: "CCC",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
        {
          username: "DDD",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
        {
          username: "EEE",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
        {
          username: "FFF",
          isAff: false,
          expenditure: 9373.383762,
          shared: 474.2389,
        },
      ],
    },
  ];
  return (
    <Layout>
      <Row>
        <Col>{data.username}</Col>
        <Col>{data.balance}</Col>
        <Col>{data.status}</Col>
        <Col>{data.status}</Col>
      </Row>
      <Row>
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>No</th>
                <th>No</th>
                <th>No</th>
                <th>No</th>
                <th>No</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  );
}
