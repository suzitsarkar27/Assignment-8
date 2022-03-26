import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Main.css';

const Main = () => {
    const[item,SetItem]=useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
        .then(data=>SetItem(data))
    },[])
    return (
        <div className='Item-container'>
            <div className="product-container row">
                <h2>Product</h2>
                
                {
                    item.map(items=><Product key={items.id} items={items}></Product>)
                }
            
            </div>
            <div className="card-container row">
                <div className="col-12">
                <h2>SIde container</h2>
                 </div>
            </div>
        </div>
    );
};

export default Main;