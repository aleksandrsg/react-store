import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
          < Card />
          < Card />
          < Card />
          < Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
