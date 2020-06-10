import React from 'react'

function Display(props) {   

    const toCart = (i) => {
        props.addToCart(i);
    }

    return (
        <div>
            <h1>This is Display</h1>
            
            {props.display.map((item, i) => 
            <div key={i} className='item'>
                <div>
                    {item.Name}
                    <img src = {item.Image} alt = 'TH.com logo' className = 'logo' />
                    ${item.Price.toFixed(2)}
                        <div className='submit'>
                            <p>There are {item.Quantity} units on hand.</p> 
                            <button onClick={() => toCart(i)}>Add To Cart</button>
                        </div>
                </div>
            </div> )}
            
        </div>
    )
}

export default Display
