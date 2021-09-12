import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
        <div className="overlay">
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

      {/* Content*/}

        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40"> 
            <h1>All Sneakers</h1>
            <div className="search-block d-flex align-center">
              <img src="img/search.svg" alt="Search" />
              <input type="text" placeholder="Search sneakers"/>
            </div>
          </div>
          

          {/* Product Cards*/ }

          <div className="d-flex">
          <div className="card">
            <div className="favorite">
             <img src="img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} heigth={112} src="img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Man's sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>EUR 20.00</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Man's sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>EUR 20.00</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Man's sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>EUR 20.00</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Man's sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>EUR 20.00</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
