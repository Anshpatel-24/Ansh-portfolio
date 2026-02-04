import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`
          fixed top-0 left-0 z-[9999] pointer-events-none
          transition-transform duration-150 ease-out
          ${hovering ? "scale-150 bg-accent" : "scale-100 bg-white"}
        `}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none
        border-2 border-accent rounded-full
        transition-transform duration-300 ease-out"
        style={{
          width: "30px",
          height: "30px",
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
