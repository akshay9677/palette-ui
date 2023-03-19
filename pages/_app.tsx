import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "src/hooks/useTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="theme-light" id="mellow-root">
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
