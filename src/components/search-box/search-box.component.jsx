import React from 'react';

import './search-box.styles.css'

const SearchBox = ({ placeholder, searchText, updateSearch }) => {
  return(
    <input className='search' type='search' placeholder={placeholder} value={searchText} onChange={updateSearch} />
  )
}

export default SearchBox;