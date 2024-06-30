import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DiaplayHome from './DiaplayHome'
import DisplayAlbumdata from './DisplayAlbumdata'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayref=useRef();
  const location=useLocation();
 const isablum=location.pathname.includes('album');
 const albumid=isablum ?location.pathname.slice(-1):""; //-ve number select end from
 const bgcolor= albumsData[Number(albumid)].bgColor;

 useEffect(()=>{
  if(isablum){
    displayref.current.style.background=`linear-gradient(${bgcolor},#121212)`
      }
      else{
        displayref.current.style.background=`#121212`
      }

 })
  return (
 
      <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
        <Routes>
            <Route path='/' element={<DiaplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbumdata />}/>
           
        </Routes>
      </div>

  )
}

export default Display
