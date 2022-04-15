import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as LikeBtn } from '../../img/like.svg'
import { ReactComponent as VidoBtn } from '../../img/open-video.svg'
import { ReactComponent as RepeatBtn } from '../../img/playback-repeat_1.svg'
import { addFavoriteTrack, removeFavoriteTrack } from '../../store/Actions/appPlaylists';
import { getPlayingTrack } from '../../store/Selectors/appValues'
import { getFavoriteTracks } from '../../store/Selectors/appPlaylists'
import { isFavorite } from '../../helper'

export default function InfoBtns({ isShow, setIsShow, isRepeat, setIsRepeat }) {
  const trackData = useSelector(getPlayingTrack);
  const isTrackFavorite = isFavorite(useSelector(getFavoriteTracks), trackData.videoId, 'videoId');
  const dispatch = useDispatch();

  function manageFavorite() {
        if (isTrackFavorite) dispatch(removeFavoriteTrack(trackData.videoId))
        else dispatch(addFavoriteTrack(trackData))
    }

  return (
    <div className='track-slider__info-btns'>
            <button className='track-slider__info-btn' onClick={() => setIsShow(!isShow)}>
                <VidoBtn fill={isShow ? '#0075ff' : ''} />
            </button>
            <button className='track-slider__info-btn' onClick={manageFavorite}>
                <LikeBtn fill={isTrackFavorite ? 'red' : 'black'} />
            </button>
            <button className='track-slider__info-btn' onClick={() => setIsRepeat(!isRepeat)}>
                <RepeatBtn fill={isRepeat ? '#0075ff' : ''} />
            </button>
    </div>
  )
}
