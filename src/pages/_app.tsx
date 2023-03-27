import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { base } from "@/styles/themes/base";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={base}>
      <GlobalStyles />
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
