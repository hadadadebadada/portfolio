import React from 'react';
import styled from "styled-components"
import Cards from "../cards/Cards"

const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const Services = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width:'100%'
      }}
    >

<div
      style={{
    
        height: '100%',
        width:'100%'
      }}
    >
       <Cards></Cards>   

></div>

 

 </div>
  );
};

export default Services;