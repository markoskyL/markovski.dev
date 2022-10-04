import React, { useRef } from "react";
import styles from "./Cursor.module.scss";
const Cursor = () => {
  const innerCursor = useRef<HTMLDivElement>(null);
  const outerCursor = useRef<HTMLDivElement>(null);
  const links = Array.from(document.querySelectorAll("a"));

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      innerCursor.current?.classList.add("grow");
      outerCursor.current?.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
      innerCursor.current?.classList.remove("grow");
      outerCursor.current?.classList.remove("grow");
    });
  });

  const moveCursor = (e: MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    if (!innerCursor.current || !outerCursor.current) return;
    innerCursor.current.style.left = `${x}px`;
    innerCursor.current.style.top = `${y}px`;
    outerCursor.current.style.left = `${x}px`;
    outerCursor.current.style.top = `${y}px`;
  };

  document.addEventListener("mousemove", moveCursor);

  return (
    <>
      <div className={styles.innerCursor} ref={innerCursor} />
      <div className={styles.outerCursor} ref={outerCursor} />
    </>
  );
};

export default Cursor;
