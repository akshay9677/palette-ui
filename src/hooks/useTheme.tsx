import {
  useCallback,
  useContext,
  useMemo,
  useState,
  createContext,
  useEffect,
} from "react";

type ThemeContextType = {
  isDark: Boolean;
  updateDark: (e: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

const useProvideTheme = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector("#mellow-root");
    if (body) {
      if (isDark) {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
      } else {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
      }
    }
  }, [isDark]);

  const updateDark = useCallback((val: boolean) => {
    setDark(val);
  }, []);
  return { isDark, updateDark };
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement;
}) => {
  const auth = useProvideTheme();

  return useMemo(
    () => (
      <ThemeContext.Provider value={auth}>{children}</ThemeContext.Provider>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth.isDark]
  );
};

export const useTheme = () => {
  return useContext<ThemeContextType>(ThemeContext);
};
