import React from "react";
import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import { useParams } from "react-router";

export const Algorithms = () => {
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
      <h1>Algorithms</h1>
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
