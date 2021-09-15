import React from 'react';

const Card = () =>{
    return (
        <div className="card">
            <img width={133} heigth={112} src="img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Man's sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>EUR 20.00</b>
                </div>
            <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
            </button>
            </div>
      </div>
    )
};

export default Card;