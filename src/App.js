import React from "react";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const noExpandable = `nav-button.png`;
const expandable = `nav-button_right-arrow.png`;
const expanded = `nav-button_bottom-arrow.png`;

const MENU = [
  { name: "Home", children: [], status: noExpandable },
  { name: "Projects", children: ["project1", "project2"], status: expandable },
  { name: "Posts", children: ["post1", "post2", "post3"], status: expandable },
  {
    name: "Categories",
    children: ["category1", "category2"],
    status: expandable,
  },
  { name: "About", children: [], status: noExpandable },
];

function App() {
  const [loading, setLoading] = useState(true);
  //const [menu, setMenu] = useState([...MENU]);
  const [blogMap, setBlogData] = useState({});

  async function componentDidMount() {
    const blogData = await fetch(
      "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2"
    ).then((res) => res.json());
    setLoading(false);
    setBlogData(blogData);
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <div>
      <header className="header">Header</header>
      <div className="container">
        <nav className="menu">
          <ul className="menu__list">
            {MENU.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                children={[...item.children]}
              />
            ))}
          </ul>
        </nav>
        <div className="body">
          <NotionRenderer blockMap={blogMap} />
        </div>
      </div>
    </div>
  );
}

function Item({ name, children }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <li
        className="menu__item"
        onClick={(e) => {
          setShowItem(!showItem);
        }}
        style={{ backgroundImage: `url(${showItem ? expanded : expandable})` }}
      >
        <a>{name}</a>
      </li>
      {showItem && (
        <ul className="menu__sublist">
          {children.map((subItem) => {
            return (
              <li
                className="menu__subitem"
                style={{ backgroundImage: `url(${noExpandable})` }}
              >
                <a>{subItem}</a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

// function SubItem({ name }) {
//   return (
//     <li
//       className="menu__subitem"
//       style={{ backgroundImage: `url(${noExpandable})` }}
//     >
//       <a>{name}</a>
//     </li>
//   );
// }

export default App;
