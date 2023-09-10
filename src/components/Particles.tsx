import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";

const Particles = () => {
  const positionX = useSpring(0, { stiffness: 100 });
  const positionY = useSpring(0, { stiffness: 100 });
  const positionX2 = useSpring(0);
  const positionY2 = useSpring(0);
  const scaleX = useSpring(1, { duration: 0.3, stiffness: 50 });
  const scaleY = useSpring(1, { duration: 0.3, stiffness: 50 });
  const opacity = useMotionValue(1);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const x = -(window.innerWidth - event.clientX) / 100;
      const y = -(window.innerHeight - event.clientY) / 100;

      positionX.set(x);
      positionY.set(y);

      const x2 = -(window.innerWidth - event.clientX * 4) / 100;
      const y2 = -(window.innerHeight - event.clientY * 4) / 100;

      positionX2.set(x2);
      positionY2.set(y2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const dividerY = window.innerWidth <= 660 ? 500 : 2000;
      const dividerX = window.innerWidth <= 660 ? 1000 : 4000;

      scaleX.set(window.pageYOffset / dividerY + 1);
      scaleY.set(window.pageYOffset / dividerX + 1);
      opacity.set(
        1 - window.pageYOffset / (window.innerWidth <= 660 ? 650 : 1000)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div style={{ scaleX, scaleY, opacity }}>
      <motion.img
        src="/rectangle-1.png"
        id="r1"
        className="absolute z-10 -translate-y-7 w-8 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-2.png"
        id="r2"
        className="absolute z-10 w-10 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-3.png"
        id="r3"
        className="absolute z-10 w-4 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-4.png"
        id="r4"
        className="absolute z-10"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-5.png"
        id="r5"
        className="absolute z-10 w-10 sm:w-auto"
        alt=""
        style={{ x: positionX2, y: positionY2 }}
      />
      <motion.img
        src="/rectangle-6.png"
        id="r6"
        className="absolute z-10"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-7.png"
        id="r7"
        className="absolute z-10 -translate-x-5 w-6 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-8.png"
        id="r8"
        className="absolute z-10 w-10 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-9.png"
        id="r9"
        className="absolute z-10 translate-x-12 hidden sm:block"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
      <motion.img
        src="/rectangle-10.png"
        id="r10"
        className="absolute z-10 w-10 sm:w-auto"
        alt=""
        style={{ x: positionX2, y: positionY2 }}
      />
      <motion.img
        src="/rectangle-11.png"
        id="r11"
        className="absolute z-10"
        alt=""
        style={{ x: positionX2, y: positionY2 }}
      />
      <motion.img
        src="/rectangle-12.png"
        id="r12"
        className="absolute z-10 hidden sm:block w-7 sm:w-auto"
        alt=""
        style={{ x: positionX, y: positionY }}
      />
    </motion.div>
  );
};

export default Particles;
