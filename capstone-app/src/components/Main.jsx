import React, {useState} from 'react'
import Search from './Search'
import Display from './Display'

function Main() {

    const [inventory, setInventory] = useState([{
        Name: 'Book 2',
        NameUpper: 'BOOK 2',
        Serial: 'LIT2',
        Price: 500,
        Manufacturer: 'Isaac Asimov',
        Category: 'Book',
        Quantity: 10
    },
    {
        Name: 'Book 1',
        NameUpper: 'BOOK 1',
        Serial: 'LIT1',
        Price: 1000,
        Manufacturer: 'Douglas Adams',
        Category: 'Book',
        Quantity: 10
    },
    {
        Name: 'Book 3',
        NameUpper: 'BOOK 3',
        Serial: 'LIT3',
        Price: 1500,
        Manufacturer: 'Dave Barry',
        Category: 'Book',
        Quantity: 10
    },
    {
        Name: 'Movie 1',
        NameUpper: 'MOVIE 1',
        Serial: 'MOV1',
        Price: 1000,
        Manufacturer: 'Disney',
        Category: 'Movie',
        Quantity: 10
    },
    {
        Name: 'Movie 2',
        NameUpper: 'MOVIE 2',
        Serial: 'MOV2',
        Price: 500,
        Manufacturer: 'Pixar',
        Category: 'Movie',
        Quantity: 10
    },
    {
        Name: 'Movie 3',
        NameUpper: 'MOVIE 3',
        Serial: 'MOV3',
        Price: 1000,
        Manufacturer: 'Universal Studios',
        Category: 'Movie',
        Quantity: 0
    },
    {
        Name: 'Audiobook 1',
        NameUpper: 'AUDIOBOOK 1',
        Serial: 'AUD1',
        Price: 500,
        Manufacturer: 'Douglas Adams',
        Category: 'Audiobook',
        Quantity: 10
    },
    {
        Name: 'Audiobook 2',
        NameUpper: 'AUDIOBOOK 2',
        Serial: 'AUD2',
        Price: 1000,
        Manufacturer: 'Isaac Asimov',
        Category: 'Audiobook',
        Quantity: 10
    },
    {
        Name: 'Audiobook 3',
        NameUpper: 'AUDIOBOOK 3',
        Serial: 'AUD1',
        Price: 1500,
        Manufacturer: 'Herman Melville',
        Category: 'Audiobook',
        Quantity: 10
    }

]);

    const [searchResult, setSearchResult] = useState('');

    const getSearchResult = (result) => {
        setSearchResult(result);
    }

    const displayResut = inventory.filter(function(item) {
        return item.Quantity > 0 && item.NameUpper.includes(searchResult)
    })

    return (
        <div>
            <h1>This is Main</h1>
            <Search searchResult={getSearchResult}/>
            <Display display={displayResut} searchResult={searchResult}/>
        </div>
    )
}

export default Main
