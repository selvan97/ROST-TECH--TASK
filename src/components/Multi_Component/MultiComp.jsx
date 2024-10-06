import React, { useRef, useState } from "react";
import { Card, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import img1 from "../../assets/mc1.png";
import img2 from "../../assets/mc2.png";
import img3 from "../../assets/mc3.png";
import img4 from "../../assets/mc4.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MultiComp.css";

const MultiComp = ({ instanceId = "default" }) => {
  const properties = [
    {
      id: 1,
      title: "The Black Forest",
      location: "Ooty",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999 ",
      tax: " +Taxes",
      rating: 4.5,
      image: img1,
    },
    {
      id: 2,
      title: "Mr.Luxury Stay Homes",
      location: "Kodaikanal",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999 ",
      tax: " +Taxes",
      rating: 4.5,
      image: img2,
    },
    {
      id: 3,
      title: "Green Park View",
      location: "Wayanad",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999",
      tax: " +Taxes",
      rating: 4.5,
      image: img3,
    },
    {
      id: 4,
      title: "Renaldo Villa",
      location: "Munnar",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999 ",
      tax: " +Taxes",
      rating: 4.5,
      image: img4,
    },
    {
      id: 5,
      title: "The Black Forest",
      location: "Valparai",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999 ",
      tax: " +Taxes",
      rating: 4.5,
      image: img1,
    },
    {
      id: 6,
      title: "Mr.Luxury Stay Homes",
      location: "Coorg",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999",
      tax: " +Taxes",
      rating: 4.5,
      image: img2,
    },
    {
      id: 7,
      title: "Mr.Luxury Stay Homes",
      location: "Chikmagalur",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999",
      tax: " +Taxes",
      rating: 4.5,
      image: img3,
    },

    {
      id: 8,
      title: "Mr.Luxury Stay Homes",
      location: "Goa",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999",
      tax: " +Taxes",
      rating: 4.5,
      image: img4,
    },
    {
      id: 9,
      title: "Mr.Luxury Stay Homes",
      location: "Mysore",
      description: "upto 2 adults, 4 childs, 24hrs.",
      price: "₹9,999",
      tax: " +Taxes",
      rating: 4.5,
      image: img1,
    },
  ];

  const [activeLink, setActiveLink] = useState("");

  const cardContainerRef = useRef(null);
  const navPillsRef = useRef(null);

  const handleScrollLeft = () => {
    cardContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    cardContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (event, location) => {
    event.preventDefault();

    setActiveLink(location);

    // Create a unique section ID
    const sectionId = `${instanceId}-${location}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  //  card styles starts
  const h1Style = {
    fontFamily: "Mohave",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27.86px",
    textAlign: "start",
  };
  const paraStyle = {
    fontFamily: "Mohave",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16.72px",
    textAlign: "start",
    color: "#5A5A5A",
  };

  const amountStyle = {
    color: "black",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "30px",
    textAlign: "start",
  };
  const taxStyle = {
    fontFamily: "Poppins",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "start",
  };

  return (
    <div className="container-fluid " style={{ backgroundColor: "#F0F0F0" }}>
      <Container className="py-5">
        <Row className=" mb-3">
          <Col className=" " md={6} sm={6} xs={6}>
            <div className="for_heading">
              <h2>Top Recommended Properties</h2>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6} className="text-end custom_btns  ">
            <Button
              variant="outline-secondary"
              className="me-2"
              onClick={handleScrollLeft}
            >
              <FaChevronLeft />
            </Button>
            <Button variant="outline-secondary" onClick={handleScrollRight}>
              <FaChevronRight />
            </Button>
          </Col>
        </Row>

        <Row>
          <div
            className="scrollable-nav-container custom_nav_border "
            ref={navPillsRef}
          >
            <Nav className="mb-4 for_border" variant="pills">
              {[
                "Ooty",
                "Kodaikanal",
                "Wayanad",
                "Munnar",
                "Valparai",
                "Coorg",
                "Chikmagalur",
                "Goa",
                "Mysore",
              ].map((location) => (
                <Nav.Item key={location}>
                  <Nav.Link
                    // href="#"
                    active={activeLink === location}
                    onClick={(event) => handleLinkClick(event, location)}
                  >
                    {location}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Row>

        <Row>
          <div
            className="scrollable-cards-container custom_btns"
            ref={cardContainerRef}
          >
            {properties.map((property) => (
              <Card
                key={property.id}
                id={`${instanceId}-${property.location}`}
                className="mb-4 card-item custom_card p-1"
                style={{ backgroundColor: "white" }}
              >
                <Card.Img variant="top" src={property.image} />
                <Card.Body>
                  <Row className="d-flex  align-items-center justify-content-between customize_ratings w-100">
                    <Col className=" w-100">
                      <span
                        className="badge"
                        style={{ backgroundColor: "#28304C" }}
                      >
                        {property.rating} <FaStar />
                      </span>
                    </Col>
                    <Col className=" text-end w-100">
                      {/* <FaHeart style={{ color: "red" }} /> may be need for future*/}
                    </Col>
                  </Row>
                  <Card.Title className="" style={h1Style}>
                    {property.title}
                  </Card.Title>
                  <Card.Text style={paraStyle}>
                    {property.location}
                    <br />
                    {property.description}
                  </Card.Text>
                  <span className="d-flex align-items-baseline justify-content-between">
                    <h5 style={amountStyle}>
                      {property.price}
                      <span style={taxStyle}>{property.tax}</span>
                    </h5>
                    <Button variant="outline-secondary" className="">
                      <FaChevronRight />
                    </Button>
                  </span>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MultiComp;
