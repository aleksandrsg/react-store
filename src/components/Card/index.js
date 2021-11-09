import React from 'react';
import styles from './Card.module.scss';
import { AppContext } from '../../App';

const Card = ({title, id, price, img, onPlus, onFavorites, favorited=false, added=false}) => {

    //const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite]= React.useState(favorited);

    const onClickPlus =() => {
        //setIsAdded(!isAdded);
        onPlus({title, price, img, id});
    }

    //Set state for Favorite items
    
    const onClickFavorite =()=>{
        setIsFavorite(!isFavorite);
        onFavorites({title, price, img, id});
    }

    const { isItemAdded } = React.useContext(AppContext);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={isFavorite ? "img/liked.svg" : "img/unliked.svg"} alt="liked" onClick={onClickFavorite}/>
            </div>
            <img width={133} heigth={112} src={img} alt="Sneakers" />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                    <span>Price: EUR</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} src={ isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="Plus" onClick={onClickPlus}/>
            </div>
      </div>
    )
};

export default Card;