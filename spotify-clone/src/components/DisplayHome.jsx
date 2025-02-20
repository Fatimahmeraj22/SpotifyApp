import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem  from './AlbumItem'
import { songsData } from '../assets/assets'
import SongsItem from './SongItem'
const DisplayHome = () => {
    <>   
    <Navbar/>
     <div className='my-5 font-bold text-2xl' >
      <h1 className='my-5 font bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'></div>
        {albumsData.map((item,index)=> (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
         </div>
         <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
         </div>
         </>
  
}

export default DisplayHome