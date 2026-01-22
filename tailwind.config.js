/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Poppins", "var(--font-poppins)", "sans-serif"],
    },
  },
};
export const plugins = [];
