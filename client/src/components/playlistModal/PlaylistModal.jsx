import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { getShowPlaylists } from '../../store/Selectors/windowDisplay';
import { getSearchQuery, getChosenPlaylist } from './../../store/Selectors/appValues';

export default function PlaylistModal() {
    const showPlaylists = useSelector(getShowPlaylists);
    const chosenPlaylist = useSelector(getChosenPlaylist)
    const searchQuery = useSelector(getSearchQuery);

    const [playlistId, setPlaylistId] = useState('')
    const [playlists, setPlaylists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (searchQuery) {
        setIsLoading(true)
        getSearch(searchQuery).then(res => {
          setIsLoading(false)
          setPlaylists(res)
        });
      }
    }, [searchQuery])
  
    return (
      <div className={`playlists ${showPlaylists ? '' : 'playlists_tracks'}`} onClick={e => e.stopPropagation()}>
        {showPlaylists
          ? <Playlists
            playlists={playlists}
            title={searchQuery}
            isLoading={isLoading}
            setPlaylistId={setPlaylistId}
            playlistId={playlistId}
             />
          : <PlaylistTracks
            playlistId={playlistId}
          />}
      </div>
    )
  }