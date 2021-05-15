import React from "react";
import { useState, useEffect } from "react";
// import { NotionRenderer } from "react-notion";
import { NotionRenderer } from "react-notion-x";

const urlPage =
  "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2";

export const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
  async function componentDidMount() {
    const blogDataFetched = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(blogDataFetched);
  }
  useEffect(() => {
    // localStorage.setItem("urlPage", urlPage);
    componentDidMount();
  }, [urlPage]);

  return (
    <>
      <h1>GeeksforGeeks About us</h1>
      {loading ? <h1>Loading...</h1> : <NotionRenderer blockMap={blogData} />}
    </>
  );
};

export const OurAim = () => {
  return (
    <div className="home">
      <h1>GeeksforGeeks Aim</h1>
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
