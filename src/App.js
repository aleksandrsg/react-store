import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  const[items, setItems]= React.useState([]);

  const [cartIsOpened, setcartIsOpened] =React.useState(false);

  const onClickCart = () => {
    setcartIsOpened(true);
  }

  const onCloseCart = () => {
    setcartIsOpened(false);
  }

  fetch('https://614a2ed907549f001755a83e.mockapi.io/allitems')
  .then((res) => {return res.json();
  })
  .then((json) => {setItems(json);
  });

  return (
    <div className="App">
      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
      {cartIsOpened ? <Drawer onCloseCart={onCloseCart}/> : null}
      <Header onClickCart={onClickCart}/>
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

          <div className="d-flex flex-wrap"> 
          {items.map(obj =>(
            <Card 
            title={obj.name} 
            price={obj.price} 
            img={obj.img}
            onFavorite={() => alert('Added to Favorite')}
            onPlus= {() => alert('Item added to Cart')}
            />
          ))}       
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;