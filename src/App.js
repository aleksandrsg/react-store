import React from 'react';
import './App.css';
import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';

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
      {/* Content*/}
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40"> 
            <h1>{searchText ? `Search request: "${searchText}"` : 'All sneakers' }</h1>
            <div className="search-block d-flex align-center">
              <img src="img/search.svg" alt="Search" />
              {searchText && <img className="cu-p clear" src="img/btn-remove.svg" alt="ClearSearch" onClick={clearSearchText}/>}
              <input onChange={onChangeSearchInput} value={searchText} type="text" placeholder="Search sneakers"/>
            </div>
          </div>
          

          {/* Product Cards*/ }

          <div className="d-flex flex-wrap">
          {items
          .filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((item, index) =>(
            <Card 
            key={index} // if use map MAP method for items, each item should have uniq KEY
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