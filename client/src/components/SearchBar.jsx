import React, { useState } from 'react';
import { getSearch } from '../api/index';


export function SearchBar() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('')
  }
  
  return (
    <form 
    className='searchBar'
    onSubmit={handleSubmit}
    >
        <input className="searchBar__input" 
        type="text" 
        placeholder="Enter a country"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    </form>
  )
}

export default SearchBar