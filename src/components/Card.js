import React from 'react';

const Card = (props) =>{
    return (
        <div className="card">
            <img width={133} heigth={112} src={props.img} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price}</b>
                </div>
            <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
            </button>
            </div>
      </div>
    )
};

export default Card;