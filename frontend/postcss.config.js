const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./src/assets/tailwind.js"), require("autoprefixer")],
};
