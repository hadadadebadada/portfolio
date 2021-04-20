import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Title} from "../pages/skillSubpages/DivAndTextStyles"
import {
    Nav,
    NavbarContainer,

    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    
} from './Navbar.elements';




function Navbar() {
    
 

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



  
    return (
        <>
            <IconContext.Provider value={{ color: 'orange' }}>
                <Nav>
                    <NavbarContainer>

                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/about' onClick={closeMobileMenu}>
                                <Title>About</Title>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/skills' onClick={closeMobileMenu}>
                                    <Title>Projekte</Title>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contact' onClick={closeMobileMenu}>
                                    <Title>Kontakt</Title>
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
