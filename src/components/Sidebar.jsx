import React from 'react'
import '../css/Sidebar.css'
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";


import SidebarMenuOptions from './SidebarMenuOptions';
// import {link} from '../images/spotify_sidebar.svg'
export const Sidebar=()=> {
  return (
    <div id="sidebar--main">
           <img src="image\spotify_sidebar_logo.png" alt="" id="sidebar--img"/>
           <div id="sidebar--menu">
            <SidebarMenuOptions title="Home" Icon={AiOutlineHome}/>
            <SidebarMenuOptions title="Search" Icon={BsSearch}/>
            <SidebarMenuOptions title="Your Library" Icon={BiLibrary}/>
           </div>
           <br />
           <strong className='playlist--main'>PlayLists</strong>
           <hr/>
           

    </div>
  )
}

export default Sidebar