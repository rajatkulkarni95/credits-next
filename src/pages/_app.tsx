import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/globalStyle";
import { dark } from "../theme/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
