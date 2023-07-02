/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  screens: {
    vs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
  fontSize: {
    xs: "1rem",
    sm: "1.2",
    tiny: "1.4rem",
    base: "1.6rem",
    lg: "2.0rem",
    xl: "2.4rem",
  },
  backgroundColor: {
    primary: "#f5cf55",
    "primary-deep": "#f3c154",
    "secondary-light": "#ffffff",
    "secondary-dark": "#262e35",
    "primary-light": "#f5f7fb",
    "primary-dark": "#303841",
    "accent-light": "#ffffff",
    "accent-dark": "#36404a",
    "input-dark": "#36404a",
    "input-light": "#e6ebf5",
  },
  colors: {
    primary: "#f5cf55",
    "primary-light": "#343a40",
    "primary-dark": "#eff2f7",
    "secondary-light": "#7a7f9a",
    "secondary-dark": "#abb4d2",
    "blue-100": "#e8ecf4",
    error: "#ef476f",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#2196f3",
  },

  extend: {},
};
export const plugins = [];
