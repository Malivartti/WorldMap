import React from 'react'
import YouTube from 'react-youtube';
import { setIsTrackPlaying } from './../../store/Actions/appValues';

const opts = {
  height: '525',
  width: '935',
  playerVars: {
    autoplay: 0,
    showinfo: 0,
    rel: 0,
  }
}

export default function Video({
  dispatch,
  trackData,
  volume,
  setError,
  setPlayer,
  isShowVideo,
  setTrackOnPlaylist,
  getIndexTrack }) {

  function onReady(e) {
    setPlayer(e.target)
    e.target.playVideo()
    e.target.setVolume(volume)
    setTimeout(() => {
      dispatch(setIsTrackPlaying(e.target.getPlayerState() !== -1))
    }, 1500)
  }

  function handleError() {
    setError(`Track ${trackData.name} not available`)
    setTrackOnPlaylist(getIndexTrack() + 1)
  }

  return (
    <div className={`track-slider__video ${isShowVideo ? 'visible' : ''}`}>
      <YouTube
        videoId={trackData.videoId}
        opts={opts}
        onReady={onReady}
        onPlay={() => dispatch(setIsTrackPlaying(true))}
        onPause={() => dispatch(setIsTrackPlaying(false))}
        onEnd={() => setTrackOnPlaylist(getIndexTrack() + 1)}
        onError={handleError}
      />
    </div>
  )
}
