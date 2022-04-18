import React from 'react';
import Typed from 'react-typed';
import {Title} from '../pages/skillSubpages/DivAndTextStyles'
import Home  from './Home';

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


{/*     <Home></Home> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Title>
        <Typed 
        className="typed-text"
        strings={["Hallo, ich bin Artur, 28 und zur Zeit befinde ich im letzten Semester des Studiums für betriebliches Informationsmanagement, welches ich im Juni beenden werde",
        
      "Zusätzlich bin ich seit Sommer 2021 bei der ITEBO Unternehmensgruppe und dort als Projektmanager im E-Services-Team tätig", 
      "In meiner Freizeit schraube ich an kleinen IT-Projekten und betreibe diverse Sportarten, falls Sie weitere Fragen haben kontaktieren Sie mich gerne"
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