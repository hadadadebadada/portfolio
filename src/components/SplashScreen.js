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
import epk from './pages/skillSubpages/EPK'
import OOAD from './pages/skillSubpages/OOAD'
import sql from './pages/skillSubpages/Sql'
import android from './pages/skillSubpages/Android'
import impressum from './pages/Impressum'
/* import Python from './pages/skillSubpages/Python'
 */
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

const Container = styled.div`
  justify-content: left;
  align-items: top;
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: center;
`;

const RightContainer = styled.div`
  justify-content: right;
  align-items: top;
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
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
                    {/*     <ScrollToTop />
 */}                 <Navbar />

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
                        <Route path='/android' exact component={android} />
                        <Route path='/epk' exact component={epk} />
                        <Route path='/OOAD' exact component={OOAD} />
                        <Route path='/python' exact component={python} />
                        <Route path='/R' exact component={R} />
                        <Route path='/sql' exact component={sql} />
                        <Route path='/impressum' exact component={impressum} />



                        {/* <Route path='/products' /> */}



                    </Switch>
                    <Footer></Footer>

                </Router>
            </RightContainer>

        </Page>
    )
}

export default SplashScreen
