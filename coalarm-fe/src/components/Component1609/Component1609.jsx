/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Component1607 } from "../Component1607";
import { Frame } from "../Frame";
import { MainIcon } from "../MainIcon";
import "./style.css";

export const Component1609 = ({
  className,
  component1607MainIconPropertyCloseClassName,
}) => {
  return (
    <div className={`component-1609 ${className}`}>
      <div className="div-2">
        <div className="frame-7">
          <div className="text-wrapper-8">김치 프리미엄</div>
        </div>

        <MainIcon property1="info" propertyCloseClassName="main-icon-2" />
      </div>

      <div className="div-3">
        <Component1607
          className="component-1607-instance"
          mainIconPropertyCloseClassName={
            component1607MainIconPropertyCloseClassName
          }
          property1="one"
        />
        <div className="element-2">
          <Frame className="frame-36448" property1="BTC" />
          <div className="KRW">
            <div className="text-wrapper-9">128,448,000.00</div>

            <div className="text-wrapper-10">KRW</div>
          </div>

          <div className="USDT">
            <div className="text-wrapper-9">86,068.02</div>

            <div className="text-wrapper-10">USDT</div>
          </div>

          <div className="text-wrapper-11">2.04%</div>
        </div>

        <div className="element-3">
          <Frame className="frame-36448" property1="ALGO" />
          <div className="KRW">
            <div className="text-wrapper-9">372.00</div>

            <div className="text-wrapper-10">KRW</div>
          </div>

          <div className="USDT">
            <div className="text-wrapper-9">0.25</div>

            <div className="text-wrapper-10">USDT</div>
          </div>

          <div className="text-wrapper-11">2.12%</div>
        </div>

        <div className="element-4">
          <Frame className="frame-36448" property1="STMX" />
          <div className="KRW">
            <div className="text-wrapper-9">5.92</div>

            <div className="text-wrapper-10">KRW</div>
          </div>

          <div className="USDT">
            <div className="text-wrapper-9">0.00</div>

            <div className="text-wrapper-10">USDT</div>
          </div>

          <div className="text-wrapper-12">-11.27%</div>
        </div>
      </div>
    </div>
  );
};
