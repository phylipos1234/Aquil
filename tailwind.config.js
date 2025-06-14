// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          berlingske: ['"Berlingske Serif"', 'serif'],
          // neutra: ['"Neutraface Text"', 'serif'],
          neutra: ['"Neutraface 2 Display"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
  