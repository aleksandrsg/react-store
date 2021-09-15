import React from 'react';

const Header = () => {
    return (
        <header className='d-flex justify-between align-center p-40'>
          <div className="headerLeft d-flex">
            <img width={40} height={40} src="img/logo.png" alt="logo"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Sneakers Best Store</p>
            </div>
          </div>
          <ul className="d-flex align-center">
              <li className="mr-30">
              <img width={18} height={18} src="img/cart.svg" alt="cart"/>
              <span> EUR 100.00</span>
              </li>
              <li>
              <img width={18} height={18} src="img/user.svg" alt="cart"/>
              </li>
            </ul>
        </header>
    )
};

export default Header;