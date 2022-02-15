import "../App.css";
import { useState } from "react";
import Nav from "../components/nav";

const Destination = () => {
  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  const handleClick = (value) => {
    if (value === "Moon") {
      setMoon(true);
      setMars(false);
      setEuropa(false);
      setTitan(false);
    }
    if (value === "Mars") {
      setMoon(false);
      setMars(true);
      setEuropa(false);
      setTitan(false);
    }
    if (value === "Europa") {
      setMoon(false);
      setMars(false);
      setEuropa(true);
      setTitan(false);
    }
    if (value === "Titan") {
      setMoon(false);
      setMars(false);
      setEuropa(false);
      setTitan(true);
    }
  };

  return (
    <div className="destination">
      <a href="#main" className="skip-to-content">
        Skip To Content
      </a>

      <Nav home={false} destination={true} crew={false} technology={false} />

      <main
        id="main"
        className="grid-container grid-container-destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Pick your destination
        </h1>

        <img
          style={moon ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/destination/image-moon.png"
          alt="the moon"
        />

        <img
          style={mars ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/destination/image-mars.png"
          alt="mars"
        />

        <img
          style={europa ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/destination/image-europa.png"
          alt="europa"
        />

        <img
          style={titan ? { visibility: "visible" } : { visibility: "hidden" }}
          src="assets/destination/image-titan.png"
          alt="titan"
        />

        <div className="tab-list underline-indicators flex">
          <button
            onClick={() => handleClick("Moon")}
            className={
              moon
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            Moon
          </button>
          <button
            onClick={() => handleClick("Mars")}
            className={
              mars
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            Mars
          </button>
          <button
            onClick={() => handleClick("Europa")}
            className={
              europa
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            Europa
          </button>
          <button
            onClick={() => handleClick("Titan")}
            className={
              titan
                ? "active uppercase ff-sans-cond text-accent letter-spacing-2"
                : "uppercase ff-sans-cond text-accent letter-spacing-2"
            }
          >
            Titan
          </button>
        </div>

        {/* MOON */}

        <article
          className="destination-info flow"
          style={moon ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <h2 className="fs-800 uppercase ff-serif">Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">384,400 km</p>
            </div>

            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>

        {/* MARS */}

        <article
          className="destination-info flow"
          style={mars ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <h2 className="fs-800 uppercase ff-serif">Mars</h2>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">225 mil. km</p>
            </div>

            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">9 months</p>
            </div>
          </div>
        </article>

        {/* EUROPA */}

        <article
          className="destination-info flow"
          style={europa ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <h2 className="fs-800 uppercase ff-serif">Europa</h2>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">628 mil. km</p>
            </div>

            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">3 years</p>
            </div>
          </div>
        </article>

        {/* TITAN */}

        <article
          className="destination-info flow"
          style={titan ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <h2 className="fs-800 uppercase ff-serif">Titan</h2>
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">1.6 bil. km</p>
            </div>

            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">7 years</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Destination;
