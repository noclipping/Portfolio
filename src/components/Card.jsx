import React from "react";
import "../Card.css";
import { BsGithub } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
export default function Card({ project }) {
  console.log(project);
  return (
    <div className={`card_container ${project?.background}`}>
      <div className="card_header">
        <span>
          <a href={`${project?.repo}`} target="_blank">
            <BsGithub />
          </a>
        </span>
        <h1>{project?.title}</h1>
        <span>
          <a href={`${project?.demo}`} target="_blank">
            <BsFillPlayFill />
          </a>
        </span>
      </div>
      <div className="gif_container">
        <img className="gif" src={`${project?.gif}`} />
      </div>
    </div>
  );
}
