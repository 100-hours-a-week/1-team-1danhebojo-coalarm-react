/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Macd = ({ className }) => {
  return (
    <div className={`MACD ${className}`}>
      <div className="group-4">
        <div className="frame-12">
          <div className="text-wrapper-18">MACD</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon-4" />
      </div>

      <div className="group-5">
        <div className="group-6">
          <div className="text-wrapper-19">MACD :</div>

          <div className="text-wrapper-20">-987.29</div>
        </div>

        <div className="group-7">
          <div className="text-wrapper-20">-497.20</div>

          <div className="text-wrapper-21">Signal :</div>
        </div>

        <div className="group-8">
          <div className="text-wrapper-22">-489.39</div>

          <div className="text-wrapper-23">Histogram :</div>
        </div>

        <div className="group-9">
          <div className="text-wrapper-22">-489.39</div>

          <div className="text-wrapper-24">추세 :</div>
        </div>
      </div>
    </div>
  );
};
