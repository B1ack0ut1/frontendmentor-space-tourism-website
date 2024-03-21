"use client";
import Navigation from "../components/Navigation";
import Background from "../components/Background";
import data from "/data/data.json";
import { useState } from "react";

const technologies = data["technology"];

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

  return (
    <Background>
      <Navigation />
      <main className="grid-container grid-container--tech">
        <h1 className="numbered-title">
          <span>03</span>Space launch 101
        </h1>
        <img
          className="technology-photo-landscape"
          src={selectedTech.images.landscape}
          alt={`Image of ${selectedTech.name}`}
        />
        <img
          className="technology-photo-portrait"
          src={selectedTech.images.portrait}
          alt={`Image of ${selectedTech.name}`}
        />
        <menu className="numbered-indicators">
          {technologies.map((tech, index) => (
            <li
              key={tech.name}
              role="button"
              aria-selected={selectedTech.name === tech.name ? "true" : "false"}
            >
              {index + 1}
            </li>
          ))}
        </menu>
        <article>
          <h2 className="tech-name">
            <span>The terminology</span>
            {selectedTech.name}
          </h2>
          <p className="tech-description">{selectedTech.description}</p>
        </article>
      </main>
    </Background>
  );
};

export default Technology;
