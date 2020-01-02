import React from "react";
import "./index.scss";

const SidebarMenuItem = props => {
  return <li className="sidebar-menuitem">{props.children}</li>;
};

export default SidebarMenuItem;
