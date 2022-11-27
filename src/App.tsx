import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Button variant="danger" />
      </div>
    </ThemeProvider>
  );
}
