import React from 'react'
import '../css/SidebarMenuOptions.css'

function SidebarMenuOptions({title,Icon}) {// Icon i is captial becasue their will icon component value will come 
  return <div className="sidebar_menu">
    <Icon className="icon"/>
    <p className="title">{title}</p>
  </div>
}

export default SidebarMenuOptions