import React from 'react';
import Typed from 'react-typed';
import {Title} from '../pages/skillSubpages/DivAndTextStyles'


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
       
      "Zur Zeit befinde ich im vierten Semester für betriebliches Informationsmanagement", 
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