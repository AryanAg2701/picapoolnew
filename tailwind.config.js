/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/picatest.tsx",
  ],
  theme: {
    extend: {
      fill: {
        primaryOrange: 'var(--primary-orange, #ff8d41)',
      },
    },
  },
  plugins: [],
}