import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Product = (Props) => {
    const {name,img ,price} = Props.items[0];
    return (
        <div className='Product-container col-md-3 g-5'>
            <img src={img} alt="" />
            <div className="product-infro">
            <h2>Name:{name}</h2>
            <h3><small>Price:{price}</small></h3>
            </div>
            <div className="product-button">
                <button className="product-buttons" onClick={(() => Props.eventHandlar(Props.items[0]))}>Add To Card <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    );
};

export default Product;