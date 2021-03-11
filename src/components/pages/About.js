import React,{useRef} from 'react';
import styled from "styled-components"
import Typed from 'react-typed';
import {useSpring,animated, useChain} from 'react-spring'
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import Cards from '../cards/Cards'
const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;
const RightContainer = styled.div`
  justify-content: right;
  align-items: top;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Page = styled.div`
  display: flex;
  justify-content: Center;
  align-items: top;
    height: 250vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
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
        strings={["Hallo, ich bin Artur, 27, Student und Entwickler",
        "Nach dem Abitur arbeitete ich zunächst als Fundraiser für zahlreiche Hilfsorganisationen und absolvierte ein Praktikum bei einem IT/ Immoblien Start-Up in Spanien",
      "Schon immer interessierte ich mich stark für mathematische und informationstechnische Themen und began deswegen 2018 das Studium für technische Informatik",
      "Ich merkte jedoch schnell, dass mir der wirtschaftliche Aspekt aus meiner früheren Laufbahn fehlte und wechselte nach einem Jahr zum Studiengang betriebliches Informationsmanagement",
      "Nun befinde ich mich im vierten Semester und arbeite nebenbei in der Erwachsenenbildung für Informationstechnik, als Handelsvertreter für einen Vertriebspartner der EWE und an kleineren IT-Projekten.",
      "Falls ich Ihr Interesse geweckt habe melden Sie sich gerne bei mir :)"
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