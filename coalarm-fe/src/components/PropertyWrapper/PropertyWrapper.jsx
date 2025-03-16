/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyWrapper = ({
  property1,
  className,
  divClassName,
  divClassNameOverride,
  rectangleClassName,
}) => {
  return (
    <div className={`property-wrapper ${property1} ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />

      <div className={`element ${divClassName}`}>
        {property1 === "one" && <>145,286,000</>}

        {["three", "two"].includes(property1) && <>87억 8394만 3836원</>}
      </div>

      <div className={`div ${divClassNameOverride}`}>
        {property1 === "one" && <>비트코인</>}

        {["three", "two"].includes(property1) && <>3초 전</>}
      </div>

      <div className="BTC-KRW">
        {property1 === "one" && <>BTC/KRW</>}

        {["three", "two"].includes(property1) && (
          <>
            <img className="img" alt="Img" src="/img/image.png" />

            <div className="text-wrapper">BTC</div>
          </>
        )}
      </div>
    </div>
  );
};

PropertyWrapper.propTypes = {
  property1: PropTypes.oneOf(["two", "three", "one"]),
};
