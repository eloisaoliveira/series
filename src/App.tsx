import { ThemeProvider } from "styled-components";
import { Series } from "./pages/Series";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Series />
    </ThemeProvider>
   
  )
}