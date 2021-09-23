import React from 'react';

const Drawer = ({ onCloseCart, cartItems = [], onRemove}) =>{
  return(
        <div className="overlay">

          <div className="drawer">
               <h2 className="d-flex justify-between mb-30">
                 Cart
                <img  className="cu-p" src="img/btn-remove.svg" alt="Close" onClick={onCloseCart}/>
               </h2>


              {cartItems.length > 0 ? (

              <div>
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

              <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                <h2>Cart is Empty</h2>
                <p class="opacity-6">Please add items</p>
                <button class="greenButton">
                  <img src="/img/arrow.svg" alt="Arrow" />
                  Back
                </button>
              </div>
              )}

          </div>
        </div>
    )
};

export default Drawer;
