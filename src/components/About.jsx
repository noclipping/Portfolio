import React from "react";
import "../About.css";
import image from "../images/selfportrait.png";
export default function About() {
  return (
    <section className="about_container">
      <div>
        <h1 className="header">About</h1>
        <div className="about_card_container">
          <img src={image} />
          <p>yo</p>
        </div>
        {/* <a href="mailto:aresous@gmail.com?subject=Hi!">
          <span>Message me</span>
        </a> */}
      </div>
    </section>
  );
}
