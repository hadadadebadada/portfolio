import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
/* import { Button, LangButton } from '../../globalStyles'; */
/* import { Context } from '../Wrapper'
 */
/* import { FormattedMessage } from 'react-intl'
 */

import {Button} from '../pages/skillSubpages/DivAndTextStyles'
import { FormattedMessage } from 'react-intl';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './Navbar.elements';
import {Title} from "../pages/skillSubpages/DivAndTextStyles"
import Home from '../pages/Home';



function Navbar2() {

    const context = useContext(Context)


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);




    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <img style={{ height: 40, width: 40 }} src={tableIcon} alt="Desksharing Logo" />

                            DESKSHARING
                            <img style={{ height: 40, width: 40 }} src={tableIcon} alt="Desksharing Logo" />

                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/home' onClick={closeMobileMenu}>

                                    <FormattedMessage
                                        id="navbar.home">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                            
                            </NavItem>
                            <NavItem>
                     
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/employeelist' onClick={closeMobileMenu}>
                                    <FormattedMessage
                                        id="navbar.employeefinder">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                 


                            </NavItem>




                            <LangButton value={context.locale = "de-DE"} onClick={context.selectLang}>🇩🇪</LangButton>
                            <LangButton value={context.locale = "en-US"} onClick={context.selectLang}>🇺🇸</LangButton>
                            <LangButton value={context.locale = "es-MX"} onClick={context.selectLang}>🇪🇸</LangButton>
                            <LangButton value={context.locale = "ru-RU"} onClick={context.selectLang}>🇷🇺</LangButton>







                        </NavMenu>{/*  */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>


    );
}

export default Navbar2;

