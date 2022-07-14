import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "theme";
import GlobalStyles from "theme/global";
import useLocalStorageState from "use-local-storage-state";

import axios from "axios";
import { SWRConfig } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode] = useLocalStorageState("darkMode", {
    defaultValue: false,
  });

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Head>
          <title>Todo App - Vodofone</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
