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
    borderRadius: "2.4rem",
    maxWidth: {
      xs: "100%",
      // sm: "100%",
      md: "70.4rem",
      lg: "92.8rem",
      xl: "131rem",
    },
    margin: "auto",
    padding: {
      xs: "2rem",
      // md: "70.4rem",
      lg: "4rem",
      xl: "8rem",
    },
    position: "relative",
    "--slide-height": "19rem",
    "--slide-spacing": "1rem",
    "--slide-size": "100%",
    "--slide-spacing-sm": "1.6rem",
    "--slide-size-sm": "50%",
    "--slide-spacing-lg": "2rem",
    "--slide-size-lg": "calc(100% / 3)",
    backgroundColor: {
      xs: "transparent",
      sm: "#444549",
    },
  },

  viewport: {
    overflow: "hidden",
  },

  container: {
    display: "flex",
    touchAction: "pan-y pinch-zoom",
    marginLeft: {
      xs: "calc(var(--slide-spacing) * -1)",
      sm: "calc(var(--slide-spacing-sm) * -1)",
      lg: "calc(var(--slide-spacing-lg) * -1)",
    },
    userSelect: "none",
  },

  slide: {
    transform: "translate3d(-4%, 0, 0)",
    flex: {
      xs: "0 0 var(--slide-size)",
      sm: "0 0 var(--slide-size-sm)",
      lg: "0 0 var(--slide-size-lg)",
    },
    paddingLeft: {
      xs: "var(--slide-spacing)",
      sm: "var(--slide-spacing-sm)",
      lg: "var(--slide-spacing-lg)",
    },
    minWidth: 0,
    position: "relative",
  },

  slideImage: {
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
          md: "0 1rem",
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
          md: "1rem 0",
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
    width: {
      xs: 6,
      sm: 10,
    },
    height: {
      xs: 6,
      sm: 10,
    },
    padding: 0,
    margin: {
      xs: "0 2px",
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
      padding: {
        xs: "1rem",
        sm: "1.2rem",
      },
      margin: "0",
    },
  },
});
