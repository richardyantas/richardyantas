import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
  width: 20%;
  padding-left: 0px;
`;

const SidebarWrap = styled.div`
  margin: 0 0 0 0;
  height: auto;
  width: 100%;
  padding-left: 0px;
`;

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
