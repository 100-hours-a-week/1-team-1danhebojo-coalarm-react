/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Noti = ({
  color = "#F8F8F8",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`property-1-noti ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 17C11.4 17 11 16.6 11 16C11 15.4 11.4 15 12 15C12.6 15 13 15.4 13 16C13 16.6 12.6 17 12 17ZM13 12C13 12.6 12.6 13 12 13C11.4 13 11 12.6 11 12V8C11 7.4 11.4 7 12 7C12.6 7 13 7.4 13 8V12Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Property1Noti.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
