import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { ReactNode, useEffect } from 'react';
import '@splidejs/react-splide/css';
import styles from './SplideSlider.module.scss';
import Image from 'next/image';

export interface imageDataProps {
  base64: string;
  height: number;
  src: string;
  type: string;
  width: number;
}

interface props {
  imagesData: imageDataProps[];
  handleClick: () => void;
  setCurrentIndex: (index: number) => void;
}

const SplideSlider: React.FC<props> = ({
  imagesData,
  handleClick,
  setCurrentIndex,
}) => {
  const mainRef = React.createRef<Splide>();

  const renderSlides = (): ReactNode[] => {
    return imagesData.map((img) => (
      <SplideSlide
        key={img.src}
        onClick={handleClick}
        className={styles.splideSlide}
      >
        <Image
          alt="Picture of a project"
          width={img.width}
          height={img.height}
          src={img}
          placeholder="blur"
          blurDataURL={img.base64}
          title="Open Fullscreen"
        />
      </SplideSlide>
    ));
  };

  useEffect(() => {
    mainRef.current?.splide?.on('move', (index) => {
      setCurrentIndex(index);
    });
    return () => {
      mainRef.current?.splide?.destroy(true);
    };
  }, []);

  return (
    <Splide
      aria-label="My Favorite Images"
      ref={mainRef}
      options={{
        type: 'fade',
        lazyLoad: true,
        classes: {
          arrow: `splide__arrow ${styles.custom_splide_arrow}`,
        },
      }}
    >
      {renderSlides()}
    </Splide>
  );
};

export default SplideSlider;
