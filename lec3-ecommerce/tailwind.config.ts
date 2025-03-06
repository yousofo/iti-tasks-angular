/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts,scss,css}", // Ensure Tailwind scans your HTML and TypeScript files
      "./node_modules/primeng/**/*.{js,ts,html}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };