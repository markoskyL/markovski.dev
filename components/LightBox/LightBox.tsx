import React, { useRef } from 'react';
import { SplideThumbnail } from '../SplideThumbnail/SplideThumbnail';
import styles from './_LightBox.module.scss';
import { GrClose } from 'react-icons/gr';
import { imageDataProps } from '../SplideSlider/SplideSlider';

interface props {
  images: imageDataProps[];
  onClose: () => void;
  currentIndex: number;
}
const LightBox: React.FC<props> = ({ images, onClose, currentIndex }) => {
  const lightBoxRef = useRef(null);

  return (
    <div
      className={styles.lightBox}
      onClick={(e) => {
        if (e.target === lightBoxRef.current) {
          onClose();
        }
      }}
      ref={lightBoxRef}
    >
      <SplideThumbnail imagesArray={images} currentIndex={currentIndex} />
      <GrClose className={styles.closeBtn} onClick={onClose} />
    </div>
  );
};

export default LightBox;
