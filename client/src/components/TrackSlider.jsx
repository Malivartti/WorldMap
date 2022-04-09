import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import YouTube from 'react-youtube';
import { ReactComponent as LikeBtn } from '../img/like.svg'
import {ReactComponent as VidoBtn} from '../img/open-video.svg'
import {ReactComponent as RepeatBtn} from '../img/playback-repeat_1.svg'
import arrowRightBtn from '../img/arrow-right.png'
import arrowLeftBtn from '../img/arrow-left.png'
import playBtn from '../img/play.svg'
import stopBtn from '../img/stop.svg'
import { formatTime, getImageUrl } from './../helper/index';
import { removeFavoriteTrack, setTrack } from '../store/Actions';
import { addFavoriteTrack } from './../store/Actions/index';


const opts = {
  height: '525',
  width: '935',
  playerVars: {
    autoplay: 0,
    showinfo: 0,
    rel: 0,
  }
}

export default function TrackSlider() {
  const tracklData = useSelector(state => state.track)
  const isFavorite = useSelector(state => state.favoriteTracks.some((treck) => treck.videoId === tracklData.videoId))
  const [player, setPlayer] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(50)
  const [isPlay, setIsPlay] = useState(true)
  const [isShow, setIsShow] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const playlist = useSelector(state => state.playlist).content
  const dipatch = useDispatch()

  useEffect(() => {
    if (player) {
      const timerId = setInterval(
        () => setCurrentTime(Math.round(player.getCurrentTime())
        ), 1000)
      return () => clearInterval(timerId)
    }
  }, [player])

  function onReady(e) {
    setPlayer(e.target)
    e.target.playVideo();
    setIsPlay(true)
  }

  function handleClick() {
    setIsPlay(!isPlay)
    if (!isPlay) player.playVideo();
    else player.pauseVideo()
  }

  function handleVolume(e) {
    player.setVolume(e.target.value)
    setVolume(e.target.value)
  }

  function manageFavorite() {
    if (isFavorite) dipatch(removeFavoriteTrack(tracklData.videoId))
    else dipatch(addFavoriteTrack(tracklData))
  }

  function getIndexTrack() {
    return playlist?.findIndex(track => track.videoId === tracklData.videoId)
  }

  function setTrackOnPlaylist(index) {
    if (isRepeat && index === -1) dipatch(setTrack(playlist[playlist.length - 1]))
    if (isRepeat && index === playlist.length) dipatch(setTrack(playlist[0]))
    if (0 <= index && index < playlist.length) dipatch(setTrack(playlist[index]))
  }

  if (!Object.keys(tracklData).length) return null
  return (
    <>
      <div className={`track-slider__video ${isShow ? 'visible' : ''}`}>
        <YouTube
          videoId={tracklData.videoId}
          opts={opts}
          onReady={onReady}
          onEnd={() => setTrackOnPlaylist(getIndexTrack() + 1)}
        />
      </div>

      <div className="track-slider">
        <div className='track-slider__info'>
          <img className='track-slider__info-cover' src={getImageUrl(tracklData)} alt='' />
          <div className='track-slider__info-meta'>
            <h3 className='track-slider__info-title'>{tracklData.name}</h3>
            <span className='track-slider__info-auth'>{tracklData.author.name}</span>
          </div>
          <button className='track-slider__info-btn' onClick={() => setIsShow(!isShow)}><VidoBtn fill={isShow ? '#459bfd' : ''}/></button>
          <button className='track-slider__info-btn' onClick={manageFavorite}><LikeBtn fill={isFavorite ? 'red' : 'black'} /></button>
          <button className='track-slider__info-btn' onClick={() => setIsRepeat(!isRepeat)}><RepeatBtn fill={isRepeat ? '#459bfd' : ''} /></button>
        </div>
        <div className='track-slider__control'>
          <div className='track-slider__control-btns'>
            <button className='track-slider__control-arrow btn-reset' onClick={() => setTrackOnPlaylist(getIndexTrack() - 1)}><img src={arrowLeftBtn} alt='' /></button>
            <button className='track-slider__control-play btn-reset' onClick={handleClick}><img src={isPlay ? stopBtn : playBtn} alt='' /></button>
            <button className='track-slider__control-arrow btn-reset' onClick={() => setTrackOnPlaylist(getIndexTrack() + 1)}><img src={arrowRightBtn} alt='' /></button>
          </div>
          <div className='track-slider__soundtrack'>
            <span className='track-slider__soundtrack-time'>{formatTime(currentTime)}</span>
            <input className='track-slider__soundtrack-input' type="range" min="0" max={Math.round(tracklData.duration / 1000)} value={currentTime} onInput={(e) => player.seekTo(e.target.value)} />
            <span className='track-slider__soundtrack-time'>{formatTime(Math.round(tracklData.duration / 1000))}</span>
          </div>
        </div>
        <input className='track-slider__volume' type="range" min="0" max="100" value={volume} onInput={handleVolume} />
      </div>
    </>
  )
}
