import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import'./Main.css';

const Main = () => {
    const [item, SetItem] = useState([])
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
        .then(data=>SetItem(data))
    }, [])
    const eventHandlar = (item) => {
        // console.log(item)
        const newCard = [...cart, item]
        setCart(newCard)
    }
    return (
        <div className='Item-container'>
            <div className="product-container row">
                
                {
                    item.map(items => <Product
                        key={items.id}
                        items={items}
                        eventHandlar={eventHandlar}
                    ></Product>)

                }
            
            </div>
            <div className="card-container row w-200px">
                <div className="col-12">
                   <Card cart={cart}></Card>
                 </div>
            </div>
        </div>
    );
};

export default Main;