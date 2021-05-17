import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { NavProject } from "./style.js";

export const NavProjectComp = () => {
  const [point, setPoint] = useState(1);
  return (
    <div className="contact">
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
