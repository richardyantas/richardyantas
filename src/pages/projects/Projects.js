import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useParams } from "react-router";
import { SidebarData } from "../../components/SidebarData";
import { NavProjectComp } from "./Template";

export const Projects = () => {
  let { notion_id } = useParams();
  return (
    <div className="contact">
      <h1>GeeksforGeeks Projects</h1>
      <NavProjectComp />
      <div>{}</div>
    </div>
  );
};

// export default Projects;
