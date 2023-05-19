/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./dist/**/*.html", "./src/ejs/**/*.ejs"],
  theme: {
    screens: {
      xl: { max: "1919.98px" },
      lg: { max: "1535.98px" },
      md: { max: "1279.98px" },
      sm: { max: "1023.98px" },
      xs: { max: "767.98px" },
      // ah -> any-hover
      ah: { min: "1280px" },
    },
    extend: {
      gridTemplateColumns: {
        'footer': '320px repeat(2, minmax(0, 1fr)) 320px',
      },
      spacing: {
        3.75: ".9375rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.75: "2.1875rem",
        10.5: "2.625rem",
        12.5: "3.125rem",
        13.75: "3.4375rem",
        15: "3.75rem",
        17.5: "4.375rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
      },
      colors: {
        main: "#1E96DC",
        text: "#696A6B",
        title: "#141E27",
        border: "#E6E6E6",
      },
      borderColor: {
        DEFAULT: "#E6E6E6",
      },
      boxShadow: {
        DEFAULT: "0px 2px 10px 1px rgba(20, 30, 39, 0.15)",
      },
      backgroundImage:{
        
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeOutDown: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        zoomIn: {
          "0%": {
            transform: "scale(.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        whatsapp: {
          "0%": {
            transform: "scale(1) translateX(0)",
          },
          "20%": {
            transform: "scale(1.2) translateX(0)",
          },
          "40%": {
            transform: "scale(1.2) translateX(-.1rem)",
          },
          "50%": {
            transform: "scale(1.2) translateX(.1rem)",
          },
          "60%": {
            transform: "scale(1.2) translateX(-.1rem)",
          },
          "70%": {
            transform: "scale(1.2) translateX(.1rem)",
          },
          "80%": {
            transform: "scale(1.2) translateX(0)",
          },
          "100%": {
            transform: "scale(1) translateX(0)",
          },
        }
      },
      animation: {
        fadeIn: "fadeIn 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        fadeInUp: "fadeInUp 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        fadeInDown: "fadeInDown 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        fadeOutDown: "fadeOutDown 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        fadeInLeft: "fadeInLeft 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        fadeInRight: "fadeInRight 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        zoomIn: "zoomIn 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        zoomOut: "zoomOut 600ms cubic-bezier(0.5, 0, 0, 1) backwards",
        "ping-slow": "ping 5000ms",
        "spin-slow": "spin 10000ms linear infinite",
        "bounce-slow": "bounce 5000ms backwards infinite",
        "zoomOut-slow": "zoomOut 5000ms linear backwards",
        "fadeInUp-1s": "fadeInUp 1000ms backwards",
        "whatsapp": "whatsapp 1000ms backwards infinite",
      },
      transitionDuration: {
        DEFAULT: "600ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.5, 0, 0, 1)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#696A6B",
            a: {
              color: "#1E96DC",
              "&:hover": {
                "text-decoration-line": "underline",
              },
            },
            "ul>li::marker": {
              color: "#1E96DC",
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "Arial", "Helvetica", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animation-delay"),
  ],
};
