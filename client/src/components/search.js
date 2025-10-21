import React from "react";

export function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchTerm);
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
