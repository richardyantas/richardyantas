import "./App.css";
import Sidebar from "./components/Sidebar";
import "react-notion/src/styles.css";
// import "react-notion-x/src/styles.css";
// import "rc-dropdown/assets/index.css";
import "prismjs/themes/prism-tomorrow.css";
// import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About, OurAim, OurVision } from "./pages/About";
import { DataScience } from "./pages/DataScience";
import { MachineLearning } from "./pages/MachineLearning";
import { Algorithms } from "./pages/Algorithms";
import { Backend } from "./pages/Backend";
import { CloudComputing } from "./pages/CloudComputing";
import { Projects } from "./pages/projects/index";
import Contact from "./pages/ContactUs";

const Scope = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 180px;

  & #logo {
    width: 550px;
    height: 300px;
    margin-left: -200px;
    overflow: visible;
    z-index: 30;
  }

  & #cat {
    position: relative;
    top: -0px;
    left: 670px;
    width: 300px;
    height: 200px;
    z-index: -100;
  }
`;

const Body = styled.div`
  width: auto;
  display: flex;
  justify-content: row;
`;

const Content = styled.div`
  width: 80%;
`;

// issues related to styles on firefox and also images whow distortioned.
function App() {
  return (
    <Router>
      <Scope>
        <Header>
          <img id="logo" src="/logo2.png" />
          {/* <img id="cat" src="/cat.gif" /> */}
        </Header>
        <Body>
          <Sidebar />
          <Content>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Redirect to="/about/d53ab561c3bf4317b035ca9c08b60d7a" />
                  );
                }}
              />
              <Route path="/about/:id" exact component={About} />
              <Route
                path="/projects/:subtitle/:id"
                exact
                component={Projects}
              />
              <Route
                path="/data-science/:subtitle/:id"
                exact
                component={DataScience}
              />
              <Route
                path="/machine-learning/:subtitle/:id"
                exact
                component={MachineLearning}
              />
              <Route path="/backend/:subtitle/:id" exact component={Backend} />
              <Route
                path="/cloud-computing/:subtitle/:id"
                exact
                component={CloudComputing}
              />
              <Route path="/algorithms/:id" exact component={Algorithms} />
              <Route path="/contact" exact component={Contact} />
              {/* we can keep this foemat https://www.notion.so/fastAPI-503b2424eb3943668f01e05ab44d013c */}
            </Switch>
          </Content>
        </Body>
      </Scope>
    </Router>
  );
}

export default App;
