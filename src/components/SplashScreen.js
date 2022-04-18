import React ,{useState} from 'react'
import styled from "styled-components"
import { CgSun } from "react-icons/cg"
import { HiMoon } from "react-icons/hi"


import { Context } from './Wrapper'
import { IntlProvider } from "react-intl"

import English from './languages/en-US.json';
import Deutsch from './languages/de-DE.json';
import Spanish from './languages/es-MX.json';
import Russisch from './languages/ru-RU.json';
import { Title, Div2 } from '../components/pages/skillSubpages/DivAndTextStyles'

import { IconContext } from 'react-icons/lib';
import { FormattedMessage } from 'react-intl'

import GlobalStyle from '../globalStyles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import about from './pages/About'
import skills from './pages/Skills'
import contact from './pages/Contact'
import Footer from './footer/Footer'
import Home from './pages/Home'
import java from './pages/skillSubpages/Java'
import python from './pages/skillSubpages/Python'
import R from './pages/skillSubpages/R'
import epk from './pages/EPK'
import android from './pages/skillSubpages/Android'
import impressum from './pages/Impressum'
import javascript from './pages/skillSubpages/JavaScript'
import ScrollToTop from '../scrollToTop'
import TorusTunnel from './pages/skillSubpages/JavaScriptSub/TorusTunnel'
import img from '../assets/images/landingpage/01-3.jpg'
const Toggle = styled.button`
    cursor: pointer;
    height: 60px;
    width: 60px; 
    
      
    border-radius: 50%;
    justify-content: space-between;
        border: none;
        background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
/*     transition: all .5s ease; */
`;


const Page = styled.div`
  display: flex;
  justify-content: Center;
  align-items: top;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
/*   transition: all .5s ease; */
`;

const LangButton = styled.button`
 --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;



const RightContainer = styled.div`
  justify-content: right;
  align-items: top;
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const local = navigator.language;

let lang = Deutsch;

if (local === "en-US") {
    lang = English;
}
if (local === "es-MX") {
    lang = Spanish;
}
if (local === "de-DE") {
    lang = Deutsch;
}
if (local === "ru-RU") {
    lang = Russisch;
}




function SplashScreen(props) {

    function changeTheme() {
        if (props.theme === "dark") {
            props.setTheme("light");
        } else {
            props.setTheme("dark")
        }

    };



    //const [lang, setLang]  = useState()
    const [locale, setLocale] = useState(local)
 
    const [messages, setMessages] = useState(lang);
    

    function setDe(){
        setMessages(Deutsch);

    }
    function setEng(){

        setMessages(English);
    }
    function setRu(){
        setMessages(Russisch)

    }
    function setEsp(){
        setMessages(Spanish);

    }

    
/*     function changeLang(){
        setLang(English)
    } */
   // const context = useContext(Context)

   



    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
   
    return (
        <Page>

<IconContext.Provider value={{ color: '#fff' }}>


            <RightContainer>


                <Router>
                    <GlobalStyle />
                    <ScrollToTop />
                   
                    <IntlProvider messages={messages} locale={locale}>
                      
                      <div style={{display:'flex'}}>
                      <LangButton onClick={setDe}>🇩🇪</LangButton>
                    <LangButton onClick={setEng}>🇺🇸</LangButton>

                    <LangButton onClick={setEsp}>🇪🇸</LangButton>
                            <LangButton onClick={setRu}>🇷🇺</LangButton>


                      </div>
  
<Title>
{/* <FormattedMessage
                                                id="app.welcome">

                                            </FormattedMessage> */}
</Title>
                


            
              
        
        

                    <Toggle onClick={changeTheme}>
                        {icon}
                    </Toggle>


                    <Switch>
                        <Route exact path="/" render={() => (
                            <Redirect to="/skills" exact component={skills} />
                        )} />
                        <Route path='/about' exact component={about} />
                        <Route path='/home' exact component={Home} />
                        <Route path='/skills' exact component={skills} />
                        <Route path='/contact' exact component={contact} />
                        <Route path='/java' exact component={java} />
                        <Route path='/javascript' exact component={javascript} />
                        <Route path='/threejs' exact component={TorusTunnel}/>

                        <Route path='/android' exact component={android} />
                        <Route path='/edu' exact component={epk} />
                        <Route path='/python' exact component={python} />
                        <Route path='/R' exact component={R} />
                        <Route path='/impressum' exact component={impressum} />



                    </Switch>
                    </IntlProvider>
                            <Footer></Footer>

                </Router>
            </RightContainer>

          
            </IconContext.Provider>

        </Page>
    )
}

export default SplashScreen
