/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowsRightAlignment13 } from "../../icons/ArrowsRightAlignment13";
import { ArrowsRightAlignment15 } from "../../icons/ArrowsRightAlignment15";
import { ArrowsUpperArrow11 } from "../../icons/ArrowsUpperArrow11";
import { ContentJustifyAlignment1 } from "../../icons/ContentJustifyAlignment1";
import { UsersUsers } from "../../icons/UsersUsers";
import "./style.css";

export const SidebarIcon = ({
  property1,
  propertyDashClassName,
  arrowsRightAlignment15Color = "#F8F8F8",
  arrowsRightAlignment13Color = "#F8F8F8",
}) => {
  return (
    <>
      {(property1 === "alarm" ||
        property1 === "dash" ||
        property1 === "down" ||
        property1 === "guide" ||
        property1 === "login" ||
        property1 === "logout" ||
        property1 === "notice" ||
        property1 === "profile" ||
        property1 === "slack" ||
        property1 === "workspace") && (
        <div
          className={`sidebar-icon property-1-${property1} ${propertyDashClassName}`}
        >
          {property1 === "workspace" && <UsersUsers className="users-users" />}

          {property1 === "login" && (
            <ArrowsRightAlignment13
              className="instance-node"
              color={arrowsRightAlignment13Color}
              opacity="0.972549"
            />
          )}

          {property1 === "logout" && (
            <ArrowsRightAlignment15
              className="instance-node"
              color={arrowsRightAlignment15Color}
              opacity="0.972549"
            />
          )}

          {property1 === "down" && (
            <ArrowsUpperArrow11 className="instance-node" />
          )}
        </div>
      )}

      {property1 === "menu" && (
        <ContentJustifyAlignment1
          className="property-menu"
          color="#F8F8F8"
          opacity="0.972549"
        />
      )}
    </>
  );
};

SidebarIcon.propTypes = {
  property1: PropTypes.oneOf([
    "slack",
    "login",
    "alarm",
    "guide",
    "logout",
    "profile",
    "notice",
    "menu",
    "dash",
    "workspace",
    "down",
  ]),
  arrowsRightAlignment15Color: PropTypes.string,
  arrowsRightAlignment13Color: PropTypes.string,
};
