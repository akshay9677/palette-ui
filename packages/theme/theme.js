import themesList from "./themes-list";
import _ from "lodash";
import flatten from "flat";
import getProperty from "dlv";

class ThemeInstance {
  theme = {
    type: "",
    config: {},
  };
  constructor() {
    this.theme.type = "default";
  }
  setTheme({ type, config }) {
    this.theme.type = type;
    this.theme.config = config;
  }
  getMergedTheme() {
    let { theme } = this || {};
    let { type, config } = theme || {};
    let selectedTheme = themesList[type];
    let mergedTheme = _.merge(selectedTheme, config);
    return setPlaceholders(mergedTheme);
  }
  get _theme() {
    let { theme } = this || {};
    return theme;
  }
}

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
