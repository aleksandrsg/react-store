import React from 'react';
import Info from './info';
import { AppContext } from '../App';

import axios from 'axios';

const Drawer = ({ onCloseCart, onRemove}) =>{

  const { cartItems, setCartItems} = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickComplete = async () => {
    try {
      const { data } = await axios.post('https://614a2ed907549f001755a83e.mockapi.io/orders', {
        items: cartItems, 
      });
      setOrderId (data.id)
      setIsOrderComplete(true);
      setCartItems([]);
      axios.put('https://614a2ed907549f001755a83e.mockapi.io/cart', [])
    } catch (error) {
        alert("Unable to create your Order");
    }
  };

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
                <button className='greenButton' onClick ={onClickComplete}>
                  Complete Order 
                  <img src="img/arrow.svg" alt="arrow" /></button>
              </div>
              </div>
              </div>

              ) : (
                <Info 
                  title = {isOrderComplete ? "OrderCompleted" : "Cart is empty"}
                  description ={isOrderComplete ? `Your Order {orderId} successfully Completed ` : "Please add at least one product"}
                  image = {isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                />
              
              )}

          </div>
        </div>
    )
};

export default Drawer;
