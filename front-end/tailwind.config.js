/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        172: "172px",
      },
      height: {
        53: "53px",
      },
      borderRadius: {
        4: "4px",
      },
      backgroundColor: {
        "custom-purple": "#150E28",
        "custom-light": "#903aff",
        "custom-highlight": "#d434fe",
      },
      textColor: {
        "custom-purple": "#150E28",
        "custom-light": "#903aff",
        "custom-highlight": "#d434fe",
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(to left, rgba(144, 58, 255, 0.7),rgba(254, 52, 185, 1))",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
      },
      spacing:{
        "3px": "3px"
      }
    },
  },
  plugins: [],
};
