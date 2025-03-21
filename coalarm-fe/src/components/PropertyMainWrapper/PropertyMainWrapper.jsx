/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyMainWrapper = ({
  property1,
  className,
  text = "TEXT",
}) => {
  return (
    <button
      className={`property-main-wrapper property-1-0-${property1} ${className}`}
    >
      <div className="text-wrapper">{text}</div>
    </button>
  );
};

PropertyMainWrapper.propTypes = {
  property1: PropTypes.oneOf(["main", "sub"]),
  text: PropTypes.string,
};
