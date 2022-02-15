import "../App.css";
import { useState } from "react";
import Nav from "../components/nav";

const Technology = () => {
  const [vehicle, setVehicle] = useState(true);
  const [port, setPort] = useState(false);
  const [capsule, setCapsule] = useState(false);

  const handleClick = (value) => {
    if (value === "Vehicle") {
      setVehicle(true);
      setPort(false);
      setCapsule(false);
    }
    if (value === "Port") {
      setVehicle(false);
      setPort(true);
      setCapsule(false);
    }
    if (value === "Capsule") {
      setVehicle(false);
      setPort(false);
      setCapsule(true);
    }
  };

  return (
    <div className="technology">
      <a href="#main" className="skip-to-content">
        Skip To Content
      </a>

      <Nav home={false} destination={false} crew={false} technology={true} />

      <main id="main" className="grid-container grid-container-technology flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">04</span> Technology
        </h1>

        <img
          style={vehicle ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-launch-vehicle-landscape.jpg"
          alt="Launch Vehicle"
          className="mobile"
        />

        <img
          style={vehicle ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-launch-vehicle-portrait.jpg"
          alt="Launch Vehicle"
          className="desktop"
        />

        <img
          style={port ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-spaceport-landscape.jpg"
          alt="Spaceport"
          className="mobile"
        />

        <img
          style={port ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-spaceport-portrait.jpg"
          alt="Spaceport"
          className="desktop"
        />

        <img
          style={capsule ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-space-capsule-landscape.jpg"
          alt="Space Capsule"
          className="mobile"
        />

        <img
          style={capsule ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/technology/image-space-capsule-portrait.jpg"
          alt="Space Capsule"
          className="desktop"
        />

        <div className="tech-list buttons flex">
          <button
            onClick={() => handleClick("Vehicle")}
            className={
              vehicle
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            01
          </button>
          <button
            onClick={() => handleClick("Port")}
            className={
              port
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            02
          </button>
          <button
            onClick={() => handleClick("Capsule")}
            className={
              capsule
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            03
          </button>
        </div>

        {/* Launch Vehicle */}

        <article
          className="technology-info"
          style={vehicle ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <p className="text-accent fs-600 uppercase">The terminology...</p>
          <h2 className="fs-800 uppercase ff-serif">Launch vehicle</h2>

          <p className="description">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </article>

        {/* Spaceport */}

        <article
          className="technology-info flow"
          style={port ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <p className="text-accent fs-600 uppercase">The terminology...</p>
          <h2 className="fs-800 uppercase ff-serif">Spaceport</h2>

          <p className="description">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </article>

        {/* Space capsule */}

        <article
          className="technology-info flow"
          style={capsule ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <p className="text-accent fs-600 uppercase">The terminology...</p>
          <h2 className="fs-800 uppercase ff-serif">Space capsule</h2>

          <p className="description">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Technology;
