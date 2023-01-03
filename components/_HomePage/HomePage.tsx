import { F_arialBlack } from '../../assets/fonts/appFonts';
import React from 'react';
import SquarePrismName from './SquarePrismName/SquarePrismName';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div
      className={`${styles.homeWrapper} ${F_arialBlack.className}`}
      id="home"
    >
      <SquarePrismName />
    </div>
  );
};

export default HomePage;
