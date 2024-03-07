import typoGraphyPlugin from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      typoGraphyPlugin
  ],
    darkMode: 'selector'
}

