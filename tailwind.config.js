/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#faf9f6",       // Soft Warm White
          primary: "#e8f0fe",  // Soft Blue
          secondary: "#fef7e0",// Soft Yellow
          green: "#e6f4ea",    // Soft Green
          pink: "#fce8e6",     // Soft Red/Pink
        }
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
      }
    },
  },
  plugins: [],
}