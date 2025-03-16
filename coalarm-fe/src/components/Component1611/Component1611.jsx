/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Component1611 = ({ className, frameClassName }) => {
  return (
    <div className={`component-1611 ${className}`}>
      <div className="group-3">
        <div className="frame-8">
          <div className="text-wrapper-15">공매수/공매도</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon-3" />
      </div>

      <div className="frame-9">
        <div className="frame-10">
          <div className="text-wrapper-16">LONG 62.76%</div>
        </div>

        <div className={`frame-11 ${frameClassName}`}>
          <div className="text-wrapper-17">SHORT 37.24%</div>
        </div>
      </div>
    </div>
  );
};
