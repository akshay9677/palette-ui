import { themes } from "@storybook/theming";
import "../styles/globals.css";
import "./styles.css";

export const parameters = {
  darkMode: {
    darkClass: "theme-dark",
    lightClass: "theme-light",
    stylePreview: true,
    dark: {
      ...themes.dark,
      appBg: "#0A0A0A",
      barBg: "#0A0A0A",
      background: "#0A0A0A",
      appContentBg: "#0A0A0A",
    },
    light: {
      ...themes.light,
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
