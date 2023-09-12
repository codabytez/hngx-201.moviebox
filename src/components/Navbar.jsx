import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ searchQuery, onSearchInputChange }) => {
  return (
    <>
      <div className="absolute top-0 text-white z-20 flex flex-col gap-2 sm:flex-row justify-evenly items-center w-full my-5">
        <Logo color="100" />
        <Search
          searchQuery={searchQuery}
          onSearchInputChange={onSearchInputChange}
        />
      </div>
    </>
  );
};

export default Navbar;
