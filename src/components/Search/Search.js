import React from 'react'
import { useEffect, useState } from 'react'
import './Search.css';

const Search = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        onSearch(searchQuery)
    };

    return (
        <>
            <form onSubmit={handleSearch} className="search-bar">
                <input className="search-text" type="text" placeholder='Search for a word' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default Search