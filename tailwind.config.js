/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.vue", "./src/components/orderMsc.vue" , "./src/components/orderSpb.vue", "./index.html"],
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
