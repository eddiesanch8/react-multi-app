import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { CountApp } from "./counter";
import { SearchBar } from "./search";

export function Counter() {
  return (
    <main className="count-app">
      <CountApp />
    </main>
  );
}

export function MovieApp() {
  return (
    <main className="movie-app">
      <SearchBar />{" "}
    </main>
  );
}

export function TaskApp() {
  return <main className="">My Tasks goes here</main>;
}

export function HomePage() {
  return <main>This is home</main>;
}
