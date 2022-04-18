import React, { useContext, useEffect } from 'react';
import Cards from "../cards/Cards"

import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Aos from "aos"
import "aos/dist/aos.css"
import { FormattedMessage } from 'react-intl'
import { Title, Div2 } from './skillSubpages/DivAndTextStyles'
import Typed from 'react-typed'
const Services = () => {


  // init aos
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}
    >




      <Div2>




        <Cards></Cards>


       <Contact></Contact>


      </Div2>




    </div>
  );
};

export default Services;