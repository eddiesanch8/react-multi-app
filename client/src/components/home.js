import { Link } from "react-router-dom";
import "../css/home.css";

export function HomeRoutes() {
  return (
    <section className="home-container">
      <Link to="/movies" className="home__link">
        {" "}
        Search for Movies{" "}
      </Link>
      <Link to="/counters" className="home__link">
        {" "}
        Go to counter{" "}
      </Link>

      <Link to="/tasks" className="home__link">
        {" "}
        Finish Tasks{" "}
      </Link>
    </section>
  );
}
