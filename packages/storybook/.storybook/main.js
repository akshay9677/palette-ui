module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../../react/src/components/**/*.stories.mdx",
    "../../react/src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  typescript: {
    reactDocgen: "none",
  },
};
