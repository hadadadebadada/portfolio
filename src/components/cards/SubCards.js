import React, { useRef } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Title, TagLine, Div1, Div2, Div3} from  '../pages/skillSubpages/DivAndTextStyles'



function SubCards() {

  return (
      


    <Div1>
      <Div2>
        <Div3 className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem


              src='images/OOAD.png'
              text='Plichten/- Lastenhefte mit UML-(Analyse/-) Klassendiagrammen '

              label='OOAD'
            />
            <CardItem
              src='images/EPKBPMN.png'
              text=' Geschäftsprozessmodellierung und -analyse'
              label='EPK/ BPMN'
            />
            <CardItem


              src='images/SQL.png'
              text='Datenverwaltung mit SQL und Oracle'
              label='Object-orientated analysis & design'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem


              src='images/office2.png'
              text='Sicherer Umgang mit Excel, Word, PowerPoint, Teams, Access und Outlook '

              label='Office'
            />
            <CardItem
              src='images/salesforce.png'
              text='Customer Relationship Management'
              label='Salesforce'
            />
            
                        <CardItem


src='images/linux.png'
text='Debian basierte Systeme (Ubuntu, Kali, POP_OS!)'

label='Linux'
/>
            <CardItem


              src='images/communication.png'
              text='mit Verkaufspsychologie verhalf mir zum Erfolg beim Fundraising und als Handelsvertreter'
              label='Kommunikation'
            />
            
          </ul>
          <ul>
          <CardItem
              src='images/language.png'
              text='Deutsch, Englisch und Russisch auf hohem Niveau, Spanisch Grundkenntnisse'
              label='Sprachen'
              
            />
          </ul>



        </Div3>
      </Div2>
    </Div1>

  );
}

export default SubCards;