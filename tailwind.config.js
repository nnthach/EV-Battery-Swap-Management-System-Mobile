/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#2B5ACC",
          secondary: "#49AFF0",
          third: "#3CD2F6",
          four: "#53D8F6",
        },
      },
    },
  },
  plugins: [],
};
