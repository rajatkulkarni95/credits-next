import { DefaultTheme, FontTheme } from "styled-components";

export const font: FontTheme = {
  face: "Inter",
  sizes: {
    xs: "22px",
    sm: "26px",
    md: "32px",
    lg: "36px",
    xxl: "108px",
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

const sizing = {
  one: "4px",
  two: "8px",
  three: "12px",
  four: "16px",
  five: "20px",
  six: "24px",
  seven: "36px",
  eight: "48px",
};

export const dark: DefaultTheme = {
  sizing,
  colors: {
    text: {
      default: "#FFFFFF",
      secondary: "#7A8C99",
      active: "#2EC4B6",
      negative: "#FF4040",
      highlight: "#FF9F1C",
      disabled: "#353F4C",
    },
    layout: {
      background: "#0A1014",
      foreground: "#1B2329",
      border: "#353F4C",
      accent: "#7A8C99",
    },
  },
};
