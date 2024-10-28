import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { SSTheme } from "./ds/themes";

const App = () => (
  <ThemeProvider theme={SSTheme}>
    <Home />
  </ThemeProvider>
);

export default App;
