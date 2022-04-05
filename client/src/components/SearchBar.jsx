import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../store/Actions';

export function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue({value: value, isFormRequest: true}));
    setValue('');
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