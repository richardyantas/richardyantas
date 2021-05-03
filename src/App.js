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

let startPage =
  "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2";

function App() {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
  const [urlPage, setUrlPage] = useState(startPage);
  const [showItem, setShowItem] = useState(false);
  const [showSubItem, setShowSubItem] = useState(false);

  async function componentDidMount() {
    const blogDataFetched = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(blogDataFetched);
  }

  useEffect(() => {
    componentDidMount();
    console.log(":)", urlPage);
  }, [urlPage]);

  return (
    <div>
      <header className="header">
        <img src="text5416.png" className="logo" />
      </header>
      <div className="container">
        <nav className="menu">
          <ul className="menu__list">
            {MENU.map((item, id) => (
              <>
                <li
                  className="menu__item"
                  onClick={(e) => {
                    item.children.length == 0
                      ? setUrlPage(item.url)
                      : setShowItem(!showItem) && setUrlPage("0");
                  }}
                  style={{
                    backgroundImage: `url(${
                      item.children.length == 0
                        ? noExpandable
                        : showItem
                        ? expanded
                        : expandable
                    })`,
                  }}
                >
                  <a>{item.name}</a>
                </li>
                {showItem && (
                  <ul className="menu__sublist">
                    {item.children.map((subItem, id) => {
                      return (
                        <>
                          <li
                            className="menu__subitem"
                            onClick={() => {
                              subItem.children.length === 0
                                ? setUrlPage(subItem.url)
                                : setUrlPage("0") &&
                                  setShowSubItem(!showSubItem);
                            }}
                            style={{
                              backgroundImage: `url(${
                                subItem.children.length === 0
                                  ? noExpandable
                                  : showSubItem
                                  ? expanded
                                  : expandable
                              })`,
                            }}
                          >
                            <a>{subItem.name}</a>
                          </li>
                          {showSubItem && (
                            <ul className="menu__subsublist">
                              {subItem.children.map((child) => {
                                return (
                                  <li
                                    className="menu__subsubitem"
                                    onClick={() => {
                                      child.children.length === 0
                                        ? (urlPage = child.url)
                                        : (urlPage = "0");
                                    }}
                                    style={{
                                      backgroundImage: `url(${
                                        child.children.length === 0
                                          ? noExpandable
                                          : expandable
                                      })`,
                                    }}
                                  >
                                    <a>{child.name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </>
                      );
                    })}
                  </ul>
                )}
              </>
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
            <NotionRenderer blockMap={blogData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
