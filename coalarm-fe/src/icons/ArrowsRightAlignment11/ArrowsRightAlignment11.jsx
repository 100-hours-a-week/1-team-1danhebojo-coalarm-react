/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowsRightAlignment11 = ({
  color = "#C6C6C6",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`arrows-right-alignment-11 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.69232 4.61523C3.4475 4.61523 3.21271 4.71249 3.0396 4.8856C2.86649 5.05871 2.76924 5.2935 2.76924 5.53831V18.4614C2.76924 18.7062 2.86649 18.941 3.0396 19.1141C3.21271 19.2872 3.4475 19.3845 3.69232 19.3845C3.93713 19.3845 4.17192 19.2872 4.34503 19.1141C4.51814 18.941 4.6154 18.7062 4.6154 18.4614V5.53831C4.6154 5.2935 4.51814 5.05871 4.34503 4.8856C4.17192 4.71249 3.93713 4.61523 3.69232 4.61523ZM21.1569 11.6491C21.113 11.5358 21.0471 11.4323 20.9631 11.3445L17.2708 7.65216C17.1847 7.56609 17.0825 7.49782 16.9701 7.45124C16.8576 7.40466 16.7371 7.38069 16.6154 7.38069C16.3696 7.38069 16.1338 7.47834 15.96 7.65216C15.7862 7.82598 15.6885 8.06173 15.6885 8.30754C15.6885 8.55336 15.7862 8.78911 15.96 8.96293L18.0831 11.0768H7.38463C7.13981 11.0768 6.90502 11.174 6.73191 11.3471C6.5588 11.5202 6.46155 11.755 6.46155 11.9998C6.46155 12.2447 6.5588 12.4795 6.73191 12.6526C6.90502 12.8257 7.13981 12.9229 7.38463 12.9229H18.0831L15.96 15.0368C15.8735 15.1226 15.8048 15.2247 15.758 15.3372C15.7111 15.4496 15.687 15.5703 15.687 15.6922C15.687 15.814 15.7111 15.9347 15.758 16.0472C15.8048 16.1596 15.8735 16.2617 15.96 16.3475C16.0458 16.4341 16.1479 16.5027 16.2604 16.5496C16.3729 16.5965 16.4935 16.6206 16.6154 16.6206C16.7373 16.6206 16.8579 16.5965 16.9704 16.5496C17.0829 16.5027 17.185 16.4341 17.2708 16.3475L20.9631 12.6552C21.0471 12.5674 21.113 12.4639 21.1569 12.3506C21.2493 12.1259 21.2493 11.8738 21.1569 11.6491Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

ArrowsRightAlignment11.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
