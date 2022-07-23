import React from "react";

import "../AnimatedBG.css";
import matbg from "../images/matbg.mp4";
function handleClick(e) {
  var element = document.getElementById("projects");
  element.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="bg">
      <div className="matbg">
        <video loop muted autoPlay>
          <source src={`${matbg}`} type="video/mp4"></source>
        </video>
      </div>
      <div className="container">
        <div className="height">
          <span className="text">
            Devon Selvaggi
            <br />
            <br />
            <br />
            <div id="arrow" onClick={handleClick}></div>
          </span>
        </div>
      </div>
    </section>
  );
}
