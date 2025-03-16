/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Rsi = ({ property1, className }) => {
  return (
    <div className={`RSI ${className}`}>
      <div className="group-10">
        <div className="frame-13">
          <div className="text-wrapper-25">RSI</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon-5" />
      </div>

      <div className="frame-14">
        <div className={`div-5 property-1-3-${property1}`}>
          {property1 === "one" && <>과매도</>}

          {property1 === "variant-2" && <>중립</>}

          {property1 === "variant-3" && <>과매수</>}
        </div>
      </div>

      <div className="frame-14">
        <div className={`element-5 property-1-4-${property1}`}>
          {property1 === "one" && <>30.0</>}

          {property1 === "variant-2" && <>50.0</>}

          {property1 === "variant-3" && <>70.0</>}
        </div>
      </div>

      <img
        className="frame-15"
        alt="Frame"
        src={
          property1 === "variant-2"
            ? "/img/frame-36436-2.svg"
            : property1 === "variant-3"
              ? "/img/frame-36436-7.svg"
              : "/img/frame-36436-5.svg"
        }
      />
    </div>
  );
};

Rsi.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "one"]),
};
