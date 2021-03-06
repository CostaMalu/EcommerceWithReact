import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {

  const [darkMode, setDarkMode] = useState(false); 
  const palleteType = darkMode ? 'dark' : 'light'; 

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode); 
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
        <Catalog></Catalog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
