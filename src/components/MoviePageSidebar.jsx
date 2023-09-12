import Logo from "./Logo";
import home from "../assets/Home.svg";
import movies from "../assets/Movie.svg";
import tvShow from "../assets/TVShow.svg";
import upcoming from "../assets/Calendar.svg";
import logout from "../assets/Logout.svg";

const MoviePageSidebar = () => {
  return (
    <>
      <div className="min-w-[226px] bg-white rounded-tr-[45px] rounded-br-[45px] border border-black border-opacity-30 flex flex-col gap-12">
        <div className="p-5">
          <Logo />
        </div>
        <div className="flex flex-col select-none">
          <p className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer">
            <img src={home} alt="home" className="inline-block w-6 h-6 mr-2" />
            Home
          </p>
          <p className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer">
            <img
              src={movies}
              alt="movies"
              className="inline-block w-6 h-6 mr-2"
            />
            Movies
          </p>
          <p className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer">
            <img
              src={tvShow}
              alt="tvShow"
              className="inline-block w-6 h-6 mr-2"
            />
            Tv Series
          </p>
          <p className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer">
            <img
              src={upcoming}
              alt="upcoming"
              className="inline-block w-6 h-6 mr-2"
            />
            Upcoming
          </p>
        </div>
        <div className="w-[170px] p-4 pt-9 flex flex-col gap-2 bg-pink-100 bg-opacity-40 rounded-[20px] border border-rose-700 border-opacity-70 mx-6">
          <div className="text-zinc-800 text-opacity-80 text-[15px] font-semibold">
            Play movie quizes
            <br />
            and earn
            <br />
            free tickets
          </div>
          <div className="text-stone-500 text-xs font-medium">
            50k people are playing
            <br />
            now
          </div>
          <button className="text-xs font-medium bg-rose-700 bg-opacity-20 rounded-[30px] px-4 py-1">
            Start playing
          </button>
        </div>
        <div className=" text-stone-500 text-xl font-semibold flex p-6">
          <img className="shadow" src={logout} />
          Log out
        </div>
      </div>
    </>
  );
};

export default MoviePageSidebar;
