import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="custom_footer">
        <Row>
          {/* Logo / About */}
          <Col md={3}>
            <h5
              className="footer-title"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "31.99px",
                letterSpacing: "0.1em",
                textAlign: "left",
                color: "#F8CD8C",
              }}
            >
              HISTAY
            </h5>
            <p className="for_ptag">
              Lorem ipsum rent intraluna sealxet, har sor. Nin spen, nis prektig
              fade. Astrorade inaskapd polving edor át jugt.Ogt georill et
              fayng, Sejesamma infrana, liksom spena.
            </p>
          </Col>

          {/* Helpful Links */}
          <Col md={3}>
            <h5 className="footer-title">Helpful Links</h5>
            <ul className="list-unstyled custom_ul">
              <li>Overview</li>
              <li>Download Itinerary</li>
              <li>Download Itinerary</li>
              <li>Download Itinerary</li>
              <li>Price Details</li>
              <li>Price Details</li>
              <li>Itinerary</li>
            </ul>
          </Col>

          {/* Top Destinations */}
          <Col md={3}>
            <h5 className="footer-title">Top Destinations</h5>
            <ul
              className="list-unstyled  custom_ul"
             
            >
              <li>Ooty</li>
              <li>Kodaikanal</li>
              <li>Wayanad</li>
              <li>Munnar</li>
              <li>Kottagiri</li>
              <li>Coorg</li>
              <li>Chikmagalur</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer-title">Top Recommended</h5>
            <ul
              className="list-unstyled  custom_ul"
             
            >
              <li>Ooty</li>
              <li>Kodaikanal</li>
              <li>Wayanad</li>
              <li>Munnar</li>
              <li>Kottagiri</li>
              <li>Coorg</li>
              <li>Chikmagalur</li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={4}>
            <p>
              <a href="#">Privacy Policy</a> &nbsp; | &nbsp;
              <a href="#">Cancellation & Refund Policy</a>
            </p>
          </Col>
          <Col md={4}>
            <p>Designed and Developed by RostTechnology</p>
          </Col>
          <Col md={4}>
            <p>Copyright &copy; HiStay 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
