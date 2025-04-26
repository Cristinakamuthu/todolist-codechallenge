const SearchBar = ({ search, setSearch }) => {
    return (
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos..."
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;
  