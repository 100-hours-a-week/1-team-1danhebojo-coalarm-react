/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Noti } from "../../icons/Property1Noti";
import { UserInterfaceClose } from "../../icons/UserInterfaceClose";
import { UserInterfaceMagnifier } from "../../icons/UserInterfaceMagnifier";
import "./style.css";

export const MainIcon = ({ property1, propertyCloseClassName }) => {
  return (
    <>
      {["close", "down", "info", "search", "up"].includes(property1) && (
        <div className={`main-icon ${property1} ${propertyCloseClassName}`}>
          {property1 === "close" && (
            <UserInterfaceClose
              className="instance-node"
              color="#F8F8F8"
              opacity="0.972549"
            />
          )}

          {property1 === "search" && (
            <UserInterfaceMagnifier className="instance-node" color="#B7BFFF" />
          )}
        </div>
      )}

      {property1 === "noti" && (
        <Property1Noti
          className="property-noti"
          color="#F8F8F8"
          opacity="0.972549"
        />
      )}
    </>
  );
};

MainIcon.propTypes = {
  property1: PropTypes.oneOf(["up", "info", "close", "noti", "search", "down"]),
};
