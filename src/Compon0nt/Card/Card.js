import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Card.css';

const Card = ({ cart }) => {
    let name;
    for (const item of cart) {
        console.log(item.name)
        name = item.name;
    }
  
    return (
        <div>
       <h2>Selected Clothes</h2>
         <h2>Count:{cart.length}</h2>
            <h3><small>{name}</small></h3>
            <div className='chose-bt'>
                <button className='choose-btn'>
                    CHOOSE 1 FOR ME <FontAwesomeIcon icon={faCartShopping} />
                </button><br />
                <button className='choose-btn'>
                    CHOOSE  ME <FontAwesomeIcon icon={faCartShopping} />
                </button><br />
               
            </div>
        </div>
       
    );
};

export default Card;