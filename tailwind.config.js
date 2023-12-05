/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#b9c4af",
          "secondary": "#4a6357",
          "accent": "#7a9c99",
          "neutral": "#242c20",
          "base-100": "#090b08",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

