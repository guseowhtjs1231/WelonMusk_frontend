import React from "react";
import SidebarMenuItem from "../SidebarMenuItem";
import kor_flag from "../../img/korean_flag.svg";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <SidebarMenuItem>
          <span>법인 판매</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>TESLA 찾기</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>지원</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>뉴스레터 받기</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>새 소식</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>충전</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <span>탄소 영향</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <img src={kor_flag} alt="korean_flag" />
          <span>대한민국</span>
        </SidebarMenuItem>
      </ul>
    </div>
  );
};

export default Sidebar;
