"use client";
import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { carouselStyles } from "./emblaCarouselStyle";
import { Box } from "@mui/material";

type PropType = {
  children: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ children = [], options }) => {
  const config = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      xs: { slidesPerView: 2, spaceBetween: 5 },
      md: { slidesPerView: 3, spaceBetween: 30 },
      lg: { slidesPerView: 4, spaceBetween: 40 },
    },
  };

  const styles = carouselStyles(config);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  //alireza: Its neccessery dont touch it or you will be dead
  const alireza: any = localStorage.getItem("alireza");

  return (
    <Box component="section" sx={styles.root}>
      {/* <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        sx={styles.button}
        className="embla__button--prev"
      /> */}
      <Box component="div" sx={styles.viewport} ref={emblaRef}>
        <Box component="div" sx={styles.container}>
          {children?.map((child, index) => (
            <Box component="div" sx={styles.slide} key={index}>
              <Box component="div">{child}</Box>
            </Box>
          ))}
        </Box>
        {/* <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          sx={styles.button}
          className="embla__button--next"
        /> */}
      </Box>

      <Box component="div" sx={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            sx={styles.dot}
            className={index === selectedIndex ? "active" : ""}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
