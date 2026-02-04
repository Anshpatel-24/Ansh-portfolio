import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DOTS = 8;

const FramerTrailCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {Array.from({ length: DOTS }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9999]
          w-2 h-2 rounded-full bg-accent bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_15px_#a855f7]"
          animate={{
            x: mouse.x - 4,
            y: mouse.y - 4,
            scale: 1 - i * 0.08,
            opacity: 1 - i * 0.12,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20 + i * 4,
            mass: 0.5,
          }}
        />
      ))}
    </>
  );
};

export default FramerTrailCursor;
