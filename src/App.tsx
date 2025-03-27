import { ThemeProvider } from "@mui/material";
import "./App.css";
import Login from "./pages/Login/Login";
import theme from "./theme.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Login />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
