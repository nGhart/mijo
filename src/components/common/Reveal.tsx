import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Choose initial translate direction
  const directions = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`
        opacity-0 ${directions[direction]}
        ${visible ? "opacity-100 translate-y-0 translate-x-0" : ""}
        transition-all ease-out
      `}
    >
      {children}
    </div>
  );
}
