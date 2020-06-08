import React, {useState} from 'react'
import Search from './Search'
import Display from './Display'
import ShoppingCart from './ShoppingCart'
import data from './data.json'

function Main() {

    const [inventory, setInventory] = useState(data)

/////////////////////////////////////////////////////////
// This BEGINS the search functionality for the website.
    const [searchResult, setSearchResult] = useState('');

    const getSearchResult = (result) => { // Get search result from the Search component
        setSearchResult(result);  // Set the searchResult state to the info rec'd from Search component
        
    }
// This ENDS the search functionality for the website
//////////////////////////////////////////////////////

const [shoppingCart, setShoppingCart] = useState([]);

const display = inventory.filter(function(item) {
    return item.Quantity > 0 && item.NameUpper.includes(searchResult) &&!shoppingCart.includes(item);
})

const addToCart = (item) => {
    const toAdd = display.splice(item, 1);
    setShoppingCart([...shoppingCart, toAdd[0]])
}

const removeFromCart = (index) => {
    const notRemoved = shoppingCart.filter((val, ind) => ind !== index);
    setShoppingCart(notRemoved);
}


    return (
        <div>
            <h1>This is Main</h1>
            <Search searchResult={getSearchResult}/>
            <Display display={display} searchResult={searchResult} addToCart={addToCart}/>
            <ShoppingCart shoppingCart={shoppingCart} removeFromCart={removeFromCart}/>
        </div>
    )
}

export default Main
