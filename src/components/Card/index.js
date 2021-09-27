import React from 'react';

import styles from './Card.module.scss';

const Card = ({title, price, img, onPlus, onFavorites} ) =>{

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite]= React.useState(false);

    const onClickPlus =() => {
        setIsAdded(!isAdded);
        onPlus({title, price, img});
    }

    //Set state for Favorite items
    
    const onClickFavorite =()=>{
        setIsFavorite(!isFavorite);
        onFavorites({title, price, img});
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={isFavorite ? "img/liked.svg" : "img/unliked.svg"} alt="liked" onClick={onClickFavorite}/>
            </div>
            <img width={133} heigth={112} src={img} alt="Sneakers" />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="Plus" onClick={onClickPlus}/>
            </div>
      </div>
    )
};

export default Card;