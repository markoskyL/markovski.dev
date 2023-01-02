import React, { ReactNode, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from 'next/legacy/image';
import { Options } from '@splidejs/splide';
import { imageDataProps } from '../SplideSlider/SplideSlider';
import styles from './_SplideThumbnail.module.scss';

interface props {
  imagesArray: imageDataProps[];
  currentIndex: number;
}

export const SplideThumbnail: React.FC<props> = ({
  imagesArray,
  currentIndex,
}) => {
  const mainRef = React.createRef<Splide>();

  const thumbsRef = React.createRef<Splide>();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = (): ReactNode[] => {
    return imagesArray.map((img) => (
      <SplideSlide key={'lightbox ' + img}>
        <Image
          alt="Picture of a project"
          width={img.width}
          height={img.height}
          src={img.src}
          placeholder={'blur'}
          blurDataURL={img.base64}

        />
      </SplideSlide>
    ));
  };

  const mainOptions: Options = {
    type: 'fade',
    start: currentIndex,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    arrows: false,
    rewind: true,
  };

  const thumbsOptions: Options = {
    type: 'slide',
    start: currentIndex,
    gap: '1rem',
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'center',
    isNavigation: true,
    rewind: true,
    classes: {
      arrow: `splide__arrow ${styles.custom_splide_arrow}`,
      prev: `splide__arrow--prev ${styles.thumb_arrow_prev}`,
      next: `splide__arrow--next ${styles.thumb_arrow_next}`,
    },
  };

  return (
    <div className={styles.wrapper}>
      <Splide
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
        options={mainOptions}
        className={styles.thumbMainSlider}
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        className={styles.splideNavigation}
      >
        {renderSlides()}
      </Splide>
    </div>
  );
};
