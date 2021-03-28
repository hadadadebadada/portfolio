import './App.css';
import { ThemeProvider } from 'styled-components'
import Splash from './components/SplashScreen'
import { useState, useEffect } from 'react'

/* import  { Helmet } from 'react-helmet'
 */
const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
}
const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.title = "Artur Pfeifer Portfolio"
  }, []);


  return (
    <ThemeProvider theme={themes[theme]}>


      <Splash theme={theme} setTheme={setTheme} />

    </ThemeProvider>

  );
}

export default App;
