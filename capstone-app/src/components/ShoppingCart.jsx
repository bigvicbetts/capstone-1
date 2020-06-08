import React from 'react'

function ShoppingCart(props) {

    const fromCart = (i) => {
        props.removeFromCart(i);
    }

    return (
        <div>
            <h1>This is ShoppingCart</h1>
            <ul>
            {props.shoppingCart.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {item.Name}
                <button onClick={() => fromCart(i)}>Remove From Cart</button>
            </li>
            </div> )}
            </ul>
        </div>
    )
}

export default ShoppingCart
