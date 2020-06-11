import React from 'react'

function Search(props) {

    const sendSearch = (e) => {
        props.searchResult(e.target.value.toUpperCase());
    }

    return (
        <div>
            <input className='search' type='text' placeholder='Search' onChange={(e) => sendSearch(e)}/>
        </div>
    )
}

export default Search
