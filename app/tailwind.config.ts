/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './App.vue',
    './{app,pages,components,layouts}/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
