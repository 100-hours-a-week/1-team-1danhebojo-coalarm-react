import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Btn = ({ property1, className, text = "TEXT", onClick }) => {
  return (
    <button className={`btn ${property1} ${className}`} onClick={onClick}>
      <div className="TEXT">{text}</div>
    </button>
  );
};

Btn.propTypes = {
  property1: PropTypes.oneOf(["main", "sub"]),
  text: PropTypes.string,
  onClick: PropTypes.func, // onClick 프롭 추가
};
