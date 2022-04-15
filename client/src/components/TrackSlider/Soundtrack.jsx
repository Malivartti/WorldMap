import React, { useEffect, useRef } from 'react'
import { formatTime } from '../../helper/index';
import { useSelector } from 'react-redux';
import { getCurrentTrackTime } from './../../store/Selectors/appValues';
import { setCurrentTrackTime } from '../../store/Actions/appValues';


export default function Soundtrack({ dispatch, trackData, player }) {
  const currentTime = useSelector(getCurrentTrackTime)
  const firstLaunch = useRef(true)

  useEffect(() => {
    if (player && firstLaunch.current) {
      player.seekTo(currentTime)
      firstLaunch.current = false
    }
  }, [player])

  useEffect(() => {
    if (player) {
      const timerId = setInterval(
        () => dispatch(setCurrentTrackTime(Math.round(player.getCurrentTime()))
        ), 1000)
      return () => clearInterval(timerId)
    }
  }, [dispatch, player])

  return (
    <div className='track-slider__soundtrack'>
      <span className='track-slider__soundtrack-time'>{formatTime(currentTime)}</span>
      <input className='track-slider__soundtrack-input' type="range" min="0" max={Math.round(trackData.duration / 1000)} value={currentTime} onInput={(e) => player.seekTo(e.target.value)} />
      <span className='track-slider__soundtrack-time'>{formatTime(trackData.duration / 1000)}</span>
    </div>
  )
}
