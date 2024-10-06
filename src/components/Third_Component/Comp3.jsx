import React, { useRef } from "react";
import pic1 from "../../assets/c51.png";
import pic2 from "../../assets/c52.png";
import pic3 from "../../assets/c53.png";
import pic4 from "../../assets/c54.png";
import pic5 from "../../assets/c55.png";
import pic6 from "../../assets/c56.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Comp3.css";
const Comp3 = () => {
  const locations = [
    { name: "Ooty", image: pic1 },
    { name: "Kodaikanal", image: pic2 },
    { name: "Valparai", image: pic3 },
    { name: "Chikmagalur", image: pic4 },
    { name: "Coorg", image: pic5 },
    { name: "Wayanad", image: pic6 },
    { name: "Ooty", image: pic1 },
    { name: "Kodaikanal", image: pic2 },
    { name: "Valparai", image: pic3 },
    { name: "Chikmagalur", image: pic4 },
  ];

  const containerRef = useRef(null);

  const handleLeftClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid custom_container">
      <div className="container my-5">
        <h2 className="mb-3 custom_heading3">
          Discover Your Favourite Location
        </h2>
        <div className="d-flex justify-content-between">
          <div>
            <p className="for_3p" style={{ color: "#5A5A5A" }}>
              We can assist you with your innovation and commercialization
              journey! We can assist you with your innovation.
            </p>
          </div>
          <div className="d-flex justify-content-between customize_icons">
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

        <div className="image-flex-container" ref={containerRef}>
          {locations.map((location, index) => (
            <div className="image-card" key={index}>
              <img src={location.image} alt={location.name} className="image" />
              <h5 className="text-center  text-uppercase fw-bold mt-2">
                {location.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comp3;
