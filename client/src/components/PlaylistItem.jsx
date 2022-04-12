import React from 'react';
import Playing from './Playing';


export default function PlaylistItem({name, image, showPlaylistTracks}) {
  return (
    <div className="playlist__item" onClick={showPlaylistTracks} >
        <img src={image} alt="" className="playlist__img" />
        <h3 className='playlist__item-title'>{name}</h3>
    </div>
  )
}
