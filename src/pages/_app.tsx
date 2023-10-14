import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/bootstrap.min.css";
import "../styles/elegant-icons.css";
import "../styles/style.css";

import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [globalTheme, setGlobalTheme] = useState<"light" | "dark">("light");

  return (
    <>
      <ThemeProvider theme={theme[globalTheme]}>
        {/* <button
        style={{border:"1px solid black", borderRadius:"10px", margin:"10px"}}
          onClick={() => {
            setGlobalTheme((prevState) =>
              prevState === "light" ? "dark" : "light"
            );
          }}
        >
          Toggle theme
        </button> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
