import React from "react";
import "../About.css";
import image from "../images/selfportrait.png";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";
export default function About() {
  return (
    <section className="about_container">
      <div>
        <h1 className="header">About</h1>
        <div className="about_card_container">
          <div className="img_container">
            <img src={image} className="portrait" />
          </div>
          <div className="about_text">
            <p>
              Hey, I'm <span style={{ color: "red" }}>Devon</span>, a 22 y.o.
              self taught full-stack developer residing in NE Pennsylvania. I
              enjoy using the MERN stack as well as Next.js. A few of my
              interests include:
              <ul className="list">
                <li>🎶 Playing Guitar</li>
                <li>🎨 Drawing & Painting</li>
                <li>🏋️ Weight Lifting</li>
                <li>👨‍💻 Programming (of course!)</li>
              </ul>
              If you would like to work with me -- or contact me for anything
              related:
              <br />
              <div className="socials">
                <a href="mailto:devonselvaggi@gmail.com">
                  <span>
                    <FiMail />
                    Email
                  </span>
                </a>
                <span
                  onClick={() => {
                    alert("No LinkedIn as of yet :(");
                  }}
                >
                  <SiLinkedin /> LinkedIn
                </span>
                <span href="">
                  <SiGithub />
                  GitHub
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* <a href="mailto:aresous@gmail.com?subject=Hi!">
          <span>Message me</span>
        </a> */}
      </div>
    </section>
  );
}
