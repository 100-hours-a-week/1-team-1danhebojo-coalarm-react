/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, className }) => {
  return (
    <div className={`frame ${className}`}>
      <img
        className="img-2"
        alt="Img"
        src={
          property1 === "ALGO"
            ? "/img/image-112.png"
            : property1 === "STMX"
              ? "/img/image-113.png"
              : "/img/image.png"
        }
      />

      <div className="BTC">
        {property1 === "BTC" && <>BTC</>}

        {property1 === "ALGO" && <>ALGO</>}

        {property1 === "STMX" && <>STMX</>}
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["BTC", "ALGO", "STMX"]),
};
