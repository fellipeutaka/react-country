import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { base } from "@/styles/themes/base";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={base}>
      <GlobalStyles />
      <div className={nunito.className}>
        <Component {...pageProps} key={router.asPath} />
      </div>
    </ThemeProvider>
  );
}
