import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  return (
    <div className="max-w-[1400px] relative ">
      <div className="absolute top-0 text-white z-20 flex  gap-2 sm:flex-row justify-between items-center w-full py-5 px-7 lg:px-[120px]">
        <Logo color="100" display="hidden" />
        <div className="basis-1/2">
          <Search
            searchQuery={searchQuery}
            onSearchInputChange={onSearchInputChange}
            onHandleSearch={onHandleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
