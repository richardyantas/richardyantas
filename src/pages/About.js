import React from "react";
// import { NotionAPI } from "notion-client"; // https://www.npmjs.com/package/notion-client  // cause problems!with http2
import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import { NotionRenderer } from "react-notion-x";

const urlPage =
  "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2";

export const About = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
  async function componentDidMount() {
    const recordMap = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(recordMap);
  }
  useEffect(() => {
    // localStorage.setItem("urlPage", urlPage);
    componentDidMount();
  }, [blogData]);

  return (
    <>
      <h1>About</h1>
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
    </>
  );
};

export const OurAim = () => {
  return (
    <div className="home">
      <h1>Aim</h1>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div className="home">
      <h1>GeeksforGeeks Vision</h1>
    </div>
  );
};
