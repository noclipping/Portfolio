import React from "react";
import "../Card.css";
import { BsGithub } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
export default function Card() {
  return (
    <div className="card_container">
      <div className="card_header">
        <span>
          <BsGithub />
        </span>
        <h1>InstaClone</h1>
        <span>
          <BsFillPlayFill />
        </span>
      </div>
      <div className="gif_container">
        <img
          className="gif"
          src="https://media2.giphy.com/media/CJl7OCbeJuZfIGSjuE/giphy.gif"
        />
      </div>
    </div>
  );
}
