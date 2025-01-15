"use client";
import React from "react";
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
  const styles = carouselStyles();
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box component="section" sx={styles.root}>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        sx={styles.button}
        className="embla__button--prev"
      />
      <Box component="div" sx={styles.viewport} ref={emblaRef}>
        <Box component="div" sx={styles.container}>
          {children?.map((child, index) => (
            <Box component="div" sx={styles.slide} key={index}>
              <Box component="div">{child}</Box>
            </Box>
          ))}
        </Box>
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          sx={styles.button}
          className="embla__button--next"
        />
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

// import React from "react";
// import { EmblaOptionsType } from "embla-carousel";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import useEmblaCarousel from "embla-carousel-react";

// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };

// const Carousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className="embla__dots">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={"embla__dot".concat(
//                 index === selectedIndex ? " embla__dot--selected" : ""
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;
