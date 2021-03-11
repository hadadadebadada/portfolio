import React, { useRef } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import styled from 'styled-components'
import CardsStyle from './CardsStyle'
import { SiPython } from 'react-icons/si'
import { useSpring, animated, useChain } from 'react-spring'

const Div1 = styled.div`
    padding: 4rem;
    display: flex;
    width:100%;
  background-color: ${props => props.theme.pageBackground};
 
`;
const Div2 = styled.div`

    display: flex;
    flex-flow: column;
    align-items: center;
  
    width: 100%;
    margin: 0 auto;

  background-color: ${props => props.theme.pageBackground};
 
`;
const Div3 = styled.div`
    position: relative;
    width: 100%;


  background-color: ${props => props.theme.pageBackground};
 
`;


const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
    align-items:center;
`;
const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      position: "absolute",
      transform: 'scale(0.2)',
      textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
      color: 'orange',

    },
    to: [{
      opacity: 1,
      transform: 'scale(2.0)',
      titleColor: "orange"

    },
    {
      opacity: 0,
      transform: 'scale(0.5)',
      titleColor: "orange"

    }
    ],
    ref: ref
  });
  return spring;

}


function Cards() {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);
  const text4Style = useAnimation(text4Ref);


  useChain([text1Ref, text2Ref, text3Ref, text4Ref])

  return (


    <Div1>



      <Div2>
        <animated.h1 style={text1Style} >Willkommen</animated.h1>
        <animated.h1 style={text2Style}>zu meinem Portfolio</animated.h1>
        <br></br>

        <Div3 className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Objektoriente Konzepte mit Java'
              src='images/java.png'
              label='Java'
              path='/java'
            />
            <CardItem
              src='images/R.png'
              text='mit Spezialisierung auf Regressionsprognosen, Assziotionsanalyse/- visualisierung und Operations Research'
              label='R'
              path='/R'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem


              src='images/python.png'
              text='Backend mit Django /REST und grundlegende Kenntnisse der data analysis mit scrapy, pandas, scikit-learn, matplotlib'

              label='Python'
              path='/python'
            />
            <CardItem
              src='images/js.png'
              text='React-Frontend mit HTML5 und CSS auf Desktop oder Mobile'
              label='JavaScript'
              path='/javascript'
            />
            <CardItem
              src='images/android.png'
              text='Mobile Apps mit Java'
              label='Android'
              path='/android'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem


              src='images/OOAD.png'
              text='Plichten/- Lastenhefte mit UML-(Analyse/-) Klassendiagrammen '

              label='OOAD'
              path='/ooad'
            />
            <CardItem
              src='images/EPKBPMN.png'
              text=' Geschäftsprozessmodellierung und -analyse'
              label='EPK/ BPMN'
              path='/epkbpmn'
            />
            <CardItem


              src='images/SQL.png'
              text='Datenverwaltung mit SQL und Oracle'
              label='Object-orientated analysis & design'
              path='/sql'
            />
          </ul>
          <ul>
            <CardItem
              src='images/language.png'
              text='Melden Sie sich gerne auf Deutsch, Englisch oder Russisch bei mir :) Einfache Unterhaltungen auf Spanisch sind ebenfalls kein Problem.'
              label='Sprachen'
              path='/language'
            />
          </ul>
        </Div3>
      </Div2>
    </Div1>

  );
}

export default Cards;