import React from "react";
import "../ProjectPage.css";
import Card from "./Card";
import socialHumansVid from "../images/socialhumansvid.mp4";
import instacloneVid from "../images/instaclonevid.mp4";
import tnwcloneVid from "../images/tnwclonevid.mp4";
export default function Projects() {
  const instagram = {
    title: "InstaClone",
    background: "instaclone",
    repo: "https://github.com/noclipping/instagramClone",
    demo: "https://instaclone-lovat.vercel.app/",
    gif: instacloneVid,
  };
  const socialHumans = {
    title: "Social-Humans",
    background: "social_humans",
    repo: "https://github.com/noclipping/social-media-app",
    demo: "https://social-media-app-murex.vercel.app/",
    gif: socialHumansVid,
  };
  const tnwClone = {
    title: "TNW Clone",
    background: "tnw_clone",
    repo: "https://github.com/noclipping/TNWclone",
    demo: "https://noclipping.github.io/TNWclone/",
    gif: tnwcloneVid,
  };
  return (
    <section id="projects">
      <div className="cards_container">
        <Card project={instagram} />
        <Card project={socialHumans} />
        <Card project={tnwClone} />
      </div>
    </section>
  );
}
