import { createContext } from "react";
import ThemeInstance from "@palette-ui/theme";

export const ThemeContext = createContext({
  theme: ThemeInstance.getMergedTheme(),
});

export const ThemeContextProvider = (props) => {
  const [theme, setThemeData] = useState(ThemeInstance.getMergedTheme());
  const setTheme = (props) => {
    ThemeInstance.setTheme(props);
    setThemeData(ThemeInstance.getMergedTheme());
  };

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
