import React from 'react';
import './SearchBar.css'

function SearchBar(props) { 

    const handleSearchChange = (e) => {
        let query = e.currentTarget.value;
        props.getSearch(query.toLowerCase());
    };

    return (
        <div><label className='search'>
                Search:
            </label>
            <input className='search-bar' onChange={(e) => handleSearchChange(e)} name="name" type="text" />
        </div>
    );
}

export default SearchBar;
