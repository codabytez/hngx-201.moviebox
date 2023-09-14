import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import ReactLoading from "react-loading";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const spinnerAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: config.molasses,
    reset: true,
    reverse: isLoading,
  });

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 30000); // Simulate a 3-second loading time
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="flex justify-center h-screen items-center gap-6">
      <p className="text-3xl font-bold animate-pulse  flex items-center gap-2">
        Please Wait
        <ReactLoading
          className="flex items-center pt-4"
          color={"#000"}
          type={"cylon"}
          width={20}
        />{" "}
      </p>
      <animated.div style={spinnerAnimation}>
        <ReactLoading color={"#000"} type={"spinningBubbles"} width={70} />
      </animated.div>
    </div>
  );
};

export default LoadingPage;
