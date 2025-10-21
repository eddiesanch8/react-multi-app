import "../css/search.css";
export function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchTerm);
      }}
    >
      <input
        className="search-bar__input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
      />
      <button className="search-bar__btn" type="submit">
        Search
      </button>
    </form>
  );
}
