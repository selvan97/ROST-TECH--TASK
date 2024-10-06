import React from "react";
import Testominal from "./Testominal";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/c71.png";
import "./Comp7.css";

const Comp7 = () => {
  return (
    <div className="custom7_car">
      <Carousel>
        <Carousel.Item>
          <div className="custom_7_image">
            <img className="d-block w-100  " src={image1} alt="" />
          </div>
          <Carousel.Caption className="">
            <Testominal />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="custom_7_image">
            <img className="d-block w-100 " src={image1} alt="" />
          </div>
          <Carousel.Caption className="">
            <Testominal />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="custom_7_image">
            <img className="d-block w-100 " src={image1} alt="" />
          </div>
          <Carousel.Caption className="">
            <Testominal />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Comp7;
