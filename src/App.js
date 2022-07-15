import logo from "./logo.svg";
import cssScrollSnapPolyfill from "css-scroll-snap-polyfill";
import "./App.css";

import { BsGithub } from "react-icons/bs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
  const init = function () {
    let items = document.querySelectorAll("section");
    cssScrollSnapPolyfill();
  };
  init();
  return (
    <div className="App">
      <Hero />

      <div className="gitLogo">
        <a href="https://github.com/noclipping" target="_blank">
          <BsGithub />
        </a>
      </div>
      <span></span>
      <div></div>

      <Projects />
      <About />
    </div>
  );
}

export default App;
