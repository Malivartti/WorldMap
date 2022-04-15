import React from 'react'
import { useSelector } from 'react-redux'
import { getIsTrackPlaying } from '../../store/Selectors/appValues'
import arrowRightBtn from '../../img/arrow-right.svg'
import arrowLeftBtn from '../../img/arrow-left.svg'
import playBtn from '../../img/play.svg'
import stopBtn from '../../img/stop.svg'

export default function ControlBtns({ setTrackOnPlaylist, getIndexTrack, player }) {
  const isPlay = useSelector(getIsTrackPlaying)

  function handleClick() {
    if (isPlay) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  return (
    <div className='track-slider__control-btns'>
      <button className='track-slider__control-arrow btn-reset' onClick={() => setTrackOnPlaylist(getIndexTrack() - 1)}>
        <img src={arrowLeftBtn} alt='' />
      </button>
      <button className='track-slider__control-play btn-reset' onClick={handleClick}>
        <img src={isPlay ? stopBtn : playBtn} alt='' />
      </button>
      <button className='track-slider__control-arrow btn-reset' onClick={() => setTrackOnPlaylist(getIndexTrack() + 1)}>
        <img src={arrowRightBtn} alt='' />
      </button>
    </div>
  )
}
