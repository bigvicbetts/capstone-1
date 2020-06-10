import React, {useState} from 'react'

function ShoppingCart(props) {

    // Returns array of numbers upto the items total quantity for the select quantity option.
    const qtySelect = (num) => {
        let qty = [];
        for (let i = 0; i <= num; i++) {
            qty.push(i);
        }
        return qty;
    }

    const [arr, setArr] = useState([])

    const handleChange = (e, i) => {
        let temp = [i, e.target.value];
        setArr([...arr, temp])
    }
    
    //console.log(arr) // This is for testing purposes only.
    return (
        <div>
            <h1>This is ShoppingCart</h1>
            <ul>
            {props.shoppingCart.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {item.Name}
                <button onClick={() => props.removeFromCart(i)}>Remove From Cart</button>
                <label HTMLfor="{item.Serial}">Select Quantity</label>
                <select name={item.Name} id="Quantity" onChange={(e) => handleChange(e, i)}>
                    {qtySelect(item.Quantity).map((qty) => 
                    <option key={qty} value={qty} >{qty}</option>)}
                </select>

            </li>
        </div> )}
            </ul>
            <button onClick={() => props.updateCount(arr)}>Buy Now</button>
        </div>
    )
}

export default ShoppingCart
