import React, {useState} from 'react'
import Search from './Search'
import Display from './Display'
import ShoppingCart from './ShoppingCart'
import Nav from './Nav'
import Header from './Header'
import data from '../data.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Main() {

    const [inventory, setInventory] = useState(data)

    const updateCount = (arr) => {

        setShoppingCart(shoppingCart.map(function(item, i) {
            item.Quantity = item.Quantity - (+arr[i][1])
        }))

        const shoppingCartSerial = shoppingCart.map((item) => {return item.Serial})
        const newCart = inventory.filter((item) => {
            return !shoppingCartSerial.includes(item.Serial)
        })
        
        shoppingCart.map((item) => {
            newCart.splice(0, 0, item)
        })

        
        setShoppingCart([])
        setInventory(newCart)
        window.alert('Payment Confirmed');
    }

/////////////////////////////////////////////////////////
// This BEGINS the search functionality for the website.
    const [searchResult, setSearchResult] = useState('');

    const getSearchResult = (result) => { // Get search result from the Search component
        setSearchResult(result);  // Set the searchResult state to the info rec'd from Search component
        
    }
// This ENDS the search functionality for the website
//////////////////////////////////////////////////////

const [shoppingCart, setShoppingCart] = useState([]);

let display = inventory.filter(function(item) {
    return item.Quantity > 0 && item.Name.toUpperCase().includes(searchResult) && !shoppingCart.includes(item);
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
            <Router>
                <Header />
                <Nav />
                <Route path='/' exact>
                <Search searchResult={getSearchResult}/>
                <Display display={display} searchResult={searchResult} addToCart={addToCart}/>
                </Route>
                <Route path='/cart'>
                <ShoppingCart shoppingCart={shoppingCart} removeFromCart={removeFromCart} updateCount={updateCount}/>
                </Route>
            </Router>
        </div>
    )
}

export default Main
