import "../styles/globals.css";

import { useEffect } from "react";
import { pageService } from "src/services/pageServices";
import { ThemeProvider } from "styled-components";

import theme from "@/utils/Theme/theme";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    pageService.getPageData();
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
