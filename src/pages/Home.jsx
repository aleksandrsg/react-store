import Card from '../components/Card/index';

const Home = ({items, searchText, 
    clearSearchText, onChangeSearchInput, 
    onAddToCart, onAddToFavorites}) => {
    return(
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
            onPlus = {(obj) => onAddToCart(obj)}
            onFavorites = {(obj) => onAddToFavorites(obj)}
           />
          ))}
          </div>
        </div>
    )
};

export default Home;