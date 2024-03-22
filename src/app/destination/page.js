"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import data from "/data/data.json";
import Background from "../components/Background";

const destinations = data["destinations"];

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  return (
    <>
      <Navigation />
      <main className="grid-container grid-container--destination">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick Your Destination
        </h1>
        <img src={selectedDestination.images.webp} alt="" />
        <menu className="underline-indicators destination-list">
          {destinations.map((destination) => (
            <li
              key={destination.name}
              className="uppercase ff-sans-cond letter-spacing-2"
              role="button"
              aria-selected={
                selectedDestination.name === destination.name ? "true" : "false"
              }
              onClick={() => setSelectedDestination(destination)}
            >
              {destination.name}
            </li>
          ))}
        </menu>
        <article>
          <h2 className="destination-name">{selectedDestination.name}</h2>
          <p className="destination-description">
            {selectedDestination.description}
          </p>
          <div className="destination-travel-info">
            <div>
              <h3>Avg. Distance</h3>
              <p>{selectedDestination.distance}</p>
            </div>
            <div>
              <h3>Est. Travel Time</h3>
              <p>{selectedDestination.travel}</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Destination;
