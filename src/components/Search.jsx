const Search = ({ searchQuery, onSearchInputChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-[500px] px-3 py-2 rounded-md border border-gray-300 justify-between items-center gap-2.5 inline-flex bg-transparent text-white text-base font-normal leading-normal focus:outline-0 caret-black"
        value={searchQuery}
        onChange={onSearchInputChange}
      />
    </>
  );
};

export default Search;
