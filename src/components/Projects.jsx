import React from "react";
import "../ProjectPage.css";
import Card from "./Card";
export default function Projects() {
  return (
    <section id="projects">
      <div className="cards_container">
        <Card />

        <Card />

        <Card />
      </div>
    </section>
  );
}
