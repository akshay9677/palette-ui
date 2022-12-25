import "./style.css";
import { useState, useEffect } from "react";
import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import ThemeInstance from "@palette-ui/theme";

const channel = addons.getChannel();

function ThemeWrapper(props) {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      ThemeInstance.setTheme({ type: "dark", config: {} });
    } else {
      ThemeInstance.setTheme({ type: "default", config: {} });
    }
  }, [isDark]);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return <>{props.children}</>;
}

export const decorators = [
  (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];

export const parameters = {
  layout: "centered",
  darkMode: {
    darkClass: "darkClass",
    lightClass: "lightClass",
    stylePreview: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
