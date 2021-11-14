import React from 'react';
import Info from './info';

const Drawer = ({ onCloseCart, cartItems = [], onRemove}) =>{
  return(
        <div className="overlay">

          <div className="drawer">
               <h2 className="d-flex justify-between mb-30">
                 Cart
                <img  className="cu-p" src="img/btn-remove.svg" alt="Close" onClick={onCloseCart}/>
               </h2>


              {cartItems.length > 0 ? (

              <div className="d-flex flex-column flex">
              <div className="items">
                {cartItems.map(obj => (
                  <div className="cartItem d-flex align-center justify-between mb-20">
                  <img className="mr-20" width={70} heigth={70} src={obj.img} alt="Sneakers" />
                    <div className="mr-20">
                      <p className="mb-5">{obj.title}</p>
                      <b>Price: {obj.price}</b>
                    </div>
                  <button className="removeBtn">
                    <img 
                    onClick={() => onRemove(obj.id)}
                    src="img/btn-remove.svg" 
                    alt="Remove"/>
                  </button>
                  </div>
                ))}
              <div className="cartTotalBlock">
                <ul>
                    <li>
                      <span>Total:</span>
                      <div></div>
                      <b>EUR 40.00</b>
                    </li>
                    <li>
                      <span>VAT 5%:</span>
                      <div></div>
                      <b>EUR 2.00</b>
                    </li>
                </ul>
                <button className='greenButton'>Complete Order <img src="img/arrow.svg" alt="arrow" /></button>
              </div>
              </div>
              </div>

              ) : (
                <Info 
                  title = "Cart is empty"
                  description ="Please add at least one product"
                  image = "/img/empty-cart.jpg"
                />
              
              )}

          </div>
        </div>
    )
};

export default Drawer;
