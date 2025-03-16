/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Component1607 = ({
  property1,
  className,
  mainIconPropertyCloseClassName,
}) => {
  return (
    <div className={`component-1607 ${className}`}>
      <div className="text-wrapper-4">코인명</div>

      <div className="text-wrapper-5">국내 가격(KRW)</div>

      <div className="text-wrapper-6">해외 가격(USDT)</div>

      <div className="frame-6">
        <div className="text-wrapper-7">김치 프리미엄</div>

        <MainIcon
          property1={property1 === "two" ? "down" : "up"}
          propertyCloseClassName={mainIconPropertyCloseClassName}
        />
      </div>
    </div>
  );
};

Component1607.propTypes = {
  property1: PropTypes.oneOf(["two", "one"]),
};
