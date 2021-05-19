import React from "react";
// import { NotionAPI } from "notion-client"; // https://www.npmjs.com/package/notion-client  // cause problems!with http2
// import { NotionRenderer } from "react-notion-x";
import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import { useParams } from "react-router";

export const About = () => {
  const { id } = useParams();
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
