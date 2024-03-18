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
    <Background>
      <Navigation />
      <main className="grid-container">
        <div className="">
          <h2 className="numbered-title">
            <span aria-hidden="true">01</span> Pick Your Destination
          </h2>
          <div className="">
            <img src={selectedDestination.images.webp} alt="" />
          </div>
        </div>
        <div>
          <menu className="underline-indicators destination-list">
            {destinations.map((destination) => (
              <li
                key={destination.name}
                className="uppercase ff-sans-cond letter-spacing-2"
                aria-selected={
                  selectedDestination.name === destination.name
                    ? "true"
                    : "false"
                }
                onClick={() => setSelectedDestination(destination)}
              >
                {destination.name}
              </li>
            ))}
          </menu>
          <h3 className="fs-900 ff-serif text-white destination-name">
            {selectedDestination.name}
          </h3>
          <p className="destination-description">
            {selectedDestination.description}
          </p>
          <hr className="hr-line lg:border-white/25 lg:flex-1 lg:-mr-8 z-10" />
          <div className="destination-travel-info">
            <div>
              <h4>Avg. Distance</h4>
              <p>{selectedDestination.distance}</p>
            </div>
            <div>
              <h4>Est. Travel Time</h4>
              <p>{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </main>
    </Background>
  );
};

export default Destination;
