import PropTypes from "prop-types";
import React from "react";
import { ArrowsUpperArrow12 } from "../../icons/ArrowsUpperArrow12";
import { ArrowsUpperArrow23 } from "../../icons/ArrowsUpperArrow23";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1 }) => {
  return (
    <div className={`property-default-wrapper ${property1}`}>
      <div className="text-wrapper">코인</div>

      {["click", "default", "hover"].includes(property1) && (
        <ArrowsUpperArrow12 className="arrows-upper-arrow" />
      )}

      {property1 === "list-close" && (
        <ArrowsUpperArrow23
          className="arrows-upper-arrow"
          color="#F8F8F8"
          opacity="0.972549"
        />
      )}
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["click", "hover", "list-close", "default"]),
};
