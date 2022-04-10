import PlaylistItem from './PlaylistItem'
import { getImageUrl } from './../helper/index';


export default function Playlists({ playlists, title, isLoading, setShowPlaylists, setPlaylistId, setPlaylist }) {
  function getPlaylistTracks(id) {
    setShowPlaylists(false);
    setPlaylistId(id)
    setPlaylist(null)
  }

  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='playlists__list'>
        {isLoading
          ? <div className='lds-ring '>
            <div></div>
          </div>
          : !playlists.length
            ? <h3>Not found</h3>
            : playlists.map((playlist) =>
              <PlaylistItem
                key={playlist.browseId}
                name={playlist.title}
                image={getImageUrl(playlist)}
                showPlaylistTracks={() => {
                  getPlaylistTracks(playlist.browseId)
                }}
              />
            )
        }
      </div>
    </>
  )
}
