import React from 'react';

export default function PlaylistItem({name, onClick, image}) {
  return (
    <div className="playlist__item">
        <img src={image} alt="" className="playlist__img" onClick={onClick}/>
        <h3 className='playlist__item-title'>{name}</h3>
    </div>
  )
}
