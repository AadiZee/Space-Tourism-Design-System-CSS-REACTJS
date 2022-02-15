import "../App.css";
import { useState } from "react";
import Nav from "../components/nav";

const Crew = () => {
  const [commander, setCommander] = useState(true);
  const [specialist, setSpecialist] = useState(false);
  const [pilot, setPilot] = useState(false);
  const [engineer, setEngineer] = useState(false);

  const handleClick = (value) => {
    if (value === "Commander") {
      setCommander(true);
      setSpecialist(false);
      setPilot(false);
      setEngineer(false);
    }
    if (value === "Specialist") {
      setCommander(false);
      setSpecialist(true);
      setPilot(false);
      setEngineer(false);
    }
    if (value === "Pilot") {
      setCommander(false);
      setSpecialist(false);
      setPilot(true);
      setEngineer(false);
    }
    if (value === "Engineer") {
      setCommander(false);
      setSpecialist(false);
      setPilot(false);
      setEngineer(true);
    }
  };

  return (
    <div className="crew">
      <a href="#main" className="skip-to-content">
        Skip To Content
      </a>
      <Nav home={false} destination={false} crew={true} technology={false} />
      <main id="main" className="grid-container grid-container-crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span>Meet your crew
        </h1>
        <div className="dot-indicators flex">
          <button
            aria-selected={commander}
            onClick={() => handleClick("Commander")}
          >
            <span className="sr-only">The Commander</span>
          </button>
          <button
            aria-selected={specialist}
            onClick={() => handleClick("Specialist")}
          >
            <span className="sr-only">The Mission Specialist</span>
          </button>
          <button aria-selected={pilot} onClick={() => handleClick("Pilot")}>
            <span className="sr-only">The Pilot</span>
          </button>
          <button
            aria-selected={engineer}
            onClick={() => handleClick("Engineer")}
          >
            <span className="sr-only">The Crew Engineer</span>
          </button>
        </div>

        {/* The Commander  */}
        <article
          className="crew-details flow"
          style={
            commander ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">Commander</h2>
            <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
          </header>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>
        <img
          style={
            commander ? { visibility: "visible" } : { visibility: "hidden" }
          }
          src="assets/crew/image-douglas-hurley.png"
          alt="Douglas Hurley"
        />

        {/* The mission specialist */}

        <article
          className="crew-details flow"
          style={
            specialist ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">Mission Specialist</h2>
            <p className="fs-700 uppercase ff-serif">Mark Shuttleworth</p>
          </header>
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </article>
        <img
          style={
            specialist ? { visibility: "visible" } : { visibility: "hidden" }
          }
          src="assets/crew/image-mark-shuttleworth.png"
          alt="Mark Shuttleworth"
        />

        {/* The Pilot */}

        <article
          className="crew-details flow"
          style={pilot ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">The Pilot</h2>
            <p className="fs-700 uppercase ff-serif">Victor Glover</p>
          </header>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </article>
        <img
          style={pilot ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/crew/image-victor-glover.png"
          alt="Victor Glover"
        />

        {/* The Crew Engineer  */}

        <article
          className="crew-details flow"
          style={
            engineer ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">Flight Engineer</h2>
            <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
          </header>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </article>
        <img
          style={
            engineer ? { visibility: "visible" } : { visibility: "hidden" }
          }
          src="assets/crew/image-anousheh-ansari.png"
          alt="Anousheh Ansari"
        />
      </main>
    </div>
  );
};

export default Crew;
