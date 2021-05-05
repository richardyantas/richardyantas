import React from "react";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { MENU, noExpandable, expandable, expanded } from "./data.js";

// add url with reactjs routes and (MENU)arrows images
// custom the icon on tab browser
// add content and add demos
// deploy on netlify or vercel or aws

// test the animation on codesandbox
// D3.js If anyone want to gain some knowledge please visit https://www.freecodecamp.org/learn
// WebGL to simulate 3D dynamic movement

let startPage =
  "https://notion-api.splitbee.io/v1/page/d53ab561c3bf4317b035ca9c08b60d7a";

function App() {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({});
  const [urlPage, setUrlPage] = useState(startPage);

  const pageSelection = (urlSelectedFromChildren) => {
    console.log("kp:", urlSelectedFromChildren);
    if (urlSelectedFromChildren != "0") {
      setUrlPage(urlSelectedFromChildren);
    }
  };

  async function componentDidMount() {
    console.log("calling... useEffect ");
    const blogDataFetched = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(blogDataFetched);
  }

  useEffect(() => {
    console.log("use effect calling .. ");
    componentDidMount();
  }, [urlPage]);

  const tmp = MENU.filter((item) => {
    return item.children.length == 0;
  }).map((item, id) => <Route exact path={item.path} component={Item} />);

  console.log(tmp);

  return (
    <Router>
      <div>
        <header className="header">
          <img src="text5416.png" className="logo" />
        </header>
        <div className="container">
          <nav className="menu">
            <ul className="menu__list">
              {MENU.map((item, id) => (
                <Item
                  id={id}
                  onClick={pageSelection}
                  path={item.path || "/"}
                  name={item.name}
                  url={item.url || "0"}
                  children={[...item.children]}
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
              <NotionRenderer blockMap={blogData} />
            </div>
          )}
        </div>
      </div>
      {/* <Switch>
        {MENU.filter((item) => {
          return item.children.length == 0;
        }).map((item, id) => (
          <Route exact path={item.path} component={item.name} />
        ))}
      </Switch> */}
    </Router>
  );
}

function Item(props) {
  const name = props.name || "naa";
  const children = props.children || [];
  const url = props.url;
  const path = props.path;
  console.log(props);
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <li
        key={props.id}
        className="menu__item"
        onClick={(e) => {
          children.length == 0
            ? props.onClick(url)
            : setShowItem(!showItem) && props.onClick("0");
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
        {/* <Link to={path} className="link">
          {name}
        </Link> */}
        <a>{name}</a>
      </li>
      {showItem && (
        <ul className="menu__sublist">
          {children.map((subItem, id) => {
            return (
              <SubItem
                key={id}
                onClick={props.onClick}
                name={subItem.name}
                path={subItem.path || "/"}
                url={subItem.url || "0"}
                children={[...subItem.children] || []}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

function SubItem(props) {
  const name = props.name;
  const url = props.url;
  const path = props.path;
  const children = props.children || [];
  const [showSubItem, setShowSubItem] = useState(false);

  console.log("props hehe: ", name, url, children);
  return (
    <>
      <li
        className="menu__subitem"
        onClick={() => {
          children.length === 0
            ? props.onClick(url)
            : setShowSubItem(!showSubItem) && props.onClick("0");
        }}
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
        {/* <Link to={path} className="link">          
          {name}
        </Link> */}
        <a>{name}</a>
      </li>
      {showSubItem && (
        <ul className="menu__subsublist">
          {children.map((child) => {
            return (
              <li
                className="menu__subsubitem"
                onClick={() => {
                  child.children.length === 0
                    ? props.onClick(child.url)
                    : props.onClick("0");
                }}
                style={{
                  backgroundImage: `url(${
                    child.children.length === 0 ? noExpandable : expandable
                  })`,
                }}
              >
                {/* <Link to={child.path || "/"} className="link">                 
                  {child.name}
                </Link> */}
                <a>{child.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
