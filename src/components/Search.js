import React from 'react'

function Search({query, handleQuery}) {
    return (
        <div className="search">
            <input placeholder='Search Characters' className='input-search' type='text' value={query} onChange={(e) => handleQuery(e.target.value)}/>
        </div>
    )
}

export default Search
