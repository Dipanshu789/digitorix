import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/ScrollAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const robotRef = useRef();
  const humanRef = useRef();
  const logoRef = useRef();
  const [robotHand, setRobotHand] = useState(null);
  const [humanHand, setHumanHand] = useState(null);

  // Fetch Lottie JSONs from public folder
  useEffect(() => {
    fetch("/assets/robotHand.json")
      .then(res => res.json())
      .then(setRobotHand);
    fetch("/assets/humanHand.json")
      .then(res => res.json())
      .then(setHumanHand);
  }, []);

  useEffect(() => {
    if (!robotHand || !humanHand) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-wrapper",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    tl.to(robotRef.current, { x: "40vw", y: "30vh", duration: 1 }, 0)
      .to(humanRef.current, { x: "-40vw", y: "-30vh", duration: 1 }, 0)
      .to(logoRef.current, { scale: 1.2, opacity: 1 }, 0.5);

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [robotHand, humanHand]);

  return (
    <div className="animation-wrapper my-5">
      <div className="robot-hand" ref={robotRef}>
        {robotHand && <Lottie animationData={robotHand} loop={false} />}
      </div>
      <div className="human-hand" ref={humanRef}>
        {humanHand && <Lottie animationData={humanHand} loop={false} />}
      </div>
      <img ref={logoRef} src={handshakeLogo} alt="Digitornix Logo" className="center-logo" />
    </div>
    
  );
};

export default ScrollAnimation;