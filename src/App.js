import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  Projects,
  ProjectsOne,
  ProjectsTwo,
  ProjectsThree,
} from "./pages/Projects";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/projects1" exact component={ProjectsOne} />
        <Route path="/projects/projects2" exact component={ProjectsTwo} />
        <Route path="/projects/projects3" exact component={ProjectsThree} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
