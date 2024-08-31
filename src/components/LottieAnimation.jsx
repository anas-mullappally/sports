"use client";
import Lottie from "react-lottie-player";

function LottieAnimation({ animationData, width = 300, height = 300 }) {
  return (
    <Lottie
      loop={true}
      animationData={animationData}
      play={true}
      style={{ width: width, height: height }}
    />
  );
}

export default LottieAnimation;
