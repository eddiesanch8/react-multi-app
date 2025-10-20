import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
export function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__ul">
        <li className="nav-bar__item">
          <Link to="/counters">Counter</Link>
        </li>
        <li className="nav-bar__item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="nav-bar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-bar__item">
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}
