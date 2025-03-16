/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Component1614 = ({ property1, className }) => {
  return (
    <div className={`component-1614 ${className}`}>
      <div className="group-11">
        <div className="frame-16">
          <div className="text-wrapper-26">공포/탐욕 지수</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon-6" />
      </div>

      <div className="frame-17">
        <div className={`div-6 property-1-5-${property1}`}>
          {property1 === "one" && <>매우 공포</>}

          {property1 === "variant-2" && <>공포</>}

          {property1 === "variant-3" && <>중립</>}

          {property1 === "variant-4" && <>탐욕</>}

          {property1 === "variant-5" && <>매우 탐욕</>}
        </div>
      </div>

      <div className="frame-17">
        <div className={`element-6 property-1-6-${property1}`}>
          {property1 === "one" && <>10.0</>}

          {property1 === "variant-2" && <>30.0</>}

          {property1 === "variant-3" && <>55.0</>}

          {property1 === "variant-4" && <>70.0</>}

          {property1 === "variant-5" && <>90.0</>}
        </div>
      </div>

      <img
        className="frame-18"
        alt="Frame"
        src={
          property1 === "variant-2"
            ? "/img/frame-36436-1.svg"
            : property1 === "variant-3"
              ? "/img/frame-36436-2.svg"
              : property1 === "variant-4"
                ? "/img/frame-36436-3.svg"
                : property1 === "variant-5"
                  ? "/img/frame-36436-4.svg"
                  : "/img/frame-36436.svg"
        }
      />
    </div>
  );
};

Component1614.propTypes = {
  property1: PropTypes.oneOf([
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
    "one",
  ]),
};
