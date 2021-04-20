import React from 'react';
import Cards from "../cards/Cards"
import { Title, Div2 } from './skillSubpages/DivAndTextStyles'
import Typed from 'react-typed'

const Services = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: '100%'
      }}
    >



        <Div2>
          <Title>
            <Typed
              className="typed-text"
              strings={["Erkunden Sie hier verschiedene Projekte, welche ich im Laufe von Studium, Arbeit und Privatzeit entwickelt habe."
              ]}
              typeSpeed={30}
              backSpeed={8}
            ></Typed>
          </Title>

          <Cards></Cards>

          
        </Div2>




    </div>
  );
};

export default Services;