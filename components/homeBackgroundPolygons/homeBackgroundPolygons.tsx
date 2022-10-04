import React from "react";
import styles from "./homeBackgroundPolygons.module.scss";
const homeBackgroundPolygons = () => {
  return (
    <>
      <div className={styles.bgPolygonTop}></div>
      <div className={styles.bgPolygonBottom}></div>
      <div className={styles.bgPolygonMiddle}></div>
    </>
  );
};

export default homeBackgroundPolygons;
