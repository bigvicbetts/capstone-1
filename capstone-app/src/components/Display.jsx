import React from 'react'

function Display(props) {

    const displayArray = [];

    const returnName = (item) => {
        const itemName = item.Name.toUpperCase()
        if (item.Quantity > 0) {  // Display all items with quantities greater than zero...
            if (props.searchResult === '') {  // if the search string is empty.
                return (
                    item.Name
                )
            }                   // If search result is NOT empty, display all items with quantities greater
            else if (itemName.includes(props.searchResult.toUpperCase())) { // than zero which contain the
                return (                                                    // current search term.
                    item.Name
                )
            }
        }

    }

    console.log(props.searchResult.toUpperCase());

    return (
        <div>
            <h1>This is Display</h1>
            <ul>
            {props.inventory.map((item, i) => <li key={i}>
                {returnName(item)}
            </li>)}
            </ul>
        </div>
    )
}

export default Display
