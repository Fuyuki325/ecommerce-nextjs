import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fcf3f6",
          "100": "#fbe8f0",
          "200": "#f8d2e1",
          "300": "#f4adc8",
          "400": "#ef94b4",
          "500": "#e15381",
          "600": "#cf335d",
          "700": "#b32346",
          "800": "#94203b",
          "900": "#7c1f34",
        },
        secondary: {
          "50": "#f0f8ff",
          "100": "#e0f0fe",
          "200": "#bae2fd",
          "300": "#7ccbfd",
          "400": "#37b1f9",
          "500": "#0d97ea",
          "600": "#016fb9",
          "700": "#025fa2",
          "800": "#065186",
          "900": "#0c446e",
        },
        white: "#FFFFFF",
        black: "#1f1f1f",
        slate: colors.slate,
        gray: colors.gray,

        neutral: colors.neutral,
        red: colors.red,
        green: colors.green,
        transparent: "transparent",

        heading: colors.black,
        paragraph: colors.gray[600],
        label: colors.black,
        placeholder: colors.gray[400],
        body: colors.slate[700],

        table: colors.gray[900],
        background: colors.gray[100],

        border: colors.gray[200],
        "inputs-border": colors.gray[300],
        icon: colors.gray[500],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",

        // custom font size
        h1: [
          "4rem",
          {
            lineHeight: "5rem",
            letterSpacing: "0.0375em",
            fontWeight: "700",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.035em",
            fontWeight: "700",
          },
        ],
        h3: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        h4: [
          "2rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],

        p: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],

        span: [
          "0.75rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
      },
      container: {
        center: true,
        screens: {
          xs: "360px",
          sm: "575px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1680px",
          "4xl": "1920px",
        },
        padding: {
          DEFAULT: "0",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "0",
          "2xl": "2rem",
          "3xl": "2rem",
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
