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
  const socialHumans = {
    title: "Social-Humans",
    background: "social_humans",
    repo: "https://github.com/noclipping/social-media-app",
    demo: "https://social-media-app-murex.vercel.app/",
    gif: "https://media2.giphy.com/media/malhCP7UPRfsyC6Odo/giphy.gif?cid=790b7611b86d7c93b65e5f2aec2b5b9ef8dfb39c8e545f0d&rid=giphy.gif&ct=g",
  };
  return (
    <section id="projects">
      <div className="cards_container">
        <Card project={instagram} />
        <Card project={socialHumans} />
      </div>
    </section>
  );
}
