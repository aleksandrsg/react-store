import React from 'react';
import './App.css';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  //State for All items
  const[items, setItems]= React.useState([]);
  //State for items added to Cart
  const [cartItems, setCartItems] = React.useState([
    //{"name":"Mans sneakers Adidas A","price":110,"img":"/img/sneakers/1.jpg"},
    //{"name":"Mans sneakers Adidas B","price":120,"img":"/img/sneakers/2.jpg"}
  ]);

  const [cartIsOpened, setcartIsOpened] =React.useState(false);

  const [searchText, setSearchText] = React.useState(''); 
  
  const [favorites, setFavorites] = React.useState([]);


  const onClickCart = () => {
    setcartIsOpened(true);
  }

  const onCloseCart = () => {
    setcartIsOpened(false);
  }

  React.useEffect( ()=>{
  // fetch('https://614a2ed907549f001755a83e.mockapi.io/allitems')
  //   .then((res) => {return res.json();
  //   })
  //   .then((json) => {setItems(json);
  //   });
  //npm install axios instead of .fetch() to get data from mockapi backend server
 axios.get('https://614a2ed907549f001755a83e.mockapi.io/allitems')
 .then(response => {setItems(response.data)})
 axios.get('https://614a2ed907549f001755a83e.mockapi.io/cart')
 .then(response => {setCartItems(response.data)})
  },[]);

  // Add item to Cart and to Server
  const onAddToCart = (obj) => {
    axios.post('https://614a2ed907549f001755a83e.mockapi.io/cart', obj)
    setCartItems(prev =>[...prev, obj])
  }

  // Removeitem from Cart and Server
  const removeItem = (id) =>{
    axios.delete(`https://614a2ed907549f001755a83e.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  //Favorites
  const onAddToFavorites = (obj) => {
    axios.post('https://614a2ed907549f001755a83e.mockapi.io/favorites', obj)
    setFavorites(prev =>[...prev, obj])
  }

  //Set Search Text
  const onChangeSearchInput = (event) =>{
    setSearchText(event.target.value);
  }
  //Clear Search Input
  const clearSearchText = () => {
    setSearchText('');
  }
  
  return (
    <div className="App">
      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
      {cartIsOpened ? <Drawer onCloseCart={onCloseCart} cartItems={cartItems} onRemove={removeItem}/> : null}
      <Header onClickCart={onClickCart}/>
      <Route path ="/" exact>
        <Home
        items={items}
        searchText = {searchText}
        clearSearchText ={clearSearchText}
        onChangeSearchInput ={onChangeSearchInput}
        onAddToCart = {onAddToCart}
        onAddToFavorites = {onAddToFavorites}
        />
      </Route>

      <Route path ="/favorites" exact>
        <Favorites/>
      </Route>

      </div>
    </div>
  );
}

export default App;