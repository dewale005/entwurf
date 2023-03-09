import { useEffect, useRef } from "react";
import Social from "../Social/Social";

function Landing() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="relative">
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="/animation/animation.json"
      />
      <div className="absolute hidden md:flex bottom-0">
            <Social />
      </div>
    </div>
  );
}
export default Landing;
