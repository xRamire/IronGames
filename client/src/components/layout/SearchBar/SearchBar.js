import React from 'react';

function SearchBar(props) { 

    const handleSearchChange = (e) => {
        let query = e.currentTarget.value;
        props.getSearch(query.toLowerCase());
    };

    return (
        <div><label>
                Search:
                <input onChange={(e) => handleSearchChange(e)} name="name" type="text"/>
            </label>
        </div>
    );
}

export default SearchBar;
