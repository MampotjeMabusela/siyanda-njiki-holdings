/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * Required for npm workspaces / running `next` from repo root:
   * without `relative: true`, `./app/**` resolves from process.cwd (wrong folder) → ZERO matches → blank Tailwind CSS.
   * With `relative: true`, globs resolve from THIS config file (`snh-site/`) always.
   */
  content: {
    relative: true,
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
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
        sitebg: "#F4F8FC",
        sitetext: "#1F2937",
      },
    },
  },
  plugins: [],
};
