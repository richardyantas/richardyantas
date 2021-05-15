import "./App.css";
import Sidebar from "./components/Sidebar";
import "react-notion/src/styles.css";
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
} from "./pages/Projects";
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
              <Route path="/about-us/aim" exact component={OurAim} />
              <Route path="/about-us/vision" exact component={OurVision} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/projects/projects1" exact component={ProjectsOne} />
              <Route path="/projects/projects2" exact component={ProjectsTwo} />
              <Route
                path="/projects/projects3"
                exact
                component={ProjectsThree}
              />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </Content>
        </Body>
      </Scope>
    </Router>
  );
}

export default App;
