import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Comp6.css";
const Comp6 = () => {
  return (
    <div className="container-fluid">
      <div className="custom6 my-5">
        <Container className=" py-5">
          <Row className="">
            <Col md={12} lg={12}>
              <h1
                className="text-center mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "36px",
                  fontWeight: 500,
                  lineHeight: "47.99px",
                  textAlign: "center",
                  color: "#2E3A62",
                }}
              >
                Our Service is Safe, Secure, and Reliable
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className="text-center mb-1"
                style={{
                  fontFamily: "Playfair Display, sans-serif",
                  fontWeight: 400,
                  lineHeight: "27.86px",
                  color: "#5A5A5A",
                }}
              >
                Discover Your Favorite Location, Discover Your Favorite
                Location, Discover Your Favorite Location, Discover Your
                Favorite Location
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-spacebetween my-3">
                  <Col className="custom_col ">
                    <h2 className="mb-0" >
                      10+
                    </h2>
                    <p className="">Destinations</p>
                  </Col>
                  <Col className="custom_col ">
                    <h2 className="mb-0"  >15+</h2>
                    <p className="">Experience</p>
                  </Col>
                  <Col className="custom_col ">
                    <h2 className="mb-0" >100+</h2>
                    <p className="">Verified Properties</p>
                  </Col>
                  <Col className="custom_col ">
                    <h2 className="mb-0" >500+</h2>
                    <p className="">Happy Clients</p>
                  </Col>
                  <Col className="custom_col ">
                    <h2 className="mb-0" >1000+</h2>
                    <p className="">Bookings</p>
                  </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Comp6;
