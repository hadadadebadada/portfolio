import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


function CardItem(props) {
  return (
    <>
    
      <li className='cards__item'>
        
        <Link className='cards__item__link' to={props.path}>
        <h1 className='rating'>{props.rating}</h1>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img alt=""
              className='cards__item__img'
              src={props.src}
            />
            {/* <Home></Home> */}
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;