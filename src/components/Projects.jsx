import React from "react";
import "../ProjectPage.css";
import Card from "./Card";
export default function Projects() {
  const instagram = {
    title: "InstaClone",
    background: "instaclone",
    repo: "https://github.com/noclipping/instagramClone",
    demo: "https://instagram-clone-pig9cvrvm-noclipping.vercel.app/",
    gif: "https://media2.giphy.com/media/CJl7OCbeJuZfIGSjuE/giphy.gif",
  };
  return (
    <section id="projects">
      <div className="cards_container">
        <Card project={instagram} />

        <Card project={instagram} />

        <Card project={instagram} />
      </div>
    </section>
  );
}
