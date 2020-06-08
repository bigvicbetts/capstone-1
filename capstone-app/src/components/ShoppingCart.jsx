import React from 'react'

function ShoppingCart(props) {

    const fromCart = (i) => {
        props.removeFromCart(i);
    }

    const qtySelect = (num) => {
        let qty = [];
        for (let i = 1; i <= num; i++) {
            qty.push(i);
        }
        return qty;
    }

    
    return (
        <div>
            <h1>This is ShoppingCart</h1>
            <ul>
            {props.shoppingCart.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {item.Name}
                <button onClick={() => fromCart(i)}>Remove From Cart</button>
                <label HTMLfor="{item.Serial}">Select Quantity</label>
                <select name={item.Name} id="Quantity">
                    {qtySelect(item.Quantity).map((item) => 
                    <option id={item}>{item}</option>)}
                </select>

            </li>
        </div> )}
            </ul>
            <button>Buy Now</button>
        </div>
    )
}

export default ShoppingCart
