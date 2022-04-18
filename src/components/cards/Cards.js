import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Div2, Div3, Title } from '../pages/skillSubpages/DivAndTextStyles'

import "aos/dist/aos.css"
import { FormattedMessage } from 'react-intl'
import Typed from 'react-typed'
import Home from '../pages/Home'
function Cards() {

  return (




    <Div2>
      <Div3 className='cards__wrapper'>

        <div className="aboutContainer"

        >

          <div data-aos="fadein-right"
            style={{
              height: '100%',
              marginTop: '10vh',
              marginBottom: '10vh',

              minWidth: 320
            }}
          >

            <img alt="profile" className="scaledPic" src="images/profile.jpeg" style={{ borderRadius: 500 }}></img>


          </div>

          <div data-aos="flip-right" className="boxez"
            style={{
              display: 'inline-block',


           
            }}      >
            <p>
              <Title>

                <FormattedMessage
                  id="app.welcome">

                </FormattedMessage>


              </Title>

            </p>



          </div>

        </div>


        <Home />


        <Title>


          Tech Stack:
        </Title>

        <div className='boxes'
          style={{
            margin: 20,
            marginTop: 15,
            marginLeft: '0vh', // für media screen
            backgroundColor: 'black',
            overflow: 'hidden',
            height: 50,
            width: '100%',
            maxHeight: '35vh',
            borderRadius: 15


          }}

        /*  data-aos="flip-right" */
        >
          <Title>

            <Typed
              className="typed-text"
              strings={[


                "  Java (SpringBoot, Selenide, Android, Quarkus)",
                "  JavaScript (React, three)",
                "  Python (Django ,Scrapy, Selenium)",
                "  R  (arules/Viz, caret, lpsolve, anova)"
              ]}
              typeSpeed={20}
              backSpeed={8}
              loop
            ></Typed> </Title>

        </div>




        <div
          data-aos="fade-top"

        >

          <ul className='cards__items'>


            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}
              text='JavaEE, JavaFX, Quarkus, Spring Boot, Selenide'
              src='images/java.png'
              label='Java'
              path='/java'

            />


            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}
              src='images/react2.png'
              text='React, threejs'
              label='JavaScript'
              path='/javascript'
            />
          </ul>

          <ul className='cards__items'>


          </ul>

        </div>


        <div className="boxes"
          data-aos="flip-right"
        >
          <Title>


            <FormattedMessage
              id="app.card1">

            </FormattedMessage>

          </Title>

        </div>


        <div style={{}}
          data-aos="fade-top"
        >


          <ul className='cards__items'>
            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}
              src='images/android.png'
              text='Android'
              label='Android'
              path='/android'
            />
            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}
              src='images/R.png'
              text='Regression-/ Associationanalysis ,Visualiziation, Operations Research'
              label='R'
              path='/R'
            />

            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

              src='images/python.png'
              text='Django Fullstack/ REST, Scrapy, Selenium'

              label='Python'
              path='/python'
            />
          </ul>
        </div>


        <div className="boxes"
          data-aos="flip-left"
        >
          <Title>
            <FormattedMessage
              id="app.card2">

            </FormattedMessage>

          </Title>

          <Title>

            <FormattedMessage
              id="app.card3">

            </FormattedMessage>

          </Title>


        </div>



        {/*         <ul>
          <CardItem
            src='images/edu.png'
            text='Neben dem Programmieren habe ich noch viele andere Interessen'
            label='zusätzliche Fähigkeiten'
            path='/edu'
          />
        </ul> */}

        <div
          data-aos="fade-top"


        >



          <ul className='cards__items'>
            <CardItem


              src='images/pm.png'
              text='Jira + Confluence'

              label='OOAD'
            />

            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

              src='images/SQL.png'
              text='SQL, MySQL /PL SQL, OracleSQLDeveloper, HeidiSQL'
              label='SQL'
            />
            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

              src='images/EPKBPMN.png'
              text='Workflow-, Processmodelling + OOAD'
              label='EPK, BPMN, UML'
            />
            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9733)}

              src='images/office2.png'
              text='Excel, Power BI, Word, PowerPoint, Teams, Access, Outlook '

              label='Office'
            />


          </ul>
        </div>
        <div className="boxes"
          data-aos="flip-right"
        >

          <Title>                <FormattedMessage
            id="app.card4">

          </FormattedMessage></Title>
          <Title>
            <FormattedMessage
              id="app.card5">

            </FormattedMessage>

          </Title>

        </div>


        <div

          data-aos="fade-top"

        >
          <ul className='cards__items'>


            <CardItem
              rating={String.fromCharCode(9733, 9733, 9734, 9734, 9734)}

              src='images/unity.png'
              text='Leveldesign Unity'
              label='C# Basics'
            />
            <CardItem
              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

              src='images/sap.png'
              text='Enterprise Resource Planning (SAP) + Customer Relationship Management (SalesForce)'
              label='SAP, Salesforce'
            />

            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}

              src='images/linux.png'
              text='Debian Systems (Ubuntu, Kali, POP_OS!)'

              label='Linux'
            />

            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9734, 9734)}

              src='images/jenkins.png'
              text='CI / CD Jenkins'

              label='Jenkins'
            />

            <CardItem

              rating={String.fromCharCode(9733, 9733, 9733, 9733, 9734)}

              src='images/git2.png'
              text='Version Controll Github / Gitlab'

              label='Git'
            />


          </ul>



        </div>
        <div className="boxes"
          data-aos="fade-top"
        >
          <Title>                <FormattedMessage
            id="app.card6">

          </FormattedMessage></Title>
          <Title>

            <FormattedMessage
              id="app.card7">

            </FormattedMessage>
          </Title>
          <Title>
            <FormattedMessage
              id="app.card8">

            </FormattedMessage>

          </Title>

        </div>


        <div
          data-aos="flip-left"
          style={{ marginBottom: '10vh' }}
        >

          <ul>

            <CardItem
              src='images/language.png'
              text='Deutsch, Englisch und Russisch, Spanisch Grundkenntnisse, Chinesisch HSK1'
              label='Sprachen'

            />


          </ul>
        </div>



        <div data-aos="flip-right" className="boxes" style={{ alignItems: 'center' }}>

          <div style={{
            alignContent: 'center',
            alignItems: 'center', marginTop: '1vh'
          }}>
            <Title>
              <h1><FormattedMessage
                id="app.contact">

              </FormattedMessage></h1>
            </Title>
          </div>

        </div>






      </Div3>
    </Div2>

  );
}

export default Cards;