const path = require("path");

/** Windows-safe globs anchored to this config file (not process.cwd). */
function globHere(rel) {
  return path.join(__dirname, rel).replace(/\\/g, "/");
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    globHere("app/**/*.{js,ts,jsx,tsx,mdx}"),
    globHere("components/**/*.{js,ts,jsx,tsx,mdx}"),
    globHere("lib/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#1B3F73",
        secondary: "#2F8EDB",
        accent: "#6B7280",
        sitebg: "#FFFFFF",
        sitetext: "#1F2937",
      },
    },
  },
  plugins: [],
};
