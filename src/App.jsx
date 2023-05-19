import "@/styles/globals.css";
import { Routes } from "./routes";

import { ThemeProvider } from "@/components";

const App = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

export default App;
