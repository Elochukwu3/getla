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
        "footer":"rgba(16, 11, 32, 1)",
        "move": "#1c152e"
      },
      textColor: {
        "custom-purple": "#150E28",
        "custom-light": "#903aff",
        "custom-highlight": "#d434fe",
        "custom-pp": "rgba(144, 58, 255, 1)",
        "custom-lighter": "background: rgba(212, 52, 254, 1)  ",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to left, rgba(144, 58, 255, 0.7),rgba(254, 52, 185, 1))",
        award:
          "linear-gradient(0deg, rgba(212, 52, 254, 0.12), rgba(212, 52, 254, 0.12))",
        award2:
          "linear-gradient(0deg, rgba(144, 58, 255, 0.12), rgba(144, 58, 255, 0.12));",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
        unical: ["Unica One", "cursive"],
        tommy: ["MADE TOMMY Outline", "sans-serif"],
      },
      spacing: {
        "3px": "3px",
      },
      invert: {
        60: "60%",
      },
      borderColor:{
        'custom-purple': "rgba(144, 58, 255, 1)",
        'custom-pink': "rgba(212, 52, 254, 1)",
      },
      width:{
        "sm":"95%"
      },
      screens:{
        "mobile": "330px"
      }
    },
   
  },
  plugins: [],
};
