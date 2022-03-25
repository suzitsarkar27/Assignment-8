import React from 'react';
import './Product.css';

const Product = (Props) => {
    // const {name,price,img } = Props.items;
    const {name,img } = Props.items[0];
    return (
        <div className="row">
             <div className='Product-container col-md-4'>
           <img src={img} alt="" />
        </div>
       </div>
    );
};

export default Product;