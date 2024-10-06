import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import pic1 from "../../assets/c4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Comp4.css";

const Comp4 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const images = [pic1, pic1, pic1, pic1, pic1, pic1, pic1];

  return (
    <Container className="my-4">
      <Row className="d-flex align-items-center">
        <Col xs={6}>
          <h2
            className="mb-0 ms-2"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 500,
              textAlign: "left",
              color: "#2E3A62",
            }}
          >
            Exclusive Offers for you
          </h2>
        </Col>
        <Col xs={6} className="text-end">
          <div className="d-flex  justify-content-end customize_icons">
            <div>
              <Button
                variant="outline-secondary"
                className="me-2"
                onClick={() => scroll("left")}
                style={{ cursor: "pointer" }}
              >
                <FaChevronLeft />
              </Button>
            </div>
            <div>
              <Button
                variant="outline-secondary"
                onClick={() => scroll("right")}
                style={{ cursor: "pointer" }}
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row ref={scrollRef} className="d-flex flex-nowrap overflow-auto mt-3">
        {images.map((src, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="p-2">
            <img src={src} alt={`Image ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Comp4;
