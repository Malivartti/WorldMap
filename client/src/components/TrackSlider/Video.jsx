import React from 'react'
import YouTube from 'react-youtube';
import { useDispatch } from 'react-redux';
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

export default function Video({ trackData, onReady, handleError, setTrackOnPlaylist, getIndexTrack, isShow }) {
  const dispatch = useDispatch()
  return (
    <div className={`track-slider__video ${isShow ? 'visible' : ''}`}>
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
