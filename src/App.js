import { React} from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Hobbies from "./components/Hobbies/Hobbies";
import * as textConst from './const/text';
import * as urlConst from './const/url';

export default function App() {
  let location = useLocation();

  return (
    <div id="app" class="justify-content-center align-items-center container-lg">
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={0}>
          <Switch location={location}>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/hobbies" component={Hobbies} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <div id="footer">
        <a href={urlConst.SOURCE_CODE_URL} target="_blank" id="github_source">
          <i class="fa-brands fa-github fa-xl" id="github_icon"></i>
          {textConst.SOURCE_CODE}
        </a>
        <p id="footnote">© {getCurrentYear()} {textConst.FOOTNOTE}</p>
      </div>
    </div>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}
