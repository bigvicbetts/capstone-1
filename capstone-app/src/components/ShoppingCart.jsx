import React from 'react'

function ShoppingCart(props) {
    return (
        <div>
            <h1>This is ShoppingCart</h1>
            <ul>
            {props.shoppingCart.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {item.Name}
                <button>Remove From Cart</button>
            </li>
            </div> )}
            </ul>
        </div>
    )
}

export default ShoppingCart
