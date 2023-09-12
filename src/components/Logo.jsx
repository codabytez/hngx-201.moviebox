import logo from "../assets/tv.svg";

const Logo = ({ color = "800" }) => {
  return (
    <div className="flex gap-6 items-center">
      <img src={logo} alt="Logo" />
      <h2 className={`text-zinc-${color} text-2xl font-bold leading-normal`}>
        MovieBox
      </h2>
    </div>
  );
};

export default Logo;
