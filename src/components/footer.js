import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

function Footer() {
  // const [adUrl, setAdUrl] = useState(
  //   "//www.profitabledisplaynetwork.com/watchnew?key=dfb94e6dfb8eee4fafd231cfe6551041&_=" +
  //     Date.now()
  // );

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setAdUrl((adUrl) => adUrl.replace(/_=\d+/, "_=" + Date.now()));
  //   }, 7500);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={6} className="text-center mt-1 mb-1">
          <Image src="/assets/img/ads/1.png" alt="ads" /> 

          {/* <iframe
            src={adUrl}
            frameBorder="0"
            scrolling="no"
            width=""
            height=""
            title="banner ads"
          /> */}
        </Col>
        <Col md={6} className="text-center mt-1 mb-1">
          <Image src="/assets/img/ads/2.png" alt="ads" />

          {/* <iframe
            src={adUrl}
            frameBorder="0"
            scrolling="no"
            width=""
            height=""
            title="banner ads"
          /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
