import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Div3 } from '../pages/skillSubpages/DivAndTextStyles'




function SubCards() {

  return (

    <div
      style={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px;',
        height: '90%',
        width: '100%',

      }}
    >







      <Div3 className='cards__wrapper'>

        <ul className='cards__items'>
                      <CardItem


              src='images/pm.png'
              text='Jira und Confluence'

              label='OOAD'
            />

          <CardItem

            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

            src='images/SQL.png'
            text='Datenverwaltung mit SQL, MySQL /PL SQL'
            label='SQL'
          />
          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

            src='images/EPKBPMN.png'
            text=' Geschäftsprozess-/ OOAD-modellierung und -analyse'
            label='EPK, BPMN und UML'
          />
                    <CardItem
            rating={String.fromCharCode(9733, 9733, 9734, 9734, 9734)}

            src='images/unity.png'
            text='Levelgestalltung mit Unity und Logikprogrammierung mit C#'
            label='Unity mit C# Basics'
          />


        </ul>

        <ul className='cards__items'>
          <CardItem

            rating={String.fromCharCode(9733, 9733, 9733, 9733, 9733)}

            src='images/office2.png'
            text='Sicherer Umgang mit Excel, Power BI, Word, PowerPoint, Teams, Access und Outlook '

            label='Office'
          />
          <CardItem
            rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

            src='images/sap.png'
            text='Enterprise Resource Planning (SAP) und Customer Relationship Management (SalesForce)'
            label='Salesforce'
          />

          <CardItem

            rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}

            src='images/linux.png'
            text='Debian basierte Systeme (Ubuntu, Kali, POP_OS!)'

            label='Linux'
          />

<CardItem

rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}

src='images/jenkins.png'
text='CI / CD mit Jenkins'

label='Jenkins'
/>

<CardItem

rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}

src='images/git2.png'
text='Version Controll mit Github / Gitlab'

label='Git'
/>


        </ul>

        <ul>

          <CardItem
            src='images/language.png'
            text='Deutsch, Englisch und Russisch auf hohem Niveau, Spanisch Grundkenntnisse, Chinesisch HSK1'
            label='Sprachen'

          />


        </ul>



      </Div3>

    </div>



  );
}

export default SubCards;