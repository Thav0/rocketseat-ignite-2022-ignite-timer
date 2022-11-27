import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Button variant="danger" />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
