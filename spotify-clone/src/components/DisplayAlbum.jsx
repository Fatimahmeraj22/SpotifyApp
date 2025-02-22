import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets'


const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumData[id]
  return (
    <> 
    <Navbar />
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'></div>
        <p>Playlist</p>
        <h2 className = 'text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}  </h2>
        <h4>{albumData.desc}</h4>
        <p className='mt-1'>
            <img className='inline-block' src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            1,323,154 likes
            <b >50 songs, </b>
            about 2 hr 30 min
        </p>
    </div>
    </>

 )
}

export default DisplayAlbum