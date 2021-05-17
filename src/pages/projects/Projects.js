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
  let { id } = useParams();
  console.log("notionid:", id);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
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
      <h1>Projects</h1>
      <NavProjectComp />
      {loading ? (
        <div class="spinner-box">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      ) : (
        // <pre>{JSON.stringify(blogData, null, 2)}</pre>
        <NotionRenderer blockMap={blogData} />
      )}
    </div>
  );
};

// export default Projects;
