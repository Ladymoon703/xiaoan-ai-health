/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"SF Pro Display"', '"PingFang SC"', '"HarmonyOS Sans"', 'system-ui', 'sans-serif'],
        sans: ['"SF Pro Text"', '"PingFang SC"', '"HarmonyOS Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        warm: {
          50: "#fffaf4",
          100: "#fff3e6",
          200: "#ffe4c7",
          300: "#ffd0a3",
          400: "#ffb478",
          500: "#ff9a52",
          600: "#ea7b3a",
        },
        cream: {
          50: "#fbf8f3",
          100: "#f6f1e8",
          200: "#ece3d1",
        },
        ink: {
          900: "#0b1020",
          700: "#22263f",
          500: "#55607a",
          300: "#aab3c5",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(249, 115, 22, 0.28)",
        card: "0 20px 60px -20px rgba(249, 115, 22, 0.22)",
        inner: "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
        heartbeat: {
          "0%,100%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.15)" },
          "60%": { transform: "scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        blink: "blink 5s ease-in-out infinite",
        heartbeat: "heartbeat 1.6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        pop: "pop 0.35s ease-out both",
      },
    },
  },
  plugins: [],
};
