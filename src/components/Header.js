import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className='d-flex justify-between align-center p-40'>
          <Link to="/">
          <div className="d-flex headerLeft">
            
            <img width={40} height={40} src="img/logo.png" alt="logo"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Sneakers Best Store</p>
            </div>
          </div>
          </Link>
    
          <ul className="d-flex align-center">
              <li className="mr-30 cu-p" onClick={props.onClickCart}>
              <img width={18} height={18} src="img/cart.svg" alt="cart"/>
              <span> EUR 100.00</span>
              </li>
              <Link to="/favorites">
              <li className="mr-20 cu-p">
              <img width={18} height={18} src="img/heart.svg" alt="favorites" />
              </li>
              </Link>
              <li>
              <img width={18} height={18} src="img/user.svg" alt="user"/>
              </li>
            </ul>
        </header>
    )
};

export default Header;