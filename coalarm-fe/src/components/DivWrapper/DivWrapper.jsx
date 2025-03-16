/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MainIcon } from "../MainIcon";
import { PropertyWrapper } from "../PropertyWrapper";
import "./style.css";

export const DivWrapper = ({ className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="group">
        <div className="frame-2">
          <div className="text-wrapper-2">실시간 고래 채결 내역</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon" />
      </div>

      <div className="frame-3">
        <PropertyWrapper
          className="component-1604"
          divClassName="component-1604-instance"
          divClassNameOverride="design-component-instance-node"
          property1="two"
        />
        <PropertyWrapper
          className="component-1604"
          divClassName="component-1604-instance"
          divClassNameOverride="design-component-instance-node"
          property1="three"
        />
        <PropertyWrapper
          className="component-1604"
          divClassName="component-1604-instance"
          divClassNameOverride="design-component-instance-node"
          property1="three"
        />
        <PropertyWrapper
          className="component-1604"
          divClassName="component-1604-instance"
          divClassNameOverride="design-component-instance-node"
          property1="two"
        />
        <PropertyWrapper
          className="component-1604"
          divClassName="component-1604-instance"
          divClassNameOverride="design-component-instance-node"
          property1="three"
        />
      </div>
    </div>
  );
};
