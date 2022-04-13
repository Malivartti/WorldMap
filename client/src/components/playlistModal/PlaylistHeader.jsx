import React from 'react'
import playBtn from '../../img/play.svg'
import { getImageUrl, isFavorite } from '../../helper/index';
import {ReactComponent as FavoriteBtn} from '../../img/like.svg'
import { useSelector, useDispatch } from 'react-redux';
import { getFavoritePlaylists } from '../../store/Selectors/appPlaylists';
import { removeFavoritePlaylist, addFavoritePlaylist } from './../../store/Actions/appPlaylists';


export default function PlaylistHeader({playlist, playlistId, handleClick}) {
  const isPlaylistFavorite = isFavorite(useSelector(getFavoritePlaylists), playlistId, 'browseId');
  const playlistImg = playlist.owner === "You" ? "playlist-my__card-img" : "playlist__card-img" ;

  const dispatch = useDispatch()

  function manageFavorite() {
    if (isPlaylistFavorite) dispatch(removeFavoritePlaylist(playlistId))
    else dispatch(addFavoritePlaylist({browseId: playlistId, thumbnails: playlist.thumbnails, title: playlist.title}))
  }


  return (
    <div className="playlist__card">
        <img className={playlistImg} src={getImageUrl(playlist)} alt=""/>
        <div className="playlist__card-main">
          <div className="playlist">
            <h2 className="playlist__card-title">{playlist.title}</h2>
            <div className="playlist__card-info">
            {playlist.owner} | {playlist.dateYear} | {playlist.trackCount} tracks
          </div>
            
          </div>
          <div className="playlist__card-btns"> 
              <button className="playlist__btn-favorites  btn-reset" onClick={manageFavorite}>
                <FavoriteBtn fill={isPlaylistFavorite ? 'red' : 'black'} />
              </button>  
              <button className='playlist__card-play song__control-play btn-reset' onClick={() => handleClick(playlist?.content[0])}>
                <img src={playBtn} alt=''/>
              </button>
            </div>
        </div>
    </div>
  )
}

