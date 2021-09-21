import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  //State for All items
  const[items, setItems]= React.useState([]);
  //State for items added to Cart
  const [cartItems, setCartItems] = React.useState([
    //{"name":"Mans sneakers Adidas A","price":110,"img":"/img/sneakers/1.jpg"},
    //{"name":"Mans sneakers Adidas B","price":120,"img":"/img/sneakers/2.jpg"}
  ]);

  const [cartIsOpened, setcartIsOpened] =React.useState(false);

  const onClickCart = () => {
    setcartIsOpened(true);
  }

  const onCloseCart = () => {
    setcartIsOpened(false);
  }

  React.useEffect( ()=>{
  fetch('https://614a2ed907549f001755a83e.mockapi.io/allitems')
    .then((res) => {return res.json();
    })
    .then((json) => {setItems(json);
    });
  },[]);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }
  
  return (
    <div className="App">
      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
      {cartIsOpened ? <Drawer onCloseCart={onCloseCart} cartItems={cartItems}/> : null}
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
          {items.map(item =>(
            <Card 
            title={item.name} 
            price={item.price} 
            img={item.img}
            onFavorite={() => alert('Added to Favorite')}
            onPlus = {(obj) => onAddToCart(obj)}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;