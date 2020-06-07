import React from 'react'

function Display(props) {   

    const returnName = (item) => {
        const itemName = item.Name.toUpperCase()
        if (item.Quantity > 0) {  // Display all items with quantities greater than zero...
            if (itemName.includes(props.searchResult.toUpperCase())) {  // if the search string is empty.
                return (
                    item.Name
                )
            }                   
        }

    }

    
    
    console.log(props.searchResult);

    return (
        <div>
            <h1>This is Display</h1>
            <ul>
            {props.display.map((item, i) => <div key={i} className='item'>
            <li style={{listStyle: 'none'}}>
                {returnName(item)}
            </li>
            </div> )}
            </ul>
        </div>
    )
}

export default Display
