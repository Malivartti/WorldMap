import React from 'react'
import { getImageUrl } from '../../helper'

export default function TrackInfo({ trackData }) {
  return (
    <>
        <img className='track-slider__info-cover' src={getImageUrl(trackData)} alt='' />
        <div className='track-slider__info-meta'>
            <h3 className='track-slider__info-title'>{trackData.name}</h3>
            <span className='track-slider__info-auth'><b>{trackData.author.name}</b> | {trackData.country} </span>
        </div>
     </>  
  )
}
