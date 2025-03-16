/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MainIcon } from "../MainIcon";
import { PropertyWrapper } from "../PropertyWrapper";
import "./style.css";

export const Component1606 = ({ className, frameClassName }) => {
  return (
    <div className={`component-1606 ${className}`}>
      <div className="group-2">
        <div className="frame-4">
          <div className="text-wrapper-3">실시간 채결 내역</div>
        </div>

        <MainIcon
          property1="info"
          propertyCloseClassName="main-icon-instance"
        />
      </div>

      <div className={`frame-5 ${frameClassName}`}>
        <PropertyWrapper
          className="component-1604-2"
          divClassName="component-1604-4"
          divClassNameOverride="component-1604-5"
          property1="two"
          rectangleClassName="component-1604-3"
        />
        <PropertyWrapper
          className="component-1604-2"
          divClassName="component-1604-4"
          divClassNameOverride="component-1604-5"
          property1="three"
          rectangleClassName="component-1604-6"
        />
        <PropertyWrapper
          className="component-1604-2"
          divClassName="component-1604-4"
          divClassNameOverride="component-1604-5"
          property1="three"
        />
        <PropertyWrapper
          className="component-1604-2"
          divClassName="component-1604-4"
          divClassNameOverride="component-1604-5"
          property1="two"
        />
        <PropertyWrapper
          className="component-1604-2"
          divClassName="component-1604-4"
          divClassNameOverride="component-1604-5"
          property1="three"
        />
      </div>
    </div>
  );
};
