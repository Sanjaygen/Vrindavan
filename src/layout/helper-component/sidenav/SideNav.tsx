"use client";

import SideDashBoard from "@/page-components/side-dashboard/SideDashBoard";
import {

  ContentDiv,
  DashButton,
  DashIcon,
  SideMenuWrapper,
  SubHead,
} from "./SideNav.styled";
import { AiFillDashboard } from "react-icons/ai";

interface SideNavProps {
  toggleDrawer: () => void;
}

const SideNav = ({ toggleDrawer }: SideNavProps) => {
  return (
    <SideMenuWrapper>
      <ContentDiv>
        <SubHead><span><img src="images/Vrindavan-img.png"/></span> Vrindavan Farm</SubHead>
      </ContentDiv>
        {/* <Button onClick={toggleDrawer}>+ Create Menu</Button> */}
        <DashButton href="/#">
          <DashIcon className="dash-menu-icon" /> DASHBOARD
        </DashButton>
      <SideDashBoard />
    </SideMenuWrapper>
  );
};

export default SideNav;
