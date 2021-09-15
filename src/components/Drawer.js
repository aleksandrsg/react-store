import React from 'react';

const Drawer = () => {
    return (
        <div className="overlay" style={{display:'none'}}>
          <div className="drawer">
               <h2 className="d-flex justify-between mb-30">
                 Cart <img  className="cu-p" src="img/btn-remove.svg" alt="Remove"/>
               </h2>
              
              <div className="items">

                <div className="cartItem d-flex align-center justify-between mb-20">
                <img className="mr-20" width={70} heigth={70} src="img/sneakers/1.jpg" alt="Sneakers" />
                  <div className="mr-20">
                    <p className="mb-5">Here will be the descriptionof the sneakers </p>
                    <b>Price: EUR20.00</b>
                  </div>
                <button className="removeBtn">
                  <img  src="img/btn-remove.svg" alt="Remove"/>
                </button>
                </div>

              <div className="cartItem d-flex align-center justify-between mb-20">
               <img className="mr-20" width={70} heigth={70} src="img/sneakers/2.jpg" alt="Sneakers" />
                <div className="mr-20">
                  <p className="mb-5">Here will be the descriptionof the sneakers </p>
                  <b>Price: EUR20.00</b>
               </div>
              <button className="removeBtn">
                <img  src="img/btn-remove.svg" alt="Remove"/>
              </button>
              </div>
           
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
        </div>
    )
};

export default Drawer;