function Search() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-6 mb-3 w-full">
      <input
        className="bg-neutral-600 mb-2 md:mb-0 md:mr-4 p-2 rounded-xl"
        type="text"
        placeholder="Search for a place..."
      />
      <button>Search</button>
    </div>
  );

  // <p>Search for a city, e.g., New York</p>
  // <p>Search</p>
}

export default Search;
