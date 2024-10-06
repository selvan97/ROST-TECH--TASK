import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="customize_header">
      <marquee behavior="" direction="">
        <p className="for_text text-uppercase text-white mt-3">
          <span style={{ color: "#F8CD8C" }}>
            Get ready for the festival and
          </span>
          &nbsp;&nbsp;&nbsp;claim 50% off&nbsp;&nbsp;&nbsp;
          <span style={{ color: "#F8CD8C" }}>
            on this Diwali. Use code DIWALI50 for booking property!
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#F8CD8C" }}>
            Get ready for the festival and
          </span>
          &nbsp;&nbsp;&nbsp;claim 50% off&nbsp;&nbsp;&nbsp;
          <span style={{ color: "#F8CD8C" }}>
            on this Diwali. Use code DIWALI50 for booking property!
          </span>
        </p>
      </marquee>
    </div>
  );
};

export default Header;
