import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MidComp.css";
import img1 from "../../assets/md1.png";
import img2 from "../../assets/md2.png";
import img3 from "../../assets/md3.png";
import img4 from "../../assets/md6.png";
import img5 from "../../assets/md7.png";

const MidComp = () => {
  return (
    <div className="container-fluid my-5">
      <Container className=" my-3">
        <h2 className="custom_heading">Browse by Property Type</h2>
        <p className=" text-center custom_p">
          Discover Your Favourite Location, Discover Your Favourite Location,
          Discover Your Favourite Location
        </p>
        <Row className="my-4">
          <Col md={6} lg={6} className="customize_height">
            <Row>
              <Col md={12} className="mb-3">
                <div className="image_container w-100">
                  <img src={img1} alt="Resort" className="img_fluid" />
                  <span className="d-flex align-items-center justify-content-between custom_span">
                    <h4
                      className="mt-2 ms-3 "
                      style={{
                        color: "#F8CD8C",
                        fontFamily: "Playfair Display",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "26.66px",
                        letterSpacing: "0.1em",
                        textAlign: "left",
                      }}
                    >
                      Resort
                    </h4>

                    <img
                      className="me-3 custom_cursor"
                      src={img3}
                      alt="resort"
                    />
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6} className="mb-3">
                <div className="image-container3">
                  <img src={img4} alt="Hotel" className="img_fluid" />
                  <span className="d-flex align-items-center justify-content-between custom_span_hotels">
                    <h4
                      className="mt-2 ms-3 "
                      style={{
                        color: "#F8CD8C",
                        fontFamily: "Playfair Display",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "26.66px",
                        letterSpacing: "0.1em",
                        textAlign: "left",
                      }}
                    >
                      Hotels
                    </h4>
                    <img
                      className="me-3 custom_cursor"
                      src={img3}
                      alt="resort"
                    />
                  </span>
                </div>
              </Col>
              <Col md={6} sm={6} className="mb-3">
                <div className="image-container4">
                  <img src={img5} alt="Cottage" className="img_fluid" />
                  <span className="d-flex align-items-center justify-content-between custom_span_cottage">
                    <h4
                      className="mt-2 ms-3 "
                      style={{
                        color: "#F8CD8C",
                        fontFamily: "Playfair Display",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "26.66px",
                        letterSpacing: "0.1em",
                        textAlign: "left",
                      }}
                    >
                      Cottage
                    </h4>
                    <img
                      className="me-3 custom_cursor"
                      src={img3}
                      alt="resort"
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6} lg={6} className="customize_height">
            <div className="image_container2">
              <img src={img2} alt="Villas" className="img_fluid" />
              <span className="d-flex align-items-center justify-content-between custom_span2 ">
                <h4
                  className="mt-2 ms-3"
                  style={{
                    color: "#F8CD8C",
                    fontFamily: "Playfair Display",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "26.66px",
                    letterSpacing: "0.1em",
                    textAlign: "left",
                  }}
                >
                  Villas
                </h4>
                <img className="me-3 custom_cursor" src={img3} alt="villas" />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MidComp;
