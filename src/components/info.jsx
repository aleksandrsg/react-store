import React, { useContext } from 'react';
import { AppContext } from '../App';

const Info = ( {title, description, image} ) => {

    const {setcartIsOpened} = useContext(AppContext);

    return (
        <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                <img 
                class="mb-20" 
                width="120px" 
                height="120px" 
                src= {image} 
                alt="Empty"
                />

                <h2>{title}</h2>
                <p class="opacity-6"> { description }</p>
                <button onClick={ () => setcartIsOpened(false)} class="greenButton">
                  <img src ="img/arrow.svg" alt="Arrow" />
                  Back
                </button>
              </div>
    )
}

export default Info;