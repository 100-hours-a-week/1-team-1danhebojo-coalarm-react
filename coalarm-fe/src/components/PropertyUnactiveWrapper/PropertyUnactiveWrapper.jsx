import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyUnactiveWrapper = ({ property1, className }) => {
  return (
    <div className={`property-unactive-wrapper ${property1} ${className}`}>
      <div className="rectangle" />
    </div>
  );
};

PropertyUnactiveWrapper.propTypes = {
  property1: PropTypes.oneOf([
    "mini-unactive",
    "mini-active",
    "unactive",
    "active",
  ]),
};
