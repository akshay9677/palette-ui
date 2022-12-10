export const themes = {
  DEFAULT: "default",
};

class ThemeInstance {
  theme = {
    type: "",
    config: {},
  };
  constructor() {
    this.theme.type = themes["DEFAULT"];
  }
  useInstance({ type, config }) {
    this.theme.type = type;
    this.theme.config = config;
  }
  get _theme() {
    let { theme } = this || {};
    return theme;
  }
}

export const mergeTheme = (theme, config, type) => {
  let selectedTheme = theme[type];
  let mergedTheme = _.merge(selectedTheme, config);
  return setPlaceholders(mergedTheme);
};

const setPlaceholders = (object) => {
  let flatObject = flatten(object);
  Object.entries(flatObject).forEach(([key, value]) => {
    if (typeof value == "string" && value.includes("$")) {
      flatObject[key] = getProperty(object, `${value.substring(1)}`);
    }
  });
  return flatten.unflatten(flatObject);
};

export default new ThemeInstance();
