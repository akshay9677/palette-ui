import ThemeInstance from "@palette-ui/theme";
import getProperty from "dlv";
import { isEmpty } from "../../utils/validation";

export const getComponentTheme = (properties) => {
  let { name, props = {} } = properties || {};
  let theme = ThemeInstance.getMergedTheme();
  let componentStyles = getProperty(theme, `components.${name}`);
  let { baseStyle, ...styleProps } = componentStyles || {};
  if (!isEmpty(props)) {
    Object.entries(props).forEach(([key, value]) => {
      let style = getProperty(styleProps, `${key}.${value}`);
      if (!isEmpty(style)) {
        baseStyle = { ...baseStyle, ...style };
      } else {
        style = getProperty(styleProps, `${key}`);
        baseStyle = { ...baseStyle, ...style };
      }
    });
  }
  return baseStyle;
};
