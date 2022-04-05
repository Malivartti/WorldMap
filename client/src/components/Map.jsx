import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const isFormRequest = useSelector(state => state.search.isFormRequest)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFormRequest && selectedCountry) {
      selectedCountry.style.fill = null
      setSelectedCountry(null)
    }
  }, [isFormRequest, selectedCountry])


  function handleClick(e) {
    setSelected(true);
    dispatch(getRequestCountry(e.target.id));
    dispatch(setSearchValue({ value: '', isFormRequest: false }))
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
          style={{ top: cursorPosition.top - 110, left: cursorPosition.left }}
        >{focusCountryName}
        </div>
      }
      <SVGMap
        map={world}
        onLocationClick={handleClick}
        onLocationMouseOver={(e) => onFocus(e.target.id)}
        onLocationMouseOut={() => setFocusCountryName('')}
        onLocationFocus={e => selectCountry(e.target)} />
    </div>
  )
}

export default Map