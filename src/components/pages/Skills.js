import React from 'react';
import Cards from "../cards/Cards"
import { Title, Div1, Div2, Div3 } from './skillSubpages/DivAndTextStyles'
import Typed from 'react-typed'


const Services = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: '70%'
      }}
    >



      <Div1>
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
      </Div1>



    </div>
  );
};

export default Services;