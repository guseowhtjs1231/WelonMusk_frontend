import React from "react";
import SidebarMenuItem from "../SidebarMenuItem";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <SidebarMenuItem text="법인 판매" />
        <SidebarMenuItem text="TESLA 찾기" />
        <SidebarMenuItem text="지원" />
        <SidebarMenuItem text="뉴스레터 받기" />
        <SidebarMenuItem text="새 소식" />
        <SidebarMenuItem text="충전" />
        <SidebarMenuItem text="탄소 영향" />
        <SidebarMenuItem text="대한민국" />
      </ul>
    </div>
  );
};

export default Sidebar;
