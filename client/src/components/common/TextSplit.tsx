import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Props = {
  text: string;
  hoverText: string;
  className?: string;
};

export const TextSplit = ({ text, hoverText, className = "" }: Props) => {
  const [hovered, setHovered] = useState(false);

  const scatter = useMemo(
    () =>
      Array.from(text).map(() => ({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 150,
        rotate: (Math.random() - 0.5) * 360,
      })),
    [text]
  );

  return (
    <div
      className={`position-relative d-inline-block w-100 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: "2em" }} // висота щоб обидва тексти не перекривались
    >
      {/* Текст, який розлітається */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {Array.from(text).map((char, i) => (
          <motion.span
            key={i}
            className="d-inline-block"
            animate={hovered ? "scatter" : "initial"}
            variants={{
              initial: {
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              },
              scatter: {
                x: scatter[i].x,
                y: scatter[i].y,
                rotate: scatter[i].rotate,
                opacity: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Текст, який з'являється замість */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="d-inline-block text-success fw-bold">{hoverText}</span>
      </motion.div>
    </div>
  );
};
