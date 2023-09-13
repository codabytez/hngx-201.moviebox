import { useState, useEffect } from "react";

function ComingSoon() {
  const targetDate = new Date("2023-10-30T00:00:00").getTime();

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const reloadPage = () => (window.location.href = "/");

  return (
    <div className="min-h-screen min-w-[650px] flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
        <p className="text-zinc-600 font-medium text-lg">
          Working on bringing this page to live.
        </p>
        <div className="text-base text-red-700 font-bold">Check back in</div>
        <div className="text-lg font-bold text-blue-600 flex justify-evenly gap-3">
          <div className="bg-[#3A3C42] border shadow-lg w-32">
            <h4 className="py-2 text-8xl text-white">{remainingTime.days}</h4>
            <p className="bg-white text-gray-700 w-full">Days</p>
          </div>
          <div className="bg-[#3A3C42] border shadow-lg w-32">
            <h4 className="py-2 text-8xl text-white">{remainingTime.hours}</h4>
            <p className="bg-white text-gray-700 w-full">Hours</p>
          </div>
          <div className="bg-[#3A3C42] border shadow-lg w-32">
            <h4 className="py-2 text-8xl text-white">
              {remainingTime.minutes}
            </h4>
            <p className="bg-white text-gray-700 w-full">Minutes</p>
          </div>
          <div className="bg-[#3A3C42] border shadow-lg w-32">
            <h4 className="py-2 text-8xl text-white">
              {remainingTime.seconds > 9
                ? remainingTime.seconds
                : `0${remainingTime.seconds}`}
            </h4>
            <p className="bg-white text-gray-700 w-full">Seconds</p>
          </div>
        </div>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-8 transition-all rounded-md hover:bg-red-600 focus:outline-none w-max m-auto"
          onClick={reloadPage}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default ComingSoon;
