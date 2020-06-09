import React from 'react'

function Display(props) {   

    const toCart = (i) => {
        props.addToCart(i);
    }

    return (
        <div>
            <h1>This is Display</h1>
            <ul>
            {props.display.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {item.Name} ${item.Price/100}
                <button onClick={() => toCart(i)}>Add To Cart</button>
    <p>There are {item.Quantity} units on hand.</p> 
            </li>
            </div> )}
            </ul>
        </div>
    )
}

export default Display
