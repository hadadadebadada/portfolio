import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider, css } from 'styled-components'
import Splash from './components/SplashScreen'
import { useState } from 'react'



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



  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
      
    </ThemeProvider>
  );
}

export default App;
