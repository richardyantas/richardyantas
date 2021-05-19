import React, { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useParams } from "react-router";
import { SidebarData } from "../../components/SidebarData";
import { NavProjectComp } from "./Template";

export const Projects = () => {
  let { subtitle, id } = useParams();
  console.log("notionid:", id);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
  const [optProject, setOptProject] = useState(false);

  const demoOrDescription = (optSelected) => {
    setOptProject(optSelected);
  };

  async function componentDidMount() {
    const recordMap = await fetch(
      `https://notion-api.splitbee.io/v1/page/${id}`
    ).then((res) => res.json());
    setLoading(false);
    setBlogData(recordMap);
  }
  useEffect(() => {
    componentDidMount();
  }, [id]);
  return (
    <div className="contact">
      <h1>{subtitle}</h1>
      <NavProjectComp onClick={demoOrDescription} />
      <h4>
        "dropdown menu which include demo and submenu topics and also a theme
        option above"
      </h4>
      {loading ? (
        <div class="spinner-box">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      ) : // <pre>{JSON.stringify(blogData, null, 2)}</pre>
      optProject ? (
        <a>This is a Demo</a>
      ) : (
        <NotionRenderer blockMap={blogData} />
      )}
    </div>
  );
};

// export default Projects;
