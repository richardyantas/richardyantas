import "./App.css";
import Sidebar from "./components/Sidebar";
import "react-notion/src/styles.css";
// import "react-notion-x/src/styles.css";
// import "rc-dropdown/assets/index.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  Projects,
  ProjectsOne,
  ProjectsTwo,
  ProjectsThree,
} from "./pages/projects/index";
import Contact from "./pages/ContactUs";

const Scope = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 180px;
  overflow: visible;
  & > img {
    margin-left: -200px;
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
          <img src="/logo2.png" />
        </Header>
        <Body>
          <Sidebar />
          <Content>
            <Switch>
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/projects/:id" exact component={Projects} />
              {/* <Route path="/projects/1" exact component={ProjectsOne} />
              <Route path="/projects/2" exact component={ProjectsTwo} />
              <Route path="/projects/3" exact component={ProjectsThree} /> */}
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </Content>
        </Body>
      </Scope>
    </Router>
  );
}

export default App;
