import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./conponents/Header";
import { ThemeProvider } from "../contexts/themeContext.jsx";


function App() {

  return (
    <ThemeProvider>
      <Header></Header>
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;
