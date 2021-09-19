import React from 'react';

import styles from './Card.module.scss';

const Card = (props) =>{
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/liked.svg" alt="liked" />
            </div>
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