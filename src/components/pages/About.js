import React from 'react';
import styled from "styled-components"
import Typed from 'react-typed';

const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;
const About = () => {


  return (

    
    
    <div
    
 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
      }}
    >


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Title>
        <Typed 
        className="typed-text"
        strings={["Hallo, ich bin Artur, 27 und Student",
       
      "Zur Zeit befinde ich mich im vierten Semester des Studiengangs betriebliches Informationsmanagement", 
      "Nebenbei arbeite in der Erwachsenenbildung für Mircrosoft Office-Produkte, als Handelsvertreter für einen Vertriebspartner der EWE und an kleineren IT-Projekten.",
      ]}
        typeSpeed={30}
        backSpeed={8}
        ></Typed>


        </Title>
  

    <div>
      
    </div>


    </div>

  );
};




export default About;