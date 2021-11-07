import React from 'react';
import Card from '../components/Card/index';
import { AppContext } from '../App';

const Favorites = ({onAddToFavorites}) => {

    const state = React.useContext(AppContext);

    return (
        <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40"> 
        <h1>Your Favorite Sneakers</h1>
        </div>
        <div className="d-flex flex-wrap">
        {state.favorites
          .map((item, index) =>(
            <Card 
            key={index} // if use map MAP method for items, each item should have uniq KEY
            id={item.id}
            title={item.title}
            price={item.price} 
            img={item.img}
            favorited={true}
            onFavorites={onAddToFavorites}
           />
          ))}
        </div>
      </div>
    )
};

export default Favorites;

