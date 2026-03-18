/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blush: "0 14px 40px rgba(236, 132, 154, 0.2)"
      },
      animation: {
        "soft-pulse": "softPulse 2.6s ease-in-out infinite"
      },
      keyframes: {
        softPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.01)", opacity: "0.92" }
        }
      }
    }
  },
  plugins: []
};
