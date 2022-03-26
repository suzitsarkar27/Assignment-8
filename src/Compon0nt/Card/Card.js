import React from 'react';
import './Card.css';

const Card = ({ cart }) => {
    let name;
    let img;
    for (const item of cart) {
        console.log(item.name)
        name = item.name;
    }
  
    return (
        <div>
       <h2>SIde container</h2>
         <h2>Count:{cart.length}</h2>
        <p><small>{name}</small></p>
     </div>
    );
};

export default Card;