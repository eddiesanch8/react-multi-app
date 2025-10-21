import { useEffect, useState } from "react";
import { CountApp } from "./counter";
import { SearchBar } from "./search";
import MovieCard from "./movies";
import TodoList from "./task";

export function Counter() {
  return (
    <main className="count-app">
      <CountApp />
    </main>
  );
}

export function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}?query=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={fetchMovies}
      />
      {loading ? <p>Loading...</p> : <MovieCard movies={movies} />}
    </div>
  );
}

export function TaskApp() {
  return (
    <main className="">
      <TodoList />
    </main>
  );
}

export function HomePage() {
  return <main>This is home</main>;
}
