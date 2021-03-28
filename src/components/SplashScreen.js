import React from 'react'
import styled from "styled-components"
import { CgSun } from "react-icons/cg"
import { HiMoon } from "react-icons/hi"
import Navbar from '../components/navbar/Navbar'
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
    transition: all .5s ease;
`;


const Page = styled.div`
  display: flex;
  justify-content: Center;
  align-items: top;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;



const RightContainer = styled.div`
  justify-content: right;
  align-items: top;
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



function SplashScreen(props) {
    function changeTheme() {
        if (props.theme === "dark") {
            props.setTheme("light");
        } else {
            props.setTheme("dark")
        }

    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
    return (
        <Page>


            <RightContainer>


                <Router>
                    <GlobalStyle />
                    <ScrollToTop />
                    <Navbar />

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

                        <Route path='/android' exact component={android} />
                        <Route path='/edu' exact component={epk} />
                        <Route path='/python' exact component={python} />
                        <Route path='/R' exact component={R} />
                        <Route path='/impressum' exact component={impressum} />



                    </Switch>
                    <Footer></Footer>

                </Router>
            </RightContainer>

        </Page>
    )
}

export default SplashScreen
