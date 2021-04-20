import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Div2, Div3 } from '../pages/skillSubpages/DivAndTextStyles'



function Cards() {

  return (




    <Div2>
      <Div3 className='cards__wrapper'>
        <ul className='cards__items'>


          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}
            text='JavaSE mit JavaFX-GUI und SQL-Datenbank Zugriffen/ Grundkenntnisse in JavaEE'
            src='images/java.png'
            label='Java'
            path='/java'

          />
          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}
            src='images/R.png'
            text='mit Spezialisierung auf Regressionsprognosen, Assoziationsanalysen/- visualisierungen und Operations Research'
            label='R'
            path='/R'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}
            src='images/android.png'
            text='Mobile Apps mit Java'
            label='Android'
            path='/android'
          />
          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}
            src='images/js.png'
            text='React-Frontend mit HTML5 und CSS auf Desktop oder Mobile'
            label='JavaScript'
            path='/javascript'
          />

          <CardItem

            rating={String.fromCharCode(9733, 9733, 9734, 9734, 9734)}

            src='images/python.png'
            text='Django WebApp als Frontend oder Backend mit REST'

            label='Python'
            path='/python'
          />
        </ul>
        <ul>
          <CardItem
            src='images/edu.png'
            text='Neben dem Programmieren habe ich noch viele andere Interessen'
            label='zusätzliche Fähigkeiten'
            path='/edu'
          />
        </ul>
      </Div3>
    </Div2>

  );
}

export default Cards;