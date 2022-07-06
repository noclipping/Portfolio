import logo from "./logo.svg";
import cssScrollSnapPolyfill from "css-scroll-snap-polyfill";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
function App() {
  const init = function () {
    let items = document.querySelectorAll("section");
    cssScrollSnapPolyfill();
  };
  init();
  return (
    <div className="App">
      <Hero />
      <span></span>
      <div></div>
      <Projects />
    </div>
  );
}

export default App;
