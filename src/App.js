import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/technology" exact element={<Technology />} />
        <Route path="/crew" exact element={<Crew />} />
        <Route path="/destination" exact element={<Destination />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
