import React from "react";
import "../ProjectPage.css";
import Card from "./Card";
export default function Projects() {
  return (
    <section id="projects">
      <h1 id="header">Projects</h1>
      <div id="gridcontainer">
        <Card />

        <Card />

        <Card />
      </div>
    </section>
  );
}
