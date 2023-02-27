import "../styles/globals.css";

import { NoSsr } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingSpinner from "src/Components/LoadingSpinner";
import { pageService } from "src/services/pageServices";
import { ThemeProvider } from "styled-components";

import theme from "@/utils/Theme/theme";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    pageService.getPageData();
    setMounted(true);
  });

  return (
    <ThemeProvider theme={theme}>
      <NoSsr>
        {mounted ? <Component {...pageProps} /> : <LoadingSpinner />}
      </NoSsr>
    </ThemeProvider>
  );
}
