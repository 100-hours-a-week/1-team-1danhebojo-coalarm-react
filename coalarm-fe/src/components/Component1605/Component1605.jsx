
import PropTypes from "prop-types";
import React from "react";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper/PropertyDefaultWrapper";
import { PropertyUnactiveWrapper } from "../PropertyUnactiveWrapper/PropertyUnactiveWrapper";
import "./style.css";

export const Component1605 = ({ property1, className }) => {
  return (
    <div className={`component-1605 ${property1} ${className}`}>
      <div className="frame">
        <PropertyDefaultWrapper
          property1={
            property1 === "list"
              ? "list-close"
              : ["hover-active", "hover-unactive"].includes(property1)
                ? "hover"
                : ["click-active", "click-unactive"].includes(property1)
                  ? "click"
                  : "default"
          }
        />
        <div className="div">
          <div className="text-wrapper-2">활성된 알람만 보기</div>

          <PropertyUnactiveWrapper
            className="component-1604"
            property1={
              ["click-unactive", "default-unactive", "hover-unactive"].includes(
                property1,
              )
                ? "unactive"
                : "active"
            }
          />
        </div>
      </div>

      {property1 === "list" && (
        <>
          <img className="vector" alt="Vector" src="/img/vector-64.svg" />

          <div className="chip">
            <div className="text-wrapper-3">비트코인 BTC</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-3">비트코인 BTC</div>
          </div>
        </>
      )}
    </div>
  );
};

Component1605.propTypes = {
  property1: PropTypes.oneOf([
    "click-active",
    "click-unactive",
    "hover-active",
    "hover-unactive",
    "default-unactive",
    "list",
    "default-active",
  ]),
};
