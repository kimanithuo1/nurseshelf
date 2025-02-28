/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#285D66", // Teal
          light: "#3A8491",
          dark: "#1C4047",
        },
        secondary: {
          DEFAULT: "#B7DBC8", // Mint Green
          light: "#D0E9DB",
          dark: "#9ECDB5",
        },
        tertiary: {
          DEFAULT: "#E1DF66", // Yellow
          light: "#E8E68A",
          dark: "#D9D742",
        },
        accent: {
          DEFAULT: "#6DA095", // Sea Green
          light: "#8FB3AA",
          dark: "#5B8D80",
        },
        background: "#F5F7F7",
        surface: "#FFFFFF",
        text: {
          primary: "#333333",
          secondary: "#666666",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          muted: "hsl(var(--sidebar-muted))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
        },
        mint: "#B7DBC8",
        teal: "#285D66",
        yellow: "#E1DF66",
        seagreen: "#6DA095",
        light: "#D4DCDC",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

