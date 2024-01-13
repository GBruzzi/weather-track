import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import themes from "./styles/themes";
import { useState, useMemo } from "react";
import moon from "./images/moon.png";
import sun from "./images/sun.png";

function App() {
  const [theme,setTheme] = useState('dark');

  const sunImage = theme === 'dark' ? moon : sun;

  // useMemo garante que esse estado só mude ao utilizar essa função
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header  onToggleTheme = {handleToggleTheme} sunImage = {sunImage}/>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
