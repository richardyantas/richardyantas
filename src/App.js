import React from "react";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { MENU, noExpandable, expandable, expanded } from "./data.js";

// add url with reactjs routes and (MENU)arrows images
// custom the icon on tab browser
// add content and add demos
// deploy on netlify or vercel or aws

let urlPage =
  "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2";

function App() {
  const [loading, setLoading] = useState(true);
  const [blogMap, setBlogData] = useState({});

  async function componentDidMount() {
    const blogData = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(blogData);
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div>
      <header className="header">
        <img src="text5416.png" className="logo" />
      </header>
      <div className="container">
        <nav className="menu">
          <ul className="menu__list">
            {MENU.map((item, id) => (
              // item.url ? (
              <Item
                id={id}
                // // id={idx}
                name={item.name}
                url={item.url || "0"}
                children={[...item.children]}
                // key={item.toString()}
              />
            ))}
          </ul>

          <a href="github.png" download>
            <a>Book</a>
            {/* <img src="github.png" alt="W3Schools" width="104" height="142" /> */}
            <img src="github.png" alt="W3Schools" />
          </a>
        </nav>

        {loading ? (
          <section className="section loading">
            <h1>Loading...</h1>
          </section>
        ) : (
          <div className="body">
            <NotionRenderer blockMap={blogMap} />
          </div>
        )}
      </div>
    </div>
  );
}

// function Item({ name, children, url }) {
function Item(props) {
  const name = props.name || "naa";
  const children = props.children || [];
  const url = props.url;
  const [showItem, setShowItem] = useState(false);
  const [showSubItem, setShowSubItem] = useState(false);
  return (
    <>
      <li
        key={props.id}
        className="menu__item"
        onClick={(e) => {
          children.length == 0
            ? (urlPage = url)
            : (urlPage = "0") && setShowItem(!showItem);
          console.log("urlPage:", urlPage, "url: ", url);
        }}
        style={{
          backgroundImage: `url(${
            children.length == 0
              ? noExpandable
              : showItem
              ? expanded
              : expandable
          })`,
        }}
      >
        <a>{name}</a>
      </li>
      {showItem && (
        <ul className="menu__sublist">
          {children.map((subItem, id) => {
            return (
              <SubItem
                key={id}
                name={subItem.name}
                url={subItem.url || "0"}
                children={[...subItem.children] || []}
              />
            );
            console.log(
              "props1: ",
              subItem.name,
              subItem.url,
              subItem.children
            );
            // return (
            //   <li
            //     className="menu__subitem"
            //     onClick={() => {
            //       subItem.children.length === 0
            //         ? (urlPage = subItem.url)
            //         : (urlPage = "0") && setShowSubItem(!showSubItem);
            //     }}
            //     // style={{ backgroundImage: `url(${noExpandable})` }}
            //     style={{
            //       backgroundImage: `url(${
            //         subItem.children.length === 0
            //           ? noExpandable
            //           : showSubItem
            //           ? expanded
            //           : expandable
            //       })`,
            //     }}
            //   >
            //     <a>{subItem.name}</a>
            //   </li>
            // );

            // console.log("props: ", subItem.name, subItem.url, subItem.children);
            // return (
            //   <li className="menu__subitem">
            //     <a>{subItem.name}</a>
            //   </li>
            // );
          })}
        </ul>
      )}
    </>
  );
}

function SubItem(props) {
  const name = props.name;
  const url = props.url;
  const children = props.children || [];
  const [showSubItem, setShowSubItem] = useState(false);
  console.log("props hehe: ", name, url, children);
  return (
    <>
      <li
        className="menu__subitem"
        onClick={() => {
          children.length === 0
            ? (urlPage = url)
            : (urlPage = "0") && setShowSubItem(!showSubItem);

          console.log("urlPage:", urlPage, "url: ", url);
        }}
        // style={{ backgroundImage: `url(${noExpandable})` }}
        style={{
          backgroundImage: `url(${
            children.length === 0
              ? noExpandable
              : showSubItem
              ? expanded
              : expandable
          })`,
        }}
      >
        <a>{name}</a>
      </li>
    </>
  );
}

export default App;
