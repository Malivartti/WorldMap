import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as LikeBtn } from '../../img/like.svg'
import { ReactComponent as VidoBtn } from '../../img/open-video.svg'
import { ReactComponent as RepeatBtn } from '../../img/playback-repeat_1.svg'
import { ReactComponent as ShowPlaylist } from '../../img/playlists.svg'
import { addFavoriteTrack, removeFavoriteTrack } from '../../store/Actions/appPlaylists';
import { getPlayingTrack } from '../../store/Selectors/appValues'
import { getFavoriteTracks } from '../../store/Selectors/appPlaylists'
import { isFavorite } from '../../helper'
import { openPlaylistModal } from '../../store/Actions/windowDisplay'
import { showTracks, closePlaylistModal } from './../../store/Actions/windowDisplay';
import { setChosenPlaylist } from '../../store/Actions/appValues'
import { getPlayingPlaylist } from './../../store/Selectors/appValues';

export default function InfoBtns({ isShowVideo, setIsShowVideo, isRepeatPlaylist, setIsRepeatPlaylist }) {
  const playingPlaylist = useSelector(getPlayingPlaylist)
  const trackData = useSelector(getPlayingTrack);
  const isTrackFavorite = isFavorite(useSelector(getFavoriteTracks), trackData.videoId, 'videoId');
  const dispatch = useDispatch();
  const [isHiddenPlaylist, setIsHiddenPlaylist] = useState(true)

  function manageFavorite() {
    if (isTrackFavorite) dispatch(removeFavoriteTrack(trackData.videoId))
    else dispatch(addFavoriteTrack(trackData))
  }

  function managePlaylist() {
    setIsHiddenPlaylist(!isHiddenPlaylist)
    if (isHiddenPlaylist) {
      dispatch(openPlaylistModal())
      dispatch(showTracks())
      dispatch(setChosenPlaylist(playingPlaylist))
    } else {
      dispatch(closePlaylistModal())
    }
  }

  return (
    <div className='track-slider__info-btns'>
      <button className='track-slider__info-btn' onClick={() => setIsShowVideo(!isShowVideo)}>
        <VidoBtn fill={isShowVideo ? '#0075ff' : ''} />
      </button>
      <button className='track-slider__info-btn' onClick={manageFavorite}>
        <LikeBtn fill={isTrackFavorite ? 'red' : ''} />
      </button>
      <button className='track-slider__info-btn' onClick={() => setIsRepeatPlaylist(!isRepeatPlaylist)}>
        <RepeatBtn fill={isRepeatPlaylist ? '#0075ff' : ''} />
      </button>
      <button className='track-slider__info-btn' onClick={managePlaylist}>
        <ShowPlaylist fill={!isHiddenPlaylist ? '#0075ff' : '#000'} />
      </button>
    </div>
  )
}
