import React from "react";

import SquarePrismName from "./SquarePrismName/SquarePrismName";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homeWrapper} id="home">
      <SquarePrismName />
    </div>
  );
};

export default HomePage;
