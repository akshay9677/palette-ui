const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "8px",
        sm: "10px",
        md: "12px",
        base: "14px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
      },
      fontWeight: {
        light: "300",
        medium: "400",
        bold: "500",
        bolder: "600",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "primary-content": "var(--primary-content)",
        shadow: "var(--shadow-inset)",
        gray1: "var(--gray-01)",
        gray2: "var(--gray-02)",
        gray3: "var(--gray-03)",
        gray4: "var(--gray-04)",
        gray5: "var(--gray-05)",
        gray6: "var(--gray-06)",
        gray7: "var(--gray-07)",
        gray8: "var(--gray-08)",
        gray9: "var(--gray-09)",
        gray10: "var(--gray-10)",
      },
      fontFamily: {
        sans: ["SF Pro", ...defaultTheme.fontFamily.sans],
        display: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        popover: {
          from: { transform: "translateY(-3px)" },
          to: { transform: "translateY(0px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "popover-bounce": "popover 100ms forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
