import React from "react";
import "../Card.css";
import { BsGithub } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
export default function Card({ project }) {
  return (
    <div className={`card_container ${project?.background}`}>
      <div className="card_header">
        <span>
          <a href={`${project?.repo}`} target="_blank">
            <BsGithub />
          </a>
        </span>
        <h1 className="card_title">{project?.title}</h1>
        <span>
          <a href={`${project?.demo}`} target="_blank">
            <BsFillPlayFill />
          </a>
        </span>
      </div>
      <div className="gif_container">
        <a href={`${project.demo}`} target="_blank">
          {/* <img className="gif" src={`${project?.gif}`} /> */}
          <video className="gif" loop muted autoPlay>
            <source src={`${project?.gif}`} type="video/mp4"></source>
          </video>
        </a>
      </div>
    </div>
  );
}
