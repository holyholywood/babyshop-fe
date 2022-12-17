import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

const rubikFonts = Rubik({
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubikFonts.className}>
      <CssBaseline />
      <Component {...pageProps} />
    </main>
  );
}
