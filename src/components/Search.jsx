const Search = ({ searchQuery, onSearchInputChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className=" min-w-[250px] w-[80%] max-w-[500px] sm:w-[60%] px-3 py-2 rounded-md border border-gray-300 justify-between items-center gap-2.5 inline-flex bg-transparent text-white text-base font-normal leading-normal focus:outline-0 caret-black"
        value={searchQuery}
        onChange={onSearchInputChange}
      />
    </>
  );
};

export default Search;
