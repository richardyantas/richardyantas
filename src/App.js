import React from "react";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { MENU, noExpandable, expandable, expanded } from "./data.js";

// add content and add demos
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
    setUrlPage(urlSelectedFromChildren);
  };

  async function componentDidMount() {
    const blogDataFetched = await fetch(urlPage).then((res) => res.json());
    setLoading(false);
    setBlogData(blogDataFetched);
  }

  useEffect(() => {
    componentDidMount();
  }, [urlPage]);

  // const tmp = MENU.filter((item) => {
  //   return item.children.length == 0;
  // }).map((item, id) => <Route exact path={item.path} component={Item} />);

  // console.log(tmp);

  return (
    <Router>
      <div>
        <header className="header">
          <img src="logo2.png" className="logo" />
        </header>
        <div className="container">
          <nav className="menu">
            <ul className="menu__list">
              <img
                src="nav-button_bottom-arrow.png"
                style={{ display: `none` }}
              />
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

            {/* <a href="github.png" download>
              <a>Book</a>
              <img src="github.png" alt="W3Schools" width="104" height="142" />
            </a> */}
            <div className="books">
              <a
                href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618"
                target="_blank"
              >
                <img src="deeplearning.jpg" className="book" alt="W3Schools" />
              </a>
              <a
                href="https://www.amazon.com/Python-Data-Science-Handbook-Essential/dp/1491912057"
                target="_blank"
              >
                <img src="datascience.jpg" className="book" alt="W3Schools" />
              </a>

              <a
                href="https://www.amazon.com/-/es/Himanshu-Singh/dp/1484262212"
                target="_blank"
              >
                <img
                  src="machinelearning.jpg"
                  className="book"
                  alt="W3Schools"
                />
              </a>
            </div>
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
      {/* <li className="flicker"></li> */}
      <li
        style={{
          backgroundImage: ` url(${
            children.length === 0
              ? noExpandable
              : showItem
              ? expanded
              : expandable
          })`,
        }}
        key={props.id}
        className="menu__item"
        onClick={(e) => {
          children.length === 0 ? props.onClick(url) : setShowItem(!showItem);
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
