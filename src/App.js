import "./App.css";
import Sidebar from "./components/Sidebar";
import "react-notion/src/styles.css";
// import "react-notion-x/src/styles.css";
// import "rc-dropdown/assets/index.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About, OurAim, OurVision } from "./pages/About";
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
function App() {
  return (
    <Router>
      <Scope>
        <Header>
          <img id="logo" src="/logo2.png" />
          <img id="cat" src="/cat.gif" />
        </Header>
        <Body>
          <Sidebar />
          <Content>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/about" />;
                }}
              />
              <Route path="/about" exact component={About} />
              <Route path="/projects/:id" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </Content>
        </Body>
      </Scope>
    </Router>
  );
}

export default App;
