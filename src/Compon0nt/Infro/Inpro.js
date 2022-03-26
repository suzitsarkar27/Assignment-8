import React from 'react';
import Questiom from '../Question/Questiom';

const Inpro = () => {
    return (
        <div className='row'>
            <div className="col md-12 text-center card">
                <h2>How React Works</h2>
                <p>Answer : React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
               </p>
            </div>
            <Questiom></Questiom>
        </div>
    );
};

export default Inpro;