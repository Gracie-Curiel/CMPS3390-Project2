// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tripplanner: {
          primary: "#66C4E3",
          secondary: "#E36687",
          accent: "#FFC857",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
