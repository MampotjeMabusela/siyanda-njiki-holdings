/**
 * Next.js PostCSS loader resolves plugins from the current working directory.
 * When `npm run dev` runs from the workspace root, cwd can be wrong — Tailwind then
 * misses `tailwind.config.js` and emits almost no utilities (page looks unstyled).
 * Pinning `config` to this file’s directory fixes that on Windows + npm workspaces.
 */
const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  },
};
