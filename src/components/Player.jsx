import React from 'react'
import {Sidebar} from './Sidebar'
import {Body} from './Body'
import {Footer} from './Footer'
import '../css/Player.css'
import Button from '@mui/material/Button';

export const player_track=React.createContext();
export const Player=()=> {
  const[playing,changeplaying]=React.useState("1")
  const[isplaying,changeisplaying]=React.useState(false)
  return (
    <player_track.Provider value={{playing,changeplaying,isplaying,changeisplaying}}>
    < div id="player--main">
      <div className='sidebar'>
    <Sidebar/>
    <Body/>
    {/* <hr /> */}
    </div>
    <Footer/>
    </div>
    </player_track.Provider>
  )
}

export default Player