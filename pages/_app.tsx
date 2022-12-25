import "../styles/globals.css";
import "../styles/myStyle.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";

const rubikFonts = Rubik({
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={rubikFonts.className + " antialiased"}>
      <Component {...pageProps} />
    </div>
  );
}
