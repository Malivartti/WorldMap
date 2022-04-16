import React from 'react'
import { setTrackVolume } from './../../store/Actions/appValues';

function TrackVolume({ dispatch, player, volume }) {
  function handleVolume(e) {
    player.setVolume(e.target.value)
    dispatch(setTrackVolume(e.target.value))
  }

  return (
    <input
      className='track-slider__volume'
      type="range"
      min="0"
      max="100"
      value={volume}
      onInput={handleVolume} />
  )
}

export default TrackVolume