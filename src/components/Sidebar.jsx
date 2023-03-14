import React from 'react'
import '../css/Sidebar.css'
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { useData } from './DataLayer';
import SidebarMenuOptions from './SidebarMenuOptions';




export const Sidebar=()=> {
  const [{ user, token, playlist }, dispatch] = useData();
  
  console.log(user);
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
           {playlist?.items?.map(playlist=>(
            <SidebarMenuOptions title={playlist.name}/>
           ))}
           

    </div>
  )
}

export default Sidebar