import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import world from '@svg-maps/world'
import { SVGMap } from 'react-svg-map'
import { getCountry } from '../api';
import { getRequestCountry } from './../store/asuncActions/index';
import { setSearchValue } from '../store/Actions';


function Map({ setSelected }) {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [focusCountryName, setFocusCountryName] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = e => setCursorPosition({ top: e.screenY, left: e.screenX });
  const dispatch = useDispatch()


  function handleClick(e) {
    setSelected(true);
    dispatch(setSearchValue({ value: '', isFormRequest: false }))
    dispatch(getRequestCountry(e.target.id));
  }

  function onFocus(id) {
    getCountry(id).then((res) => setFocusCountryName(res))
  }

  function selectCountry(item) {
    if (selectedCountry) {
      selectedCountry.style.fill = null
    }
    item.style.fill = '#163a0b'
    setSelectedCountry(item)
  }

  return (
    <div className='map' onMouseMove={onMouseMove}>
      {focusCountryName &&
        <div
          className='tooltip'
          style={{ top: cursorPosition.top - 140, left: cursorPosition.left - 30 }}
        >{focusCountryName}
        </div>
      }
      <SVGMap
        map={world}
        onLocationClick={handleClick}
        onLocationMouseOver={(e) => onFocus(e.target.id)}
        onLocationMouseOut={() => setFocusCountryName('')}
        onLocationFocus={e => selectCountry(e.target)} 
        />
    </div>
  )
}

export default Map