import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  color: white;
  display: block;
  width: 150px;
  height: 30px;
  font-family: Gudea, sans-serif;
  padding: 1px;
  padding-left: 10px;
  margin-bottom: 1px;
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: 164px 31px;
  vertical-align: middle;
  background-image: ${({ subnav, item }) =>
    item.subNav.length > 0
      ? subnav
        ? item.iconOpened
        : item.iconClosed
      : item.icon};
  &:hover {
    color: hsl(225deg 33% 60%);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  height: 39px;
  line-height: 29px;
  margin-left: 16px;
`;

// color: hsl(0deg 0% 87%);
const DropdownLink = styled(Link)`
  color: white;
  display: block;
  width: 150px;
  height: 30px;
  font-family: Gudea, sans-serif;
  padding: 1px;
  padding-left: 10px;
  margin-left: 40px;
  margin-bottom: 1px;
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: 164px 31px;
  vertical-align: middle;
  background-image: ${({ item }) => item.icon};
  &:hover {
    color: hsl(225deg 33% 60%);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const location = useLocation();
  return (
    <>
      <SidebarLink
        item={item}
        subnav={subnav}
        to={item.subNav.length > 0 ? location.pathname : item.path}
        onClick={showSubnav}
      >
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink item={item} to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
