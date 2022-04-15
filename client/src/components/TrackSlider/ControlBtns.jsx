import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIsTrackPlaying } from '../../store/Selectors/appValues'
import { setIsTrackPlaying } from '../../store/Actions/appValues'
import arrowRightBtn from '../../img/arrow-right.svg'
import arrowLeftBtn from '../../img/arrow-left.svg'
import playBtn from '../../img/play.svg'
import stopBtn from '../../img/stop.svg'

export default function ControlBtns({ setTrackOnPlaylist, getIndexTrack, player }) {
    const isPlay = useSelector(getIsTrackPlaying)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsTrackPlaying(isPlay))
      }, [dispatch, isPlay])
    
    function handleClick() {
        dispatch(setIsTrackPlaying(!isPlay))
        if (!isPlay) {
          player.playVideo()
        } else {
          player.pauseVideo()
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
