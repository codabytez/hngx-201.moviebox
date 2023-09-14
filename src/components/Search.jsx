const Search = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      onHandleSearch();
    }
  };

  return (
    <div className="relative min-w-[200px] w-[100%] max-w-[500px] sm:w-[80%]">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="w-full pl-2 pr-8 py-2 rounded-md border border-gray-300 text-center bg-transparent text-white text-base font-normal leading-normal focus:outline-0"
        value={searchQuery}
        onChange={onSearchInputChange}
        onKeyDown={handleSearch}
      />
      <span className="absolute top-3.5 right-2" onClick={onHandleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="stroke-white transition-all hover:cursor-pointer hover:stroke-gray-400"
        >
          <path
            d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default Search;
