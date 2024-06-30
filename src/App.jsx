import React, { useContext, useRef } from 'react'
import Sidebar from './component/Sidebar';
import Player from './component/Player';
import Display from './component/Display';
import { playerContext } from './context/Playercontext';


const App = () => {
  const {audioref,track}=useContext(playerContext)
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
        </div>
        <Player />
      <audio ref={audioref} src={track.file}preload='auto'></audio>

    </div>
  )
}

export default App

