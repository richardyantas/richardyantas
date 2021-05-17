import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const NavProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;

  & .project__icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60px;
    height: 100%;
    padding: 0px auto;
  }

  & #project__description {
    color: white;
    background: hsl(225deg 33% 25%);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }

  & #project__demo {
    color: hsl(225deg 33% 60%);
    background: hsl(0deg 0% 87%);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
`;

export const ProjectsOne = () => {
  const [point, setPoint] = useState(1);
  return (
    <div className="contact">
      <h1>Projects 1</h1>
      <NavProject>
        <div id="project__description">Description</div>
        <div className="project__icons">
          <div
            onClick={(e) => {
              setPoint(1);
              document.getElementById("project__demo").style.background =
                "hsl(0deg 0% 87%)";
              document.getElementById("project__demo").style.color =
                "hsl(225deg 33% 60%)";
              document.getElementById("project__description").style.background =
                "hsl(225deg 33% 25%)";
              document.getElementById("project__description").style.color =
                "white";
            }}
          >
            {point ? (
              <>
                <IoIcons.IoIosArrowDropleftCircle
                  fontSize="1.5em"
                  onMouseOver={({ target }) => (
                    (target.style.opacity = 0.5),
                    (target.style.cursor = "pointer")
                  )}
                  onMouseOut={({ target }) => (target.style.opacity = 1.0)}
                />
              </>
            ) : (
              <>
                <IoIcons.IoIosArrowDropleft
                  fontSize="1.5em"
                  onMouseOver={({ target }) => (
                    (target.style.opacity = 0.5),
                    (target.style.cursor = "pointer")
                  )}
                  onMouseOut={({ target }) => (target.style.opacity = 1.0)}
                />
              </>
            )}
          </div>
          <div
            onClick={(e) => {
              setPoint(0);
              document.getElementById("project__description").style.background =
                "hsl(0deg 0% 87%)";
              document.getElementById("project__description").style.color =
                "hsl(225deg 33% 60%)";
              document.getElementById("project__demo").style.background =
                "hsl(225deg 33% 25%)";
              document.getElementById("project__demo").style.color = "white";
            }}
          >
            {point ? (
              <>
                <IoIcons.IoIosArrowDropright
                  fontSize="1.5em"
                  onMouseOver={({ target }) => (
                    (target.style.opacity = 0.5),
                    (target.style.cursor = "pointer")
                  )}
                  onMouseOut={({ target }) => (target.style.opacity = 1.0)}
                />
              </>
            ) : (
              <>
                <IoIcons.IoIosArrowDroprightCircle
                  fontSize="1.5em"
                  onMouseOver={({ target }) => (
                    (target.style.opacity = 0.5),
                    (target.style.cursor = "pointer")
                  )}
                  onMouseOut={({ target }) => (target.style.opacity = 1.0)}
                />
              </>
            )}
          </div>
        </div>
        <div id="project__demo">Demo</div>
      </NavProject>
    </div>
  );
};
