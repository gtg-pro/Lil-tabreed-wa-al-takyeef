/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141414",
        border: "#262626",
        primary: {
          DEFAULT: "#E11D2E",
          hover: "#B91523",
        },
        muted: "#A3A3A3",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
