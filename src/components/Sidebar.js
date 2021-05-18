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
          <div className="books">
            <a
              href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618"
              target="_blank"
            >
              <img src="./deeplearning.jpg" className="book" alt="W3Schools" />
            </a>
            <a
              href="https://www.amazon.com/Python-Data-Science-Handbook-Essential/dp/1491912057"
              target="_blank"
            >
              <img src="./datascience.jpg" className="book" alt="W3Schools" />
            </a>
            <a
              href="https://www.amazon.com/-/es/Himanshu-Singh/dp/1484262212"
              target="_blank"
            >
              <img
                src="./machinelearning.jpg"
                className="book"
                alt="W3Schools"
              />
            </a>
          </div>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
