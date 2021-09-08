import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className='d-flex justify-between'>
          <div className="headerLeft">
            <img width={40} height={40} src="img/logo.png" alt="logo"/>
            <div className="headerInfo">
              <h3>React Sneakers</h3>
              <p>Sneakers Best Store</p>
            </div>
          </div>
          <ul className="headerRight">
              <li>
              <img width={18} height={18} src="img/cart.svg" alt="cart"/>
              <span> EUR 100.00</span>
              </li>
              <li>
              <img width={18} height={18} src="img/user.svg" alt="cart"/>
              </li>
            </ul>
        </header>
        <div className="content">
          <h1>All Sneakers</h1>
          ...
        </div>
      </div>
    </div>
  );
}

export default App;
