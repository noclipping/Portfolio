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
            <h1 className="headerInner">About</h1>
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
                <span>
                  <a
                    href="https://www.linkedin.com/in/devon-selvaggi-0b199a246/"
                    target="_blank"
                  >
                    <SiLinkedin /> LinkedIn
                  </a>
                </span>
                <span>
                  <a href="https://github.com/noclipping" target="_blank">
                    <SiGithub />
                    GitHub
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
