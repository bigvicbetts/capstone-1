import React from 'react'

function Search(props) {

    const sendSearch = (e) => {
        props.searchResult(e.target.value.toUpperCase());
    }

    return (
        <div>
            <h1>This is Search</h1>
            <input type='text' onChange={(e) => sendSearch(e)}/>
        </div>
    )
}

export default Search
