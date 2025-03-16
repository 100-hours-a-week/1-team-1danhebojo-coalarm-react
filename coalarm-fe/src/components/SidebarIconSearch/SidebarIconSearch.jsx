/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserInterfaceMagnifier } from "../../icons/UserInterfaceMagnifier";
import "./style.css";

export const SidebarIconSearch = ({
  className,
  icon = (
    <UserInterfaceMagnifier
      className="user-interface"
      color="#F8F8F8"
      opacity="0.972549"
    />
  ),
}) => {
  return <div className={`sidebar-icon-search ${className}`}>{icon}</div>;
};
