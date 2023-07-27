/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = 'class';
export const safelist = [
  // {
  //   pattern: /[hw]-\[[0-9]+px\]/
  // }
  'min-h-[20px]',
  'max-h-[20px]',
  'min-w-[20px]',
  'max-w-[20px]',
  'min-h-[36px]',
  'max-h-[36px]',
  'min-w-[36px]',
  'max-w-[36px]',
  'min-h-[96px]',
  'max-h-[96px]',
  'min-w-[96px]',
  'max-w-[96px]'
];

export const theme = {
  screens: {
    vs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
  },

  extend: {
    fontSize: {
      xs: '1rem',
      sm: '1.2',
      tiny: '1.4rem',
      base: '1.6rem',
      lg: '2.0rem',
      xl: '2.4rem'
    },
    colors: {
      primary: '#f5cf55',
      error: '#ef476f',
      success: '#4caf50',
      warning: '#ff9800',
      info: '#2196f3',
      'text-primary-light': '#343a40',
      'text-primary-dark': '#eff2f7',
      'text-secondary-light': '#7a7f9a',
      'text-secondary-dark': '#abb4d2',
      'text-blue-100': '#e8ecf4',
      'primary-deep': '#f3c154',
      'primary-light': '#f5f7fb',
      'primary-dark': '#303841',
      'secondary-light': '#ffffff',
      'secondary-dark': '#262e35',
      'tertiary-light': '#f8f9fa',
      'tertiary-dark': '#36404a',
      'input-dark': '#36404a',
      'input-light': '#e6ebf5'
    },
    maxWidth: {
      'left-content': '400px'
    }
  }
};

export const plugins = [];
