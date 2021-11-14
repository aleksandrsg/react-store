import React from 'react';
import './App.css';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



//One Global Object
//React automaticly will informe all components if something changed in this AppContext object.
export const AppContext = React.createContext({}); 

console.log(AppContext);

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

  React.useEffect( () => {
    async function fetchData(){
      const cartResponse = await axios.get('https://614a2ed907549f001755a83e.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://614a2ed907549f001755a83e.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://614a2ed907549f001755a83e.mockapi.io/allitems');
      setCartItems (cartResponse.data);
      setFavorites (favoritesResponse.data);
      setItems (itemsResponse.data);
  }
   fetchData();
  },[]);

  // Add item to Cart 
  const onAddToCart = (obj) => {
    if(cartItems.find(cartitem => Number(cartitem.id) === Number(obj.id))) {
      axios.delete(`https://614a2ed907549f001755a83e.mockapi.io/cart/${obj.id}`)
      setCartItems( prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
    axios.post('https://614a2ed907549f001755a83e.mockapi.io/cart', obj)
    setCartItems(prev =>[...prev, obj])
    }
  }

  // Removeitem from Cart and Server
  const removeItem = (id) =>{
    axios.delete(`https://614a2ed907549f001755a83e.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  //Favorites
  const onAddToFavorites = (obj) => {
    if(favorites.find((elem) => elem.id === obj.id)){
    axios.delete(`https://614a2ed907549f001755a83e.mockapi.io/favorites/${obj.id}`); //delete from Backend
    setFavorites((prev) => prev.filter(elem => elem.id !== obj.id)); // remove from State
    } else {
    axios.post('https://614a2ed907549f001755a83e.mockapi.io/favorites', obj)
    setFavorites(prev =>[...prev, obj])
  }
  };
  //Set Search Text
  const onChangeSearchInput = (event) =>{
    setSearchText(event.target.value);
  }
  //Clear Search Input
  const clearSearchText = () => {
    setSearchText('');
  }

  //if Product is in the Cart then show checked on Home page for that Product

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }
  
  return (
    <AppContext.Provider value ={{items, cartItems, favorites, onAddToFavorites, isItemAdded, setcartIsOpened}}>
    <div className="App">
      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
      {cartIsOpened ? <Drawer onCloseCart={onCloseCart} cartItems={cartItems} onRemove={removeItem}/> : null}
     
      <Header onClickCart={onClickCart}/>

      <Route path ="/" exact>
        <Home
        items={items}
        cartItems = {cartItems}
        searchText = {searchText}
        clearSearchText ={clearSearchText}
        onChangeSearchInput ={onChangeSearchInput}
        onAddToCart = {onAddToCart}
        onAddToFavorites = {onAddToFavorites}
        />
      </Route>

      <Route path ="/favorites" exact>
        <Favorites />
      </Route>

      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;