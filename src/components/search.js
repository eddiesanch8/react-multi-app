export function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search__input"
        placeholder="Search for Movies"
        type="text"
        required
      />
      <button className="search__btn"> Find</button>
    </div>
  );
}
