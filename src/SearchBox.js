import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='search-box'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;