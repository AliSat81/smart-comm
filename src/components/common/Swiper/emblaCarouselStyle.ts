import MuiStyles from "@/ts/types/MuiStyles";

const COLORS = {
  default: "#868789",
  active: "#00AAAD",
  buttonColor: "rgba(255, 255, 255, 0.8)",
  buttonHoverBg: "rgba(255, 255, 255, 0.1)",
} as const;

const SIZES = {
  slideSpacing: "1rem",
  buttonWidth: "3.5rem",
  borderRadius: "1.8rem",
  dotSize: {
    width: 10,
    height: 10,
  },
} as const;

const CSS_VARS = {
  slideHeight: "19rem",
  slideSize: "70%",
} as const;

export const carouselStyles: MuiStyles = () => ({
  root: {
    maxWidth: {
      xs: "100%",
      sm: "42rem",
    },
    margin: "auto",
    position: "relative",
    "--slide-height": CSS_VARS.slideHeight,
    "--slide-spacing": SIZES.slideSpacing,
    "--slide-size": CSS_VARS.slideSize,
  },

  viewport: {
    overflow: "hidden",
    borderRadius: SIZES.borderRadius,
  },

  container: {
    display: "flex",
    touchAction: "pan-y pinch-zoom",
    marginLeft: "calc(var(--slide-spacing) * -1)",
    userSelect: "none",
  },

  slide: {
    transform: "translate3d(0, 0, 0)",
    flex: "0 0 var(--slide-size)",
    minWidth: 0,
    paddingLeft: "var(--slide-spacing)",
    position: "relative",
  },

  slideImage: {
    borderRadius: SIZES.borderRadius,
    display: "block",
    height: "var(--slide-height)",
    width: "100%",
    objectFit: "cover",
  },

  button: {
    top: "0",
    color: COLORS.buttonColor,
    position: "absolute",
    backgroundColor: "transparent",
    border: "none",
    height: "calc(100% - 4.85rem)",
    width: SIZES.buttonWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.5rem",
    opacity: 0.7,
    transition: "opacity 0.3s",
    zIndex: 1,
    cursor: "pointer",
    padding: 0,

    ":hover": {
      opacity: 1,
    },

    "&:focus": {
      outline: "none",
      opacity: 1,
    },

    "&.embla__button--prev": {
      right: "0",
      marginLeft: {
        xs: "1rem",
        md: "-3rem",
      },
      "&:hover": {
        background: {
          xs: "transparent",
          md: `linear-gradient(to left, ${COLORS.buttonHoverBg}, transparent)`,
        },
        borderRadius: {
          xs: "0",
          md: "0 10px 10px 0",
        },
      },
    },

    "&.embla__button--next": {
      left: "0",
      marginRight: {
        xs: "1rem",
        md: "-3rem",
      },
      "&:hover": {
        background: {
          xs: "transparent",
          md: `linear-gradient(to right, ${COLORS.buttonHoverBg}, transparent)`,
        },
        borderRadius: {
          xs: "0",
          md: "10px 0 0 10px",
        },
      },
    },
  },

  dots: {
    position: "relative",
    marginTop: 1.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: {
      xs: 1,
      md: 0,
    },
    zIndex: 2,
    padding: {
      xs: "0.5rem",
      md: 0,
    },
  },

  dot: {
    minWidth: "unset",
    width: SIZES.dotSize.width,
    height: SIZES.dotSize.height,
    padding: 0,
    margin: {
      xs: "0 4px",
      md: "0 6px",
    },
    border: "none",
    borderRadius: "50%",
    backgroundColor: COLORS.default,
    transform: "scale(1)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    opacity: 0.8,

    "&:hover": {
      opacity: 1,
      backgroundColor: COLORS.default,
      transform: "scale(1.1)",
    },

    "&.active": {
      backgroundColor: COLORS.active,
      transform: "scale(1.3)",
      opacity: 1,

      "&:hover": {
        backgroundColor: COLORS.active,
        transform: "scale(1.3)",
      },
    },

    "@media (hover: none)": {
      padding: "12px",
      margin: "0",
    },
  },
});
