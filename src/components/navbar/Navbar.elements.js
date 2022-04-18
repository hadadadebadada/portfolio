import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background-color: ${props => props.theme.pageBackground};
  height: 80px;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 10px 5px 5px #000;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;


export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
/*     color: ${props => props.theme.tagLineColor};
 */    color: black;
/*     background-color: ${props => props.theme.tagLineColor};
 */    top: 0;
    left:53%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
   
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  position:"fixed";
  top: ${props=>props.visible ? '0' : '-60px'};
  align-items: center;
  list-style: none;
  text-align: center;
  transition: 'top 0.6s';
    padding-left: 35%;
    padding-right: 50%;


  @media screen and (max-width: 960px) {
    display: flex;
 
    flex-direction: column;
    width:20vh;
    height: 70vh;
    align-items: center;
    text-align: center;
    padding-left:1%;
    padding-right:100%;
    box-sizing: content-box;
    position: relative;
    top: 68px;
    left: ${({ click }) => (click ? 0 : '-1000%')};
    opacity: 1;
    transition: all 0.1s ease;

   
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    padding-left:100px;
  }
`;

export const NavLinks = styled(Link)`
  color: ${props => props.theme.tagLineColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  padding-left:0%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 10%;
    width:40vh;
    display: flex;
    border-style: dashed;
    background-color:${props => props.theme.tagLineColor}; 
    border-radius: 25px;


    &:hover {
      color: black;
      background-color:white;

      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
