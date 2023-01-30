import React from 'react';
import module from './Search.module.scss'

function Search(props) {
    return (
        <div className='search'>
            <input type="text" />
            <input type="submit" value="Найти" />
        </div>

    );
}

export default Search;