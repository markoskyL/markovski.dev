import React from "react";

import SquarePrismName from "./SquarePrismName/SquarePrismName";
import styles from './HomePage.module.scss'
import HomeBackgroundPolygons from "./HomeBackgroundPolygons/HomeBackgroundPolygons";

const HomePage = () => {
  return (
    <div className={styles.homeWrapper} id="home">
      <HomeBackgroundPolygons />
      <SquarePrismName />
    </div>
  );
};

export default HomePage;
