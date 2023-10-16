import { ThemeProvider } from "styled-components";
import { SeriesProvider } from "./contexts/SeriesContext"; 
import { Series } from "./pages/Series";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <SeriesProvider>
        <Series />
      </SeriesProvider>
    </ThemeProvider>
   
  )
}