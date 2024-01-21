const path = require("path");

module.exports = {
  // `content` is replaced instead of extended, so this line has to be added in
  // the `content` of each app' tailwind.config.js
  purge: {
    content: [
      path.join(
        path.dirname(require.resolve("ghopay-sdk")),
        "**/*.{js,ts,jsx,tsx}",
        "./stories/*.stories.tsx"
      ),
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
  },
  theme: {
    extend: {},
  },
};
