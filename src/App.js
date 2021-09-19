import logo from './logo.svg';
import './App.css';
import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr =[
{ name: "Man's sneakers Nike Blazer Mid Suede", price: 20.00, img:"img/sneakers/1.jpg"},
{ name: "Man's sneakers Puma Rock star", price: 25.00, img:"img/sneakers/2.jpg"},
{ name: "Man's sneakers Adidas Super", price: 30.00, img:"img/sneakers/3.jpg"},
{ name: "Man's sneakers Adidas Hip Hop", price: 35.00, img:"img/sneakers/4.jpg"}
];

function App() {
  return (
    <div className="App">
      <div className="wrapper clear">
        {/*Drawer or (Right side)*/}
      <Drawer />
      <Header />
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
          {arr.map(obj =>(
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
