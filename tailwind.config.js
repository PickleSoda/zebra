/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        zebraBackground: "#222222",
        zebraBorder: "#8E6B8ECC",
      },
      fontFamily: {
        stalinist: ['"Stalinist One"', 'sans-serif'] // Ensure to give a fallback font
      }
    },
  },
  plugins: [],
};
