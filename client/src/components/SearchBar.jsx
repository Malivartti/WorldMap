import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../store/Actions';

export function SearchBar({openModal}) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue({value: value, isFormRequest: true}));
    openModal()
    setValue('');
  }
  
  return (
    <form 
    className='searchBar'
    onSubmit={handleSubmit}
    >
        <input className="searchBar__input" 
        type="text" 
        placeholder="Enter or Click a Country"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    </form>
  )
}

export default SearchBar