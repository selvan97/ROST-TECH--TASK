import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "react-bootstrap";

import pic1 from "../../assets/r1.jpg";
import pic2 from "../../assets/r3.png";
import pic3 from "../../assets/r4.png";
import pic4 from "../../assets/r2.jpg";
import "./Comp5.css";

const Comp5 = () => {
  const locations = [
    { name: "Corporate Special", image: pic3 },
    {
      name: "Lörem ipsum rent intraluna saskapet, har sor. ",
      image: pic2,
    },
    { name: "Corporate Special", image: pic4 },
    { name: "Corporate Special", image: pic1 },
    { name: "Corporate Special", image: pic2 },
    { name: "Corporate Special", image: pic3 },
    { name: "Corporate Special", image: pic4 },
    { name: "Corporate Special", image: pic3 },
  ];
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="custom_5 container-fluid">
      <div className="container py-5">
        <h2
          className="mb-3"
          style={{
            color: "#2E3A62",
            fontFamily: "Playfair Display, serif",
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: "47.99px",
          }}
        >
          Our Special Collection
        </h2>
        <div className="d-flex justify-content-between customize_icons ">
          <div className="">
            <p className="px-2"
              style={{
                fontSize: "18px",
              }}
            >
              We can assist you with your innovation and commercialization
              journey! We can assist you with your innovation.
            </p>
          </div>
          <div className=" customize_button px-2">
            <div>
              <Button
                variant="outline-secondary"
                className="me-2"
                onClick={handleLeftClick}
                style={{ cursor: "pointer" }}
              >
                <FaChevronLeft />
              </Button>
            </div>
            <div>
              <Button
                variant="outline-secondary"
                onClick={handleRightClick}
                style={{ cursor: "pointer" }}
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="image-flex-container my-5" ref={containerRef}>
          {locations.map((location, index) => (
            <div className="image-card" key={index}>
              <img src={location.image} alt={location.name} className="image" />
              <p className="text-center fs-4    mt-2">{location.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comp5;
