import "../App.css";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div className="home">
      <a href="#main" className="skip-to-content">
        Skip To Content
      </a>
      <Nav home={true} destination={false} crew={false} technology={false} />
      <main className="grid-container .grid-container-home">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white "> Space </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>

        <div>
          <Link
            className="large-button uppercase ff-serif text-dark bg-white"
            to="/destination"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
