import React from "react";
import mobile from "../../assets/c7.jpg";
import test from "../../assets/c72.png";
import propic from "../../assets/c73.png";
import star from "../../assets/star.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Comp7.css";

const Testominal = () => {
  return (
    <div className="custom_testimonials container my-5 ">
      <div className="row  ">
        <div className=" col-lg-6 p-0">
          <div className="customize_test_pic">
            <img src={test} alt="Testimonial" className="" />
          </div>
        </div>

        <div className=" col-lg-6 p-3" style={{ backgroundColor: "white" }}>
          <div className="row">
            <div className=" col-sm-12">
              <h3
                className="mx-2 my-3"
                style={{
                  color: "#28304C",
                  fontFamily: "Playfair Display,serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "31.99px",
                  textAlign: "justify",
                }}
              >
                Client Testimonials
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p
                className="mx-2 my-3"
                style={{
                  color: "#5A5A5A",
                  fontFamily: "Mohave",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  textAlign: "justify",
                }}
              >
                Host your dream wedding under the stars at our beach resort,
                where the gentle waves and starlit sky set a breathtakingly
                romantic scene. The ocean breeze and shimmering lights create an
                enchanting atmosphere for your special day. With luxurious
                settings and impeccable service,
              </p>
            </div>
          </div>
          <div className="row mx-2 my-3">
            <div className="col-md-8 col-lg-8 col-sm-12  ">
              <div className="row">
                <div className="col-md-3 col-lg-3 ">
                  <img
                    src={propic}
                    alt="Profile"
                    className="custom_propic"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-9 col-lg-9">
                  <div className="d-flex align-items-center justify-content-start w-100 my-2">
                    <p
                      className="mb-0  "
                      style={{
                        color: "#28304C",
                        fontFamily: "Mohave",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        textAlign: "left",
                      }}
                    >
                      Raghul.R <br />
                      <span
                        className=""
                        style={{
                          color: "#28304C",
                          fontFamily: "Mohave",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        Software Developer, Chennai
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="rating d-flex my-2">
                <span className="">
                  <img src={star} alt="" />
                </span>
                <span className="">
                  <img src={star} alt="" />
                </span>
                <span className="">
                  <img src={star} alt="" />
                </span>
                <span className="">
                  <img src={star} alt="" />
                </span>
                <span className="">
                  <img src={star} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominal;
