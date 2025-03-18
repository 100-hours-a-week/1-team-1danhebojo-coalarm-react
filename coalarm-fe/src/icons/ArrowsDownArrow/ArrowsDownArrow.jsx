/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowsDownArrow = ({
  color = "black",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`arrows-down-arrow ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.5002 9.17019C17.3128 8.98394 17.0594 8.87939 16.7952 8.87939C16.531 8.87939 16.2776 8.98394 16.0902 9.17019L12.5002 12.7102L8.96019 9.17019C8.77283 8.98394 8.51938 8.87939 8.25519 8.87939C7.99101 8.87939 7.73756 8.98394 7.55019 9.17019C7.45646 9.26315 7.38207 9.37375 7.3313 9.49561C7.28053 9.61747 7.25439 9.74818 7.25439 9.88019C7.25439 10.0122 7.28053 10.1429 7.3313 10.2648C7.38207 10.3866 7.45646 10.4972 7.55019 10.5902L11.7902 14.8302C11.8832 14.9239 11.9938 14.9983 12.1156 15.0491C12.2375 15.0998 12.3682 15.126 12.5002 15.126C12.6322 15.126 12.7629 15.0998 12.8848 15.0491C13.0066 14.9983 13.1172 14.9239 13.2102 14.8302L17.5002 10.5902C17.5939 10.4972 17.6683 10.3866 17.7191 10.2648C17.7699 10.1429 17.796 10.0122 17.796 9.88019C17.796 9.74818 17.7699 9.61747 17.7191 9.49561C17.6683 9.37375 17.5939 9.26315 17.5002 9.17019Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

ArrowsDownArrow.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
