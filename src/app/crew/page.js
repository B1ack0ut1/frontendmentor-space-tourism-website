"use client";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import data from "/data/data.json";
import { useState } from "react";

const crew = data["crew"];

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);

  return (
    <Background>
      <Navigation />
      <main className="grid-container grid-container--crew">
        <h1 className="numbered-title">
          <span>02</span>Meet your crew
        </h1>
        <article>
          <h2 className="crew-member-role">{selectedCrewMember.role}</h2>
          <p className="crew-member-name">{selectedCrewMember.name}</p>
          <p className="crew-member-bio">{selectedCrewMember.bio}</p>
        </article>
        <menu className="dot-indicators">
          {crew.map((crewMember) => (
            <li
              key={crewMember.name}
              onClick={() => setSelectedCrewMember(crewMember)}
              role="button"
              aria-selected={
                selectedCrewMember.name === crewMember.name ? "true" : "false"
              }
            >
              <span className="sr-only">{`Slide for ${crewMember.name}`}</span>
            </li>
          ))}
        </menu>
        <div className="crew-member-photo-frame">
          <img
            className="crew-member-photo"
            src={selectedCrewMember.images.webp}
            alt={`Photo of ${selectedCrewMember.name}`}
          />
          <hr className="crew-member-photo-hr-border" />
        </div>
      </main>
    </Background>
  );
};

export default Crew;
