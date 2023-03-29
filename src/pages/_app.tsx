import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

import { ThemeProvider } from "@/contexts/ThemeProvider";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <div className={nunito.className}>
        <Component {...pageProps} key={router.asPath} />
      </div>
    </ThemeProvider>
  );
}
