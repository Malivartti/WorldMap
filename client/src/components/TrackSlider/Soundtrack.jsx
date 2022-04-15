import React, { useEffect, useState} from 'react'
import { formatTime } from '../../helper/index';

export default function Soundtrack({ trackData, player }) {
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        if (player) {
          const timerId = setInterval(
            () => setCurrentTime(Math.round(player.getCurrentTime())
            ), 1000)
          return () => clearInterval(timerId)
        }
      }, [player])

    return (
    <div className='track-slider__soundtrack'>
        <span className='track-slider__soundtrack-time'>{formatTime('seconds', currentTime)}</span>
        <input className='track-slider__soundtrack-input' type="range" min="0" max={Math.round(trackData.duration / 1000)} value={currentTime} onInput={(e) => player.seekTo(e.target.value)} />
        <span className='track-slider__soundtrack-time'>{formatTime('milliseconds', trackData.duration)}</span>
    </div>
  )
}
