import "../App.css";
import { Link } from "react-router-dom";

const Nav = ({ home, destination, crew, technology }) => {
  const handleToggle = (e) => {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
    console.log(visibility);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
        />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={handleToggle}
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation underline-indicators flex"
        >
          <li className={home ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
            >
              <span aria-hidden="true">01</span>Home
            </Link>
          </li>
          <li className={destination ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/destination"
            >
              <span aria-hidden="true">02</span>Destination
            </Link>
          </li>
          <li className={crew ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/crew"
            >
              <span aria-hidden="true">03</span>Crew
            </Link>
          </li>

          <li className={technology ? "active" : ""}>
            <Link
              className="uppercase text-white letter-spacing-2"
              to="/technology"
            >
              <span aria-hidden="true">04</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
