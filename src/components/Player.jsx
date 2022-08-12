import React from 'react'
import {Sidebar} from './Sidebar'
import {Body} from './Body'
import {Footer} from './Footer'
import '../css/Player.css'
export const Player=()=> {
  return (
    <div id="player--main">
        <div id="player--body">
    <Sidebar/>
    <Body/>
    </div>
    <Footer/>
    </div>
  )
}

export default Player