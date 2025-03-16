/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserInterfaceMagnifier } from "../../icons/UserInterfaceMagnifier";
import { PropertyWrapper } from "../PropertyWrapper";
import "./style.css";

export const Component1610 = ({ className }) => {
  return (
    <div className={`component-1610 ${className}`}>
      <div className="div-4">
        <div className="text-wrapper-13">코인명, 심볼 검색</div>

        <UserInterfaceMagnifier className="user-interface" color="#B7BFFF" />
      </div>

      <div className="text-wrapper-14">최근 검색한 코인</div>

      <PropertyWrapper
        className="component-1604-7"
        divClassName="component-1604-8"
        property1="one"
      />
    </div>
  );
};
