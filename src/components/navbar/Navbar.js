import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import styled from "styled-components"

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './Navbar.elements';
const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;



function Navbar() {
    
 

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
            <IconContext.Provider value={{ color: 'orange' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>


                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/about' onClick={closeMobileMenu}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/skills' onClick={closeMobileMenu}>
                                    <Title>Skills</Title>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contact' onClick={closeMobileMenu}>
                                    Contact
                                </NavLinks>
                            </NavItem>
{/*                             <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='contact'>
                                        <Button primary>Contact</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/contact'>
                                        <Button onClick={closeMobileMenu} fontBig primary>
                                            Contact
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn> */}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
