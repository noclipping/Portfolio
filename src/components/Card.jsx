import React from "react";
import "../Card.css";
import { BsGithub } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
export default function Card() {
  return (
    <div className="card_container">
      <h1>InstaClone</h1>
      <img src="https://media2.giphy.com/media/CJl7OCbeJuZfIGSjuE/giphy.gif" />
      <p>
        Instagram clone built with Firebase and React. Firebase authentication,
        comments, liking, following.
      </p>
      <div class="media">
        <span>
          <BsGithub size={40} />
        </span>
        <span>
          <BsFillPlayFill size={40} />
        </span>
      </div>
    </div>
  );
}
